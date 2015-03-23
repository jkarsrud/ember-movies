import Ember from 'ember';

export default Ember.Route.extend({
  tmdb: Ember.inject.service(),
  model(params) {
    return this.store.findWithQuery('movie', params.movie_id, {
      append_to_response: 'images'
    });
  },
  setupController: function(controller, model) {
    this._super(controller, model);
    controller.set('tmdbService', this.get('tmdb'));
  }
});
