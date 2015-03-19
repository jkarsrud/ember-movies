import Ember from 'ember';

export default Ember.Route.extend({
  movies: Ember.inject.service(),
  model() {
    return this.store.find('discover', {
      sort_by: 'popularity.desc'
    });
  }
});
