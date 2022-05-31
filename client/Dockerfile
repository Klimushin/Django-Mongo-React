FROM node:14.9
WORKDIR /client
COPY package*.json ./
RUN npm install
COPY . ./
EXPOSE 3000
