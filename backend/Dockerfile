FROM oven/bun:latest AS base
WORKDIR /app
RUN apt-get update && apt-get install -y mariadb-client && apt-get install -y curl
COPY package*.json ./
RUN bun install
COPY . .
CMD ["bun", "run", "dev"]