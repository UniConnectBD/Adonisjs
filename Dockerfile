FROM node:20-alpine

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install production dependencies
RUN npm ci --omit=dev

# Copy project files
COPY . .

# Build the project
RUN npm run build

EXPOSE 3333

# Start the server from the build directory
WORKDIR /app/build
CMD ["node", "bin/server.js"]