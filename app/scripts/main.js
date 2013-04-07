require.config({
  paths: {
    jquery: '../components/jquery/jquery',
    bootstrap: 'vendor/bootstrap',
    handlebars: '../components/handlebars/handlebars',
    ember: '../components/ember',
    showdown: '../components/showdown/compressed/showdown',
    moment: '../components/moment/moment',
    'ember-data': '../components/ember-data/ember-data'
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
      deps: ['bootstrap', 'ember', 'ember-data', 'templates', 'moment', 'showdown']
    },
    showdown: {
      exports: 'Showdown'
    },
    moment: {
      exports: 'moment'
    },
    templates: {
      deps: ['ember']
    },
    'ember-data': {
      deps: ['ember']
    }
  }
});

require(['app'], function (app) {
  'use strict';
  // use app here
});