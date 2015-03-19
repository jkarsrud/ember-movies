import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.find('movie', params.movie_id);
  }
});
