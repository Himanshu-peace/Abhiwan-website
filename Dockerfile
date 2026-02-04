# Stage 1: Build
FROM node:20-alpine AS builder
WORKDIR /app
 
# Install build dependencies for canvas
RUN apk add --no-cache \
    python3 \
    make \
    g++ \
    cairo-dev \
    pango-dev \
    jpeg-dev \
    giflib-dev
 
# Install dependencies
COPY package*.json ./
RUN npm install --legacy-peer-deps
 
# Copy app and build
COPY . .
RUN npm run build
 
# Stage 2: Production
FROM node:20-alpine
WORKDIR /app
 
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/node_modules ./node_modules


EXPOSE 3026

# Start the app
CMD ["npm", "start"]