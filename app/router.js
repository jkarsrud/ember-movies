import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('home', {path: '/'});
  this.resource('movie', {path: '/movies/:movie_id' }, function() {
    this.route('trailer', {path: '/trailer'});
  });
});

export default Router;
