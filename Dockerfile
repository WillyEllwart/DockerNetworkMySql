FROM node:14

WORKDIR /app

COPY package*.json .

RUN npm install

COPY . .    

EXPOSE 5012

CMD ["npx", "nodemon", "app.js"]
