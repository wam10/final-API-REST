FROM node:18

WORKDIR /index

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 5010

CMD [ "npm", "start" ]