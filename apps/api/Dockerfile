FROM node:18-alpine
WORKDIR /app

# Copy root workspace files required for pnpm and TypeScript
COPY package.json pnpm-workspace.yaml tsconfig.json ./
COPY apps/*/package.json apps/*/
COPY packages/*/package.json packages/*/

# Install dependencies for the API package
RUN corepack enable && pnpm install --filter ./apps/api...

# Copy the rest of the repository
COPY . .

# Build the API
RUN pnpm --filter ./apps/api... build

# Runtime configuration
WORKDIR /app/apps/api
EXPOSE 3001
CMD ["pnpm", "start"]

