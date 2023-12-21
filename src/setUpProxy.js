const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://api.blog.redberryinternship.ge',
      changeOrigin: true,
    }),
  );
};
