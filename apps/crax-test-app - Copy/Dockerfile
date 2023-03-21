FROM node:16.13.2-alpine as builder

WORKDIR /var/www

COPY . .

RUN npm i -g pnpm
RUN pnpm i
RUN pnpm build:prod
RUN pnpm package-types

FROM builder as worker

EXPOSE 4000

CMD pnpm start:prod