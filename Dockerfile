FROM gcr.io/stacksmith-images/debian-buildpack:wheezy-r8

MAINTAINER Bitnami <containers@bitnami.com>

ENV STACKSMITH_STACK_ID="icam0w2" \
    STACKSMITH_STACK_NAME="Node.js 6.4.0 on Debian" \
    STACKSMITH_STACK_PRIVATE="1"

RUN bitnami-pkg install node-6.4.0-0 --checksum 41d5a7b17ac1f175c02faef28d44eae0d158890d4fa9893ab24b5cc5f551486f

ENV PATH=/opt/bitnami/node/bin:/opt/bitnami/python/bin:$PATH \
    NODE_PATH=/opt/bitnami/node/lib/node_modules \
    MONGO_HOST=mongo

# ExpressJS template
COPY . /app
WORKDIR /app

RUN npm install --ignore-scripts && node_modules/bower/bin/bower --allow-root install

EXPOSE 3000
CMD ["npm", "start"]
