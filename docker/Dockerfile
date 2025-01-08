ARG BUILD_IMAGE=node:18.20.5-alpine
ARG BASE_IMAGE=nginxinc/nginx-unprivileged:1.27.2-alpine
FROM $BUILD_IMAGE AS build-stage
WORKDIR /usr/src/app

COPY . .

# lastUpdated require git
RUN apk add --update --no-cache git
RUN npm install -g npm pnpm
RUN pnpm install
RUN pnpm docs:build

FROM $BASE_IMAGE AS production-stage
ARG APP_NAME
ARG BUILD_DATE
ARG BUILD_VERSION="0.0.0"
ARG BUILD_REVISION="0"
LABEL org.opencontainers.image.created=$BUILD_DATE \
    org.opencontainers.image.url="" \
    org.opencontainers.image.version=$BUILD_VERSION \
    org.opencontainers.image.revision=$BUILD_REVISION \
    org.opencontainers.image.vendor="" \
    org.opencontainers.image.title="Personal Blog" \
    org.opencontainers.image.description="Personal Blog" \
    org.opencontainers.image.documentation="" \
    org.opencontainers.image.authors="Michael Lin <stargazer.taiwan@gmail.com>" \
    org.opencontainers.image.base.name=$BASE_IMAGE \
    org.opencontainers.image.build.name=$BUILD_IMAGE

COPY --from=build-stage --chown=101:0 /usr/src/app/docker/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build-stage --chown=101:101 /usr/src/app/packages/$APP_NAME/.vitepress/dist /usr/share/nginx/html
# COPY --chown=101:101 ../dist /usr/share/nginx/html

# COPY ./nginx.conf /etc/nginx/conf.d/default.conf