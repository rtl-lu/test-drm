FROM nginx as base

FROM base as prod
COPY . /var/www

