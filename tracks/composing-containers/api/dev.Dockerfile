FROM node:14.15.0

WORKDIR /usr/src/app

ENV NODE_ENV development

COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile --silent

COPY nodemon.json tsconfig.json ./
COPY ./src/ ./src/

CMD ["yarn", "run", "nodemon", "--inspect=0.0.0.0", "./src/index.ts"]
