import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('home', {path: '/'});
  this.resource('movies', { path: '/movie' });
  this.resource('movie', {path: '/movie/:movie_id' }, function() {
    this.route('trailer');
  });
  this.resource('tv-shows', { path: '/tv' });
  this.resource('tv', { path: '/tv/:tv_id' });
});

export default Router;
