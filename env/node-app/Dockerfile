FROM node:7-wheezy
ENV NODE_ENV=development
EXPOSE 8090
COPY . /srv/app
RUN cd /srv/app && npm install && npm cache clean
WORKDIR /srv/app
CMD npm run start