const { setConfig } = require('next/config');
setConfig(require('../next.config'));

const express = require('express');
const next = require('next');
const { Signale } = require('signale');

// const devProxy = require('./proxy');

const dev = process.env.NODE_ENV !== 'production';
// const nextI18NextMiddleware = require('next-i18next/middleware').default;
// const nextI18next = require('../i18n');

const port = process.env.PORT || 3000;
const app = next({ dev });

const handle = app.getRequestHandler();

const options = {
  scope: 'app server',
};
const signale = new Signale(options);

(async () => {
  await app.prepare();
  const server = express();

  // if (process.env.PROXY_MODE === 'local') {
  //   // eslint-disable-next-line global-require
  //   const proxyMiddleware = require('http-proxy-middleware');
  //   Object.keys(devProxy).forEach(context => {
  //     server.use(proxyMiddleware(context, devProxy[context]));
  //   });
  // }

  server.use('/static', express.static('public/static'));

  server.get('*', (req, res) => handle(req, res));

  await server.listen(port);

  signale.success(`> Server listening at http://localhost:${port} as ${dev ? 'development' : process.env.NODE_ENV}`);
})();
