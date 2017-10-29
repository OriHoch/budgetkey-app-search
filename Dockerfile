FROM node:8-alpine

COPY . /app/
RUN apk add --update git

ENV NODE_ENV=production

ARG BUDGETKEY_GENERIC_ITEM_BASE_URL

RUN cd /app/ && \
    npm install --dev && \
    npm run dist

EXPOSE 8000

CMD cd /app/ && npm start
