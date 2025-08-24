# Scraper Platform (Skeleton)

This repository provides a minimal skeleton for a data-scraping platform with Next.js frontend, Fastify + tRPC backend, BullMQ worker, and Prisma ORM. It is **not** production ready but demonstrates the project structure described in the spec.

## Getting Started

1. Install dependencies

```bash
pnpm install
```

2. Start services using Docker

```bash
docker compose up --build
```

This launches PostgreSQL, Redis, the API server, web app, and worker.

3. Run tests

```bash
pnpm test
```

## Project Structure

- `apps/web` – Next.js 14 app router frontend
- `apps/api` – Fastify + tRPC backend
- `apps/worker` – BullMQ worker
- `packages/db` – Prisma schema and migrations
- `packages/core` – Shared workflow primitives

## Environment

Copy `.env.example` to `.env` and adjust values. Example contains safe defaults for local development.

## Status

This is a reference implementation with many features left to implement.
