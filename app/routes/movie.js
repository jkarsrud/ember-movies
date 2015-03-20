import Ember from 'ember';

export default Ember.Route.extend({
  movieService: Ember.inject.service('movies'),
  model(params) {
    return this.store.findWithQuery('movie', params.movie_id, {
      append_to_response: 'images'
    });
  },
  setupController: function(controller, model) {
    this._super(controller, model);
    controller.set('movieService', this.get('movieService'));
  }
});
