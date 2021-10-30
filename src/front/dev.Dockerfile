FROM node:12-alpine

WORKDIR /usr/src/app/front
ENV CHOKIDAR_USEPOLLING=true

COPY package*.json ./

RUN npm install

EXPOSE 3000

CMD ["npm", "start"]
