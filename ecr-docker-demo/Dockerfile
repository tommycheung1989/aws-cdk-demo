FROM node:19-slim

LABEL "about" = "this is demo for the dockerFile"
WORKDIR /usr/app
COPY package.json .

RUN npm install 
COPY . .
ENV PORT=8001
EXPOSE 8001
CMD ["npm","start"]