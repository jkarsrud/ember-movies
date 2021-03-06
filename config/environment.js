/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'ember-movies',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },
    TMDB: {
      api_key: 'c4fdf793b009c1fa0367b13e7872b091',
      api_host: 'https://api.themoviedb.org',
      api_namespace: '3'
    },
    contentSecurityPolicy: {
      'default-src': "'none'",
      'script-src': "'self' http://ember.dev:35729",
      'font-src': "'self' http://fonts.googleapis.com/ http://fonts.gstatic.com",
      'connect-src': "'self' ws://ember.dev:35729 http://api.themoviedb.org/ https://api.themoviedb.org/",
      'img-src': "'self' http://image.tmdb.org/ https://image.tmdb.org/",
      'style-src': "'self' 'unsafe-inline' http://fonts.googleapis.com/",
      'media-src': "'self'"
    }
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

  }

  return ENV;
};
