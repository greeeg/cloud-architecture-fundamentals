FROM node:14.15-alpine as base

FROM base as builder

RUN mkdir -p /usr/share/app
WORKDIR /usr/share/app

# Repository directory
COPY ./package.json ./package.json
COPY ./tsconfig.json ./tsconfig.json
COPY ./yarn.lock yarn.lock

# Install all dependencies for build
RUN yarn --frozen-lockfile

RUN yarn build
RUN yarn --frozen-lockfile --production && yarn cache clean

FROM base as runtime

RUN mkdir -p /usr/share/app
WORKDIR /usr/share/app

COPY --from=builder /usr/share/app/package.json ./package.json
COPY --from=builder /usr/share/app/node_modules node_modules
COPY --from=builder /usr/share/app/build ./build

EXPOSE 9999
CMD ["node", "build/index.js"]
