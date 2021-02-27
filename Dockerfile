FROM node:10
WORKDIR "/app"
COPY ./package.json ./
RUN npm install
COPY . .
EXPOSE 8000
WORKDIR "/app/web_server"
CMD ["node","server.js"]

