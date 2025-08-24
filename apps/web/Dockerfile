FROM node:18-alpine
WORKDIR /app

# Copy workspace manifests to install dependencies with proper linking
COPY pnpm-workspace.yaml package.json ./
COPY packages/*/package.json packages/*/
COPY apps/*/package.json apps/*/
RUN corepack enable && pnpm install

# Copy the full workspace and build the web package
COPY . .
WORKDIR /app/apps/web
RUN pnpm build

EXPOSE 3000
CMD ["pnpm", "start"]
