FROM node:18-alpine
WORKDIR /app
COPY . .
RUN npm install
ENTRYPOINT [ "npm", "start" ]