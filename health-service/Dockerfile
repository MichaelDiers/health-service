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

# ENV, EXPOSE and RUN are added in github workflow
