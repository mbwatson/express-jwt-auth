FROM node:10.16.0

RUN apt-get update && apt-get install nano tree -y

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY ./package*.json ./
RUN npm install
ENV PATH /usr/src/app/node_modules/.bin:$PATH

COPY ./ ./

CMD ["npm", "start"]