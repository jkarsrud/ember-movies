import Ember from 'ember';

export default Ember.Route.extend({
  movies: Ember.inject.service(),
  beforeModel() {
    return Ember.RSVP.all([
      this.get('movies').getConfiguration()
    ]);
  }
});
