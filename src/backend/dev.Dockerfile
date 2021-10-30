FROM node:12-alpine

WORKDIR /usr/src/app/backend
ENV CHOKIDAR_USEPOLLING=true

COPY package*.json ./

RUN npm install

EXPOSE 3001

CMD ["npm", "run", "start:dev"]
