FROM node:16-alpine

COPY package.json /work/

RUN cd /work && npm install

COPY . /work/

ENV PUBLIC_URL="https://danfarino.github.io/objectgraph"

RUN cd /work && npm run build && rm -f build/.gitignore
