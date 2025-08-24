FROM node:18-alpine
WORKDIR /app

# Copy workspace manifests to install dependencies with proper linking
COPY pnpm-workspace.yaml package.json ./
COPY packages/*/package.json packages/*/
COPY apps/*/package.json apps/*/
RUN corepack enable && pnpm install

# Copy the full workspace and build the worker package
COPY . .
WORKDIR /app/apps/worker
RUN pnpm build

CMD ["pnpm", "start"]
