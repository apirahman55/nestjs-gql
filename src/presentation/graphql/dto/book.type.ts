import { Field, ID, InputType, ObjectType, PartialType } from '@nestjs/graphql';

@ObjectType()
export class BookType {
  @Field(() => ID, { nullable: true })
  id: number;

  @Field(() => String, { nullable: true })
  cover: string;

  @Field(() => String, { nullable: true })
  title: string;

  @Field(() => String, { nullable: true })
  author: string;

  @Field(() => String, { nullable: true })
  description: string;

  @Field(() => String, { nullable: true })
  isbn: string;

  @Field(() => String, { nullable: true })
  link: string;

  @Field(() => Date, { nullable: true })
  publishedAt: Date;
}

@InputType()
export class BookInput {
  @Field()
  cover: string;

  @Field()
  title: string;

  @Field()
  author: string;

  @Field()
  description: string;

  @Field()
  isbn: string;

  @Field()
  link: string;

  @Field(() => Date)
  publishedAt: Date;

  @Field(() => Date, { nullable: true })
  createdAt?: Date;

  @Field(() => Date, { nullable: true })
  updatedAt?: Date;
}

@InputType()
export class BookUpdateInput extends PartialType(BookInput) {}

@ObjectType()
export class BookSubscription {
  @Field()
  data: BookType;

  @Field()
  type: string;
}
