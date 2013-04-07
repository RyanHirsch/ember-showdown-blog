/* Ember and Ember-Data are shimmed in as deps */
define([], function () {
  'use strict';
  var App = Ember.Application.create();

  App.Store = DS.Store.extend({
    revision: 12,
    adapter: 'DS.FixtureAdapter'
  });

  App.Router.map(function () {
    this.resource('posts', function() {
      //Nested Route with dynamic segment
      this.resource('post', {path: ':post_id'});
    });
    this.resource('about');
  });

  App.IndexRoute = Ember.Route.extend({
    redirect: function() {
      this.transitionTo('posts');
    }
  });

  App.PostsRoute = Ember.Route.extend({
    model: function() {
      return App.Post.find();
    }
  });

  App.PostController = Ember.ObjectController.extend({
    isEditing: false,
    startEditing: function() {
      this.set('isEditing', true);
    },
    doneEditing: function() {
      this.set('isEditing', false);
    }
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

  Ember.Handlebars.registerBoundHelper('date', function(date) {
    return moment(date).fromNow();
  });

  var showdown = new Showdown.converter();
  Ember.Handlebars.registerBoundHelper('markdown', function(markdownText) {
    return new Ember.Handlebars.SafeString(showdown.makeHtml(markdownText));
  });

  return App;
});