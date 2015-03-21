import Ember from 'ember';

export default Ember.Route.extend({
  tmdb: Ember.inject.service(),
  model() {
    const discoverMovies = this.store.find('discover-movie', {
      sort_by: 'popularity.desc'
    });

    const discoverTvShows = this.store.find('discover-tv', {
      sort_by: 'popularity.desc'
    });

    return Ember.RSVP.hash({
      movies: discoverMovies,
      shows: discoverTvShows
    });
  },
  setupController: function(controller, model) {
    this._super(controller, model);
    controller.set('tmdbService', this.get('tmdb'));
  }
});
