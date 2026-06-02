FROM node:18-alpine

WORKDIR /app

COPY package.json ./
RUN npm install

COPY ./src ./src

EXPOSE 3000

# Add healthcheck: curl localhost:3000 every 10s, timeout 2s
HEALTHCHECK --interval=10s --timeout=2s --start-period=5s --retries=3 \
    CMD wget --spider --quiet http://localhost:3000 || exit 1

CMD ["node", "src/app.js"]
