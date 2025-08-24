FROM node:18-alpine
WORKDIR /app

# Copy root workspace files required for pnpm and TypeScript
COPY package.json pnpm-workspace.yaml tsconfig.json ./
COPY apps/*/package.json apps/*/
COPY packages/*/package.json packages/*/

# Install dependencies for the worker package
RUN corepack enable && pnpm install --filter ./apps/worker...

# Copy the rest of the repository
COPY . .

# Build the worker
RUN pnpm --filter ./apps/worker... build

# Runtime configuration
WORKDIR /app/apps/worker
CMD ["pnpm", "start"]

