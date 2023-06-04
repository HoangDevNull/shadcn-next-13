FROM node:16.18.1 as dependencies

WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

FROM node:16.18.1 as builder
WORKDIR /app
COPY . .
COPY .env.bsc.example ./.env
COPY --from=dependencies /app/node_modules ./node_modules
RUN yarn build && yarn install --production --ignore-scripts --prefer-offline

FROM node:16.18.1 as runner
WORKDIR /app

ENV NODE_ENV=production

RUN addgroup --gid 1001 nextapp
RUN adduser --gecos "" --uid 1001 --ingroup nextapp --disabled-login hlp-user

COPY --from=builder /app/next.config.js ./next.config.js
COPY --from=builder /app/next-i18next.config.js ./next-i18next.config.js
COPY --from=builder --chown=hlp-user:nextapp /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json

EXPOSE 3000
CMD ["yarn", "start"]