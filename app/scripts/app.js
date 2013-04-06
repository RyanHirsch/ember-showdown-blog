/*global define */
define(['ember'], function (Ember) {
  'use strict';
  var App = Ember.Application.create();

  App.Router.map(function () {
    this.resource('about');
  })

  return App;
});