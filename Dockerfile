FROM node:lts

LABEL MAINTAINER="Rami sfari <rami2sfari@gmail.com>"

# set working directory
WORKDIR /app

# add `/usr/src/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install and cache app dependencies
ADD ./package.json /app/package.json
RUN ["npm", "install"]

# add app
ADD ./public /app/public
ADD ./src /app/src

# Create New user & group
RUN groupadd -r react && useradd -r -g react react
USER react

EXPOSE 3000

# start app
CMD ["npm", "start"]
