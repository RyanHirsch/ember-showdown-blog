require.config({
    paths: {
        jquery: '../components/jquery/jquery',
        bootstrap: 'vendor/bootstrap',
        handlebars: '../components/handlebars/handlebars',
        ember: '../components/ember/ember'
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
            deps: ['bootstrap']
        }
    }
});

require(['app'], function (app) {
    'use strict';
    // use app here
});