/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'pilas-website-test',
    environment: environment,
    baseURL: '/',
    locationType: 'hash',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  ENV.imgManager = {
    maxTries: 1,
    delay: 10,
    batchSize: 5,
    lazyLoad: true,
    loadingSrc: 'images/cargando.png',
    errorSrc: 'images/error.png',
    loadingClass: 'loading',
    successClass: 'success',
    errorClass: 'error'
  };

  ENV.contentSecurityPolicy = {
    "default-src": "*",
    'script-src': "*",
    'font-src': "'self' http://fonts.gstatic.com",
    'connect-src': "'self' *",
    'style-src': "'self' 'unsafe-inline' http://fonts.googleapis.com",
    'report-uri': '*',
    'img-src': '*'
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {
    ENV.baseURL = '/pilas-website-test/';

    ENV.googleAnalytics = {
      webPropertyId: 'UA-5829629-2'
    };
  }

// all settings are optionals
ENV.imgManager = {
  maxTries: 1,
  delay: 2000,
  batchSize: 0,
  lazyLoad: true,
  loadingClass: 'loader',
  successClass: 'success',
  errorClass: 'error'
};

  return ENV;
};
