FROM node:14
WORKDIR /app
COPY package.json .
COPY package-lock.json .
COPY main.js .
RUN npm i && mkdir /texts && touch /texts/test.txt
CMD ["node", "main.js"]