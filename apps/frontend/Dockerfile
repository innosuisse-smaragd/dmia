# FROM node:18-alpine AS base

# # This Dockerfile is copy-pasted into our main docs at /docs/handbook/deploying-with-docker.
# # Make sure you update both files!

# FROM base AS builder
# # Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
# RUN apk add --no-cache libc6-compat
# RUN apk update
# # Set working directory
# WORKDIR /app
# RUN npm install turbo --global
# RUN npm install vite --global
# COPY . .
# RUN turbo prune frontend --docker

# # Add lockfile and package.json's of isolated subworkspace
# FROM base AS installer
# RUN apk add --no-cache libc6-compat
# RUN apk update
# WORKDIR /app

# # First install the dependencies (as they change less often)
# COPY .gitignore .gitignore
# COPY --from=builder /app/out/json/ .
# COPY --from=builder /app/out/package-lock.json ./package-lock.json
# RUN npm install

# # Build the project
# COPY --from=builder /app/out/full/ .
# COPY turbo.json turbo.json

# # Uncomment and use build args to enable remote caching
# # ARG TURBO_TEAM
# # ENV TURBO_TEAM=$TURBO_TEAM

# # ARG TURBO_TOKEN
# # ENV TURBO_TOKEN=$TURBO_TOKEN

# RUN npm run build --filter=frontend...

# FROM base AS runner
# WORKDIR /app

# COPY --from=installer /app/apps/frontend/package.json .

# CMD npm run preview apps/frontend

FROM node:18-alpine3.17 as build

WORKDIR /app
COPY . /app

RUN npm install
RUN npm run build

FROM ubuntu
RUN apt-get update
RUN apt-get install nginx -y
COPY --from=build /app/dist /var/www/html/
EXPOSE 80
CMD ["nginx","-g","daemon off;"]