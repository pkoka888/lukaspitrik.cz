# Dockerfile for lukaspitrik.cz - Astro 6 Static Site
# Multi-stage build for minimal image size (~30-50MB)

# ============================================
# Stage 1: Install dependencies
# ============================================
FROM node:22-alpine AS deps
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci

# ============================================
# Stage 2: Build the Astro site
# ============================================
FROM node:22-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# ============================================
# Stage 3: Serve with Nginx Alpine
# ============================================
FROM nginx:alpine AS runner

# Copy custom nginx configuration
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf

# Copy built static files to nginx web root
COPY --from=builder /app/dist /usr/share/nginx/html

# Create non-root user for security
RUN addgroup -S astro && adduser -S astro -G astro && \
    chown -R astro:astro /usr/share/nginx/html && \
    chown -R astro:astro /var/cache/nginx && \
    chown -R astro:astro /var/log/nginx && \
    chown -R astro:astro /etc/nginx/conf.d && \
    touch /var/run/nginx.pid && \
    chown -R astro:astro /var/run/nginx.pid

# Expose HTTP port
EXPOSE 8080

# Health check for container orchestration
HEALTHCHECK --interval=15s --timeout=3s --start-period=5s --retries=3 \
    CMD wget --no-verbose --tries=1 --spider http://localhost:8080/ || exit 1

# Run nginx as non-root user
USER astro

CMD ["nginx", "-g", "daemon off;"]
