# NestJS GraphQL Server with Clean Architecture

<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

<p align="center">A powerful GraphQL server built with NestJS, Prisma, and TypeScript, following Clean Architecture principles.</p>

## 📚 Description

This project is a robust GraphQL server implementation using the NestJS framework. It leverages the power of GraphQL for flexible and efficient API queries, Prisma for database management, and TypeScript for type-safe development. The project is structured following Clean Architecture principles, ensuring a clear separation of concerns and maintainable codebase.

## 🏗️ Project Structure

The project follows Clean Architecture, organized into the following layers:

```
server/
│
├── prisma/                 # Prisma ORM files
│   ├── migrations/         # Database migrations
│   └── schema.prisma       # Prisma schema
│
├── src/
│   ├── core/               # Core business logic (Use Cases & Entities)
│   │   ├── interfaces/     # Interfaces for repositories
│   │   └── services/       # Business logic services (Use Cases)
│   │
│   ├── infrastructure/     # Infrastructure layer (Frameworks & Drivers)
│   │   ├── config/         # Configuration modules
│   │   └── repositories/   # Repository implementations
│   │
│   ├── presentation/       # Presentation layer (Interface Adapters)
│   │   ├── graphql/        # GraphQL specific code
│   │   │   ├── dto/        # Data Transfer Objects
│   │   │   └── resolvers/  # GraphQL resolvers
│   │   └── http/           # HTTP specific modules
│   │
│   ├── main.ts             # Application entry point
│   └── schema.gql          # Generated GraphQL schema
│
├── test/                   # End-to-end tests
├── .eslintrc.js            # ESLint configuration
├── .gitignore              # Git ignore file
├── .prettierrc             # Prettier configuration
├── nest-cli.json           # NestJS CLI configuration
├── package.json            # Project dependencies and scripts
├── tsconfig.json           # TypeScript configuration
└── README.md               # Project documentation
```

## 🏛️ Clean Architecture

This project adheres to Clean Architecture principles:

1. **Core Layer**: Contains business logic, use cases, and domain entities. It's independent of external frameworks and libraries.
2. **Infrastructure Layer**: Implements interfaces defined in the core layer. It includes database access, external services, and framework-specific code.
3. **Presentation Layer**: Handles how the data is presented to and received from the user. In this case, it includes GraphQL resolvers and DTOs.

This architecture ensures:
- Independence of frameworks
- Testability
- Independence of UI
- Independence of Database
- Independence of any external agency

## 🚀 Key Features

- **GraphQL API**: Efficient and flexible querying capabilities.
- **NestJS Framework**: Modular and scalable architecture.
- **Prisma ORM**: Type-safe database access and migrations.
- **TypeScript**: Enhanced developer experience with static typing.
- **Clean Architecture**: Clear separation of concerns for maintainability and scalability.

## 🛠️ Installation

```bash
$ pnpm install
```

## 🏃‍♂️ Running the app

```bash
# development
$ pnpm run start

# watch mode
$ pnpm run start:dev

# production mode
$ pnpm run start:prod
```

## 🧪 Test

```bash
# unit tests
$ pnpm run test

# e2e tests
$ pnpm run test:e2e

# test coverage
$ pnpm run test:cov
```

## 📘 API Documentation

Once the server is running, you can access the GraphQL Playground at `http://localhost:3000/graphql` to explore and test the API.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check [issues page](https://github.com/yourusername/your-repo-name/issues).

## 📝 License

This project is [MIT licensed](LICENSE).

## 🙏 Acknowledgements

- [NestJS](https://nestjs.com/)
- [GraphQL](https://graphql.org/)
- [Prisma](https://www.prisma.io/)
- [TypeScript](https://www.typescriptlang.org/)
- [Clean Architecture](https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html)
