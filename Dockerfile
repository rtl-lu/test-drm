FROM nginx as base

FROM base as prod
COPY . /usr/share/nginx

