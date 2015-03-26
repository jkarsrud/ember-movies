import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findWithQuery('movie', params.movie_id, {
      append_to_response: 'videos,similar,credits'
    });
  }
});
