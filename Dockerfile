FROM node:latest as node
WORKDIR /app
COPY package*.json /app/
RUN npm install
COPY . /app/
EXPOSE 4200
CMD ["npm", "start"]
