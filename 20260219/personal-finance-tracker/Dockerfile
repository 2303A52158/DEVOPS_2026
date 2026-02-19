# Step 1: Use official Node image
FROM node:16

# Step 2: Set working directory
WORKDIR /app

# Step 3: Copy package files
COPY package*.json ./

# Step 4: Install dependencies
RUN npm install

# Step 5: Copy project files
COPY . .

# Step 6: Expose port (hardcode it)
EXPOSE 3000

# Step 7: Set environment variable
ENV ENV_MODE=development

# Step 8: Start app
CMD ["node", "server.js"]

