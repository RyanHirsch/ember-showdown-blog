/* Ember and Ember-Data are shimmed in as deps */
define([], function () {
  'use strict';
  var App = Ember.Application.create();

  App.Store = DS.Store.extend({
    revision: 12,
    adapter: 'DS.FixtureAdapter'
  });

  App.Router.map(function () {
    this.resource('about');
  });

  App.Post = DS.Model.extend({
    title: DS.attr('string'),
    author: DS.attr('string'),
    intro: DS.attr('string'),
    extended: DS.attr('string'),
    publishedAt: DS.attr('date')
  });

  App.Post.FIXTURES = [{
    id: 1,
    title: "Rails is Omakase",
    author: "d2h",
    publishedAt: new Date('12-27-2012'),
    intro: "There are lots of a la carte software",
    extended: "I want this for my ORM"
  }];

  return App;
});