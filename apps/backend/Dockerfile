# Base image for the build stage
FROM node:18-alpine AS base

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json (if available) to install dependencies
COPY package*.json ./

# Install all dependencies (including dev dependencies for build)
RUN npm install

# Copy the rest of the application
COPY . .

# Build the NestJS application
RUN npx nx run backend:build

# Production image
FROM node:18-alpine AS production

# Set working directory
WORKDIR /app

# Copy package.json and install only production dependencies
COPY package*.json ./
RUN npm install --only=production

# Copy built application from the base stage
COPY --from=base /app/dist/apps/backend ./dist


# Start the application
CMD ["node", "dist/main.js"]





# DEVELOPMENT
# FROM docker.io/node:lts-alpine

# ENV HOST=0.0.0.0
# ENV PORT=3000

# WORKDIR /app

# RUN addgroup --system backend && \
#     adduser --system -G backend backend

# COPY dist/apps/backend/* backend/
# RUN chown -R backend:backend .

# RUN npm --prefix backend --omit=dev -f install

# CMD [ "node", "backend" ]

