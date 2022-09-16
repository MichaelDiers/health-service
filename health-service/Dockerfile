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

ENV HEALTH_SERVICE_HTTP_LINKS="[{\"name\":\"Users Service Documentation\",\"link\":\"https://michaeldiers.github.io/users-service\"},{\"name\":\"Health Service Documentation\",\"link\":\"https://michaeldiers.github.io/health-service\"}]"
ENV HEALTH_SERVICE_PORT=3000
EXPOSE 3000

CMD ["node", "dist/main"]
