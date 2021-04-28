FROM node:10-alpine

ENV PORT 3000

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

ENV NODE_ENV production

COPY package*.json /usr/src/app
COPY package.json /usr/src/app

COPY . /usr/src/app

EXPOSE 3000

RUN yarn 

CMD [ "yarn", "dev" ]
