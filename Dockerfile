FROM node:8-alpine

RUN apk add --no-cache git

ENV NODE_ENV=production

RUN mkdir -p /app/
COPY package.json /app/
COPY package-lock.json /app/

RUN cd /app/ && npm install --dev

# uncomment the following line to enable integration with custom budgetkey-ng2-components
# you need to have a copy of budgetkey-ng2-components under .budgetkey-ng2-compoments
COPY .budgetkey-ng2-components /app/.budgetkey-ng2-components
RUN cd /app/.budgetkey-ng2-components && npm install --dev && npm run prebuild && npm run prepublish && npm run install-into /app

COPY *.ico /app/
COPY assets /app/assets
COPY *.json /app/
COPY *.js /app/
COPY *.html /app/
COPY app /app/app


ARG BUDGETKEY_GENERIC_ITEM_BASE_URL
RUN cd /app/ && npm run dist

EXPOSE 8000

CMD cd /app/ && npm start
