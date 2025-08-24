FROM node:18-alpine
WORKDIR /app

# Copy root workspace files required for pnpm and TypeScript
COPY package.json pnpm-workspace.yaml tsconfig.json ./
COPY apps/*/package.json apps/*/
COPY packages/*/package.json packages/*/

# Install dependencies for the web package
RUN corepack enable && pnpm install --filter ./apps/web...

# Copy the rest of the repository
COPY . .

# Build the web app
RUN pnpm --filter ./apps/web... build

# Runtime configuration
WORKDIR /app/apps/web
EXPOSE 3000
CMD ["pnpm", "start"]

