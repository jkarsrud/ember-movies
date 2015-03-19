import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('movies', {path: '/'}, function() {});
  this.resource('movie', {path: '/movie/:movie_id' }, function() {});
});

export default Router;
