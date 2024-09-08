import { Args, Resolver, Query, Mutation, Subscription } from '@nestjs/graphql';
import {
  BookInput,
  BookSubscription,
  BookType,
  BookUpdateInput,
} from '../dto/book.type';
import { BookService } from 'src/core/services/book.service';
import { PubSub } from 'graphql-subscriptions';
import { Book } from '@prisma/client';

const pubSub = new PubSub();

@Resolver(() => BookType)
export class BookResolver {
  constructor(private readonly bookService: BookService) {}

  @Query(() => [BookType])
  async books(
    @Args('search', { nullable: true }) search?: string,
    @Args('page', { nullable: true }) page?: number,
    @Args('limit', { nullable: true }) limit?: number,
    @Args('sort', { nullable: true }) sort?: 'asc' | 'desc',
    @Args('by', { nullable: true }) by?: string,
  ) {
    return this.bookService.findAll(
      search,
      page,
      limit,
      sort,
      by as keyof Book,
    );
  }

  @Query(() => BookType)
  async book(@Args('id') id: number) {
    return this.bookService.findById(id);
  }

  @Mutation(() => BookType)
  async createBook(@Args('book') book: BookInput) {
    const data = await this.bookService.create(book);
    pubSub.publish('bookSubs', {
      bookSubs: { data, type: 'create' },
    });

    return data;
  }

  @Mutation(() => BookType)
  async updateBook(
    @Args('id') id: number,
    @Args('book') book: BookUpdateInput,
  ) {
    const data = await this.bookService.update(id, book);
    pubSub.publish('bookSubs', {
      bookSubs: { data, type: 'update' },
    });

    return data;
  }

  @Mutation(() => BookType)
  async deleteBook(@Args('id') id: number) {
    await this.bookService.delete(id);
    pubSub.publish('bookSubs', {
      bookSubs: { data: { id }, type: 'delete' },
    });

    return { id };
  }

  @Subscription(() => BookSubscription)
  bookSubs() {
    return pubSub.asyncIterator('bookSubs');
  }
}
