require.config({
  paths: {
    jquery: '../components/jquery/jquery',
    bootstrap: 'vendor/bootstrap',
    handlebars: '../components/handlebars/handlebars',
    ember: '../components/ember/ember',
    showdown: '../components/showdown/compressed/showdown',
    moment: '../components/moment/moment'
  },
  shim: {
    bootstrap: {
      deps: ['jquery'],
      exports: 'jquery'
    },
    ember: {
      deps: ['jquery', 'handlebars'],
      exports: 'Ember'
    },
    handlebars: {
      deps: ['jquery'],
      exports: 'Handlebars'
    },
    app: {
      deps: ['bootstrap', 'templates']
    },
    showdown: {
      exports: 'Showdown'
    },
    moment: {
      exports: 'moment'
    },
    templates: {
      deps: ['ember']
    }
  }
});

require(['app'], function (app) {
  'use strict';
  // use app here
});