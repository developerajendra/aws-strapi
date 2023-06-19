// ./config/functions/bootstrap.js

module.exports = async (strapi) => {
    // Modify the Content Security Policy
    const cspDirectives = {
      defaultSrc: "'self'",
      connectSrc: ["'self'", "'unsafe-inline'", "'unsafe-eval'", "http://localhost:1337"],
      scriptSrc: "'self' 'unsafe-inline' 'unsafe-eval'",
      styleSrc: "'self' 'unsafe-inline'",
    };
  
    // Set the Content Security Policy directives
    strapi.config.middleware.settings.security.contentSecurityPolicy = cspDirectives;
  };
  