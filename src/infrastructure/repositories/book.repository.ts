import { Injectable } from '@nestjs/common';
import { Book } from '@prisma/client';
import { IBookRepository } from 'src/core/interfaces/book.repository';
import { PrismaService } from 'src/core/services/prisma.service';

@Injectable()
export class BookRepository implements IBookRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(
    search: string,
    page: number,
    limit: number,
    sort: 'asc' | 'desc',
    by: keyof Book,
  ): Promise<Book[]> {
    const searchQuery = [];
    if (search) {
      searchQuery.push({ title: { contains: search } });
      searchQuery.push({ author: { contains: search } });
    }

    return this.prisma.book.findMany({
      skip: ((page ?? 1) - 1) * (limit ?? 10),
      take: limit ?? 10,
      where: searchQuery.length ? { OR: searchQuery } : undefined,
      orderBy: { [by ?? 'id']: sort ?? 'desc' },
    });
  }

  async findById(id: number): Promise<Book | null> {
    return this.prisma.book.findUnique({ where: { id } });
  }

  async create(book: Partial<Book>): Promise<Book> {
    return this.prisma.book.create({ data: book as Book });
  }

  async update(id: number, book: Partial<Book>): Promise<Book | null> {
    return this.prisma.book.update({ where: { id }, data: book });
  }

  async delete(id: number): Promise<void> {
    await this.prisma.book.delete({ where: { id } });
  }
}
