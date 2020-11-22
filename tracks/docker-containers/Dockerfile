FROM node:15.2.1-alpine

RUN mkdir -p /usr/share/app
WORKDIR /usr/share/app

COPY ./package.json ./package.json
COPY ./yarn.lock ./yarn.lock

RUN yarn --frozen-lockfile --production

COPY ./src ./src

EXPOSE 9000
CMD ["node", "src/index.js"]

