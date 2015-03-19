import Ember from 'ember';

export default Ember.Route.extend({
  movies: Ember.inject.service(),
  model() {
    return this.get('movies').getMovies({
      sort_by: 'popularity.desc'
    });
  }
});
