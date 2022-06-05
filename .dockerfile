FROM daocloud.io/library/node:16.14-slim
COPY . /usr/share/node
RUN node index.js
