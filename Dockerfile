FROM node:alpine
WORKDIR /app/boilerplate
COPY package*.json /app/boilerplate/
COPY . /app/boilerplate/
RUN npm config set unsafe-perm true
