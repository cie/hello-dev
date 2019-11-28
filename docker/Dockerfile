FROM node:10
RUN npm install -g git+https://git@github.com/brunch/brunch#60dee22b5532887b78ce437794b4c9c7ae375fa2 pnpm
COPY deps-install.js /usr/local/lib/node_modules/brunch/node_modules/deps-install/index.js
WORKDIR /data
EXPOSE 3333
CMD brunch watch --server


