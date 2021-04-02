# 构建
FROM node:lts-alpine as build
ADD [".","/src"]
WORKDIR /src
RUN npm install --registry https://registry.npm.taobao.org
RUN npm run build

# 部署
FROM nginx:stable
COPY --from=build /src/dist /usr/share/nginx/html
