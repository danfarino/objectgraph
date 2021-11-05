FROM node:16-alpine

COPY package.json /work/

RUN cd /work && npm install

COPY . /work/

RUN cd /work && npm run build && rm -f build/.gitignore
