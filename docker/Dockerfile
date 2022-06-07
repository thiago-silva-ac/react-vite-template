# Build step
FROM node:lts-alpine as builder

RUN mkdir /usr/app

COPY package.json yarn.lock /usr/app/

WORKDIR /usr/app

RUN yarn

COPY ./ /usr/app

ENV NODE_ENV production

ENV PATH /usr/app/node_modules/.bin:$PATH


RUN yarn build --mode=stage

# Server step
FROM nginx:alpine

WORKDIR /usr/share/nginx/html

RUN rm -rf ./*

COPY --from=builder /usr/app/dist .

RUN rm /etc/nginx/conf.d/default.conf

COPY docker/nginx.conf /etc/nginx/conf.d

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
