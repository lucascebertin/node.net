FROM node:7.7-alpine

MAINTAINER Lucas Cé Bertin

RUN mkdir -p /usr/local/node-app
COPY . /usr/local/node-app/
WORKDIR /usr/local/node-app/

ENV DBCONF='123'
CMD [ "node", "--harmony-async-await", "index.js" ]

EXPOSE 3000
