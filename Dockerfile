FROM node:20-alpine
# Add this to trust proxy
ENV TRUST_PROXY=true

WORKDIR /app

# Copy package files
COPY package*.json ./
COPY tsconfig*.json ./

# Install dependencies with exact versions
RUN npm ci

# Copy project files
COPY . .

# Build the project
RUN node ace build

# Expose the port the app runs on
EXPOSE 3333

# Switch to build directory and install production dependencies
WORKDIR /app/build
RUN npm ci --omit="dev"

# Start the server using the built application
CMD ["node", "bin/server.js"]