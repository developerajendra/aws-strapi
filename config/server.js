const setCustomCSPHeader = (ctx) => {
  ctx.set('Content-Security-Policy', "connect-src 'self' http://localhost:1337");
  ctx.set('Content-Security-Policy', "connect-src 'self' http://ec2-54-197-99-25.compute-1.amazonaws.com:1337");
  ctx.set('Content-Security-Policy', "connect-src 'self' http://54.85.37.217");
  ctx.set('Content-Security-Policy', "connect-src 'self' https://localhost:1337");
  ctx.set('Content-Security-Policy', "connect-src 'self' https://ec2-54-197-99-25.compute-1.amazonaws.com:1337");
  ctx.set('Content-Security-Policy', "connect-src 'self' https://54.85.37.217");
};

module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS'),
  },
  webhooks: {
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
  },
  middleware: {
    settings: {
      csp: {
        enabled: true,
        fn: setCustomCSPHeader,
      },
    },
  },
});
