FROM node:lts-alpine as setup
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM node:lts-alpine as runner
WORKDIR /app
COPY package*.json ./
RUN npm ci --omit=dev
COPY --from=setup /app/dist ./dist/

ENV HEALTH_SERVICE_API_KEY_HEADER_NAME=x-api-key
ENV HEALTH_SERVICE_HTTP_LINKS="[{\"name\":\"Users Service Documentation\",\"link\":\"https://michaeldiers.github.io/users-service\"},{\"name\":\"Health Service Documentation\",\"link\":\"https://michaeldiers.github.io/health-service\"}]"
ENV HEALTH_SERVICE_PORT=3000
ENV HEALTH_SERVICE_USERS_GRPC_SERVICE=VALUE
ENV HEALTH_SERVICE_USERS_GRPC_SERVICE_API_KEY=VALUE

EXPOSE 3000

CMD ["node", "dist/main"]
