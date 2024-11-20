FROM node:20-alpine

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install production dependencies
RUN npm ci

# Copy project files
COPY . .

# Build the project
RUN npm run build

EXPOSE 3333

# Start the server from the bin directory
CMD ["node", "bin/server.ts"]