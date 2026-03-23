# ─────────────────────────────────────────
# Stage 1 – Build
# ─────────────────────────────────────────
FROM node:18-alpine AS builder

WORKDIR /app

# Copy dependency manifests first (layer caching)
COPY package.json ./

# Install dependencies
RUN npm install --silent

# Copy source code
COPY . .

# Production build
RUN npm run build

# ─────────────────────────────────────────
# Stage 2 – Serve (optimised Nginx image)
# ─────────────────────────────────────────
FROM nginx:stable-alpine

# Remove default Nginx static assets
RUN rm -rf /usr/share/nginx/html/*

# Copy React build output from Stage 1
COPY --from=builder /app/build /usr/share/nginx/html

# Custom Nginx config for React SPA routing
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
