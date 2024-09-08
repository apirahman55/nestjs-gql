import { Inject, Injectable } from '@nestjs/common';
import { Book } from '@prisma/client';
import { IBookRepository } from '../interfaces/book.repository';

@Injectable()
export class BookService {
  constructor(
    @Inject(IBookRepository) private readonly bookRepository: IBookRepository,
  ) {}

  async findAll(
    search: string,
    page: number,
    limit: number,
    sort: 'asc' | 'desc',
    by: keyof Book,
  ): Promise<Book[]> {
    return this.bookRepository.findAll(search, page, limit, sort, by);
  }

  async findById(id: number): Promise<Book | null> {
    return this.bookRepository.findById(id);
  }

  async create(book: Partial<Book>): Promise<Book> {
    return this.bookRepository.create(book);
  }

  async update(id: number, book: Partial<Book>): Promise<Book | null> {
    return this.bookRepository.update(id, book);
  }

  async delete(id: number): Promise<void> {
    await this.bookRepository.delete(id);
  }
}
