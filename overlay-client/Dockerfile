FROM node:13.6-alpine as build-deps

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app




ADD src	src
ADD public public
COPY package.json .
#COPY .env .
#COPY package-lock.json .
COPY yarn.lock .

#CMD ["yarn" , "install"]

# add `/usr/src/app/node_modules/.bin` to $PATH
ENV PATH /usr/src/app/node_modules/.bin:$PATH

# install and cache app dependencies
COPY package.json /usr/src/app/package.json
COPY package-lock.json /usr/src/app/package-lock.json
RUN npm install --silent
RUN npm install react-scripts@1.1.1 -g --silent
RUN yarn build

FROM nginx:1.12-alpine
#WORKDIR /usr/share/nginx/html
COPY --from=build-deps /usr/src/app/build/ /usr/share/nginx/html/
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
