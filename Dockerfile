FROM ubuntu:latest
FROM node:14-alpha
LABEL authors="oskar wong"

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

EXPOSE 3001

CMD ["npm", "start"]

ENTRYPOINT ["top", "-b"]