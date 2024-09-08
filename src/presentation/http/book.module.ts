import { Module } from '@nestjs/common';
import { BookResolver } from '../graphql/resolvers/book.resolver';
import { BookService } from 'src/core/services/book.service';
import { IBookRepository } from '../../core/interfaces/book.repository';
import { BookRepository } from 'src/infrastructure/repositories/book.repository';
import { PrismaModule } from 'src/infrastructure/config/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [
    BookResolver,
    BookService,
    {
      provide: IBookRepository,
      useClass: BookRepository,
    },
  ],
})
export class BookModule {}
