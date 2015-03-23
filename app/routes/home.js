import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    let movies = this.store.find('discover-movie', {
      sort_by: 'popularity.desc'
    });

    return Ember.RSVP.hash({
      movies: movies
    });
  }
});
