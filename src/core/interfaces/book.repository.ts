import { Book } from '@prisma/client';

export interface IBookRepository {
  findAll(
    search: string,
    page: number,
    limit: number,
    sort: 'asc' | 'desc',
    by: keyof Book,
  ): Promise<Book[]>;
  findById(id: number): Promise<Book | null>;
  create(book: Partial<Book>): Promise<Book>;
  update(id: number, book: Partial<Book>): Promise<Book | null>;
  delete(id: number): Promise<void>;
}

export const IBookRepository = Symbol('IBookRepository');
