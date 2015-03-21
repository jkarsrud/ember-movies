import Ember from 'ember';

export default Ember.Route.extend({
  tmdb: Ember.inject.service(),
  beforeModel() {
    return Ember.RSVP.all([
      this.get('tmdb').getConfiguration()
    ]);
  }
});
