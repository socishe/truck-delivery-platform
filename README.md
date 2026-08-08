# Truck Delivery Platform

Production-ready MVP for connecting hardware stores with local truck drivers.

## Features

- **Hardware Stores**: Request truck deliveries, track status, view history
- **Drivers**: Accept deliveries, update status, manage availability
- **Admin**: Manage stores, drivers, trucks, locations, and pricing
- **Real-time Updates**: Live delivery status tracking
- **Atomic Assignment**: Prevents race conditions when multiple drivers accept same delivery

## Tech Stack

### Frontend
- React 18
- TypeScript
- Vite
- Tailwind CSS
- Redux Toolkit
- React Hook Form
- Zod
- React Router

### Backend
- Node.js
- Express
- TypeScript
- Prisma ORM
- PostgreSQL
- JWT Authentication

### Monorepo
- pnpm workspaces
- Shared TypeScript types and utilities

## Project Structure

```
.
├── apps/
│   ├── web/              # React frontend (Vite)
│   └── api/              # Express backend
├── packages/
│   ├── shared/           # Shared types, enums, schemas
│   └── config/           # ESLint and TypeScript configs
├── prisma/               # Database schema and migrations
└── package.json          # Root workspace config
```

## Prerequisites

- Node.js >= 18.0.0
- pnpm >= 8.0.0
- PostgreSQL >= 14

## Installation

```bash
# Install dependencies
pnpm install

# Copy environment variables
cp .env.example .env

# Update .env with your database URL and secrets
```

## Development

```bash
# Start all applications in development mode
pnpm dev

# This starts:
# - Frontend at http://localhost:5173
# - API at http://localhost:5000
```

## Database

```bash
# Run migrations
pnpm db:migrate

# Seed with sample data
pnpm db:seed

# Open Prisma Studio
pnpm db:studio
```

## Building

```bash
# Build all packages and applications
pnpm build
```

## Linting & Type Checking

```bash
# Run ESLint
pnpm lint

# Run TypeScript checks
pnpm type-check

# Format code
pnpm format
```

## Testing

```bash
# Run all tests
pnpm test
```

## Development Credentials

After seeding, use these credentials to login:

### Admin
- Email: `admin@example.com`
- Password: `password123`

### Hardware Store
- Email: `hardware1@example.com`
- Password: `password123`

### Driver
- Email: `driver1@example.com`
- Password: `password123`

## Architecture Notes

### Delivery Assignment
The system uses atomic database transactions to prevent race conditions when multiple drivers accept the same delivery simultaneously. This ensures only one driver can accept a delivery, even if multiple requests arrive at the same time.

### Shared Package
The `@truck-platform/shared` package contains:
- Type definitions (User, Driver, DeliveryRequest, etc.)
- Enums (UserRole, TruckType, DeliveryStatus, etc.)
- Validation schemas (Zod)

Both frontend and backend import from this package to maintain type safety and consistency.

### No External APIs Yet
This MVP does not include:
- GPS tracking
- Maps integration
- Live location tracking
- Payment processing
- Chat functionality
- Push notifications

The architecture is designed to support these features in future phases.

## License

MIT
