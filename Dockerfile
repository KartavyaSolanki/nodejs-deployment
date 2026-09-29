# Small official Node image
FROM node:22-alpine

WORKDIR /app

# Copy dependency manifest first so this layer is cached between builds
COPY package.json ./

# No dependencies today, but this keeps the Dockerfile correct if you add some
RUN npm install --omit=dev

# Copy the application code
COPY server.js ./

# Run as the non-root user that the base image provides
USER node

ENV PORT=3000
EXPOSE 3000

CMD ["node", "server.js"]
