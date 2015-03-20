import Ember from 'ember';

export default Ember.Route.extend({
  movies: Ember.inject.service(),
  model() {
    const discoverMovies = this.store.find('discover', {
      sort_by: 'popularity.desc'
    });

    const upcomingMovies = this.store.find('upcoming');

    return Ember.RSVP.hash({
      discover: discoverMovies,
      upcoming: upcomingMovies,
      movieService: this.get('movies')
    });
  }
});
