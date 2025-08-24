FROM node:18-alpine
WORKDIR /app
COPY package.json .
RUN corepack enable && pnpm install
COPY . .
RUN pnpm build
CMD ["pnpm", "start"]
