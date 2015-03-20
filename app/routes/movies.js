import Ember from 'ember';

export default Ember.Route.extend({
  movieService: Ember.inject.service('movies'),
  model() {
    const discoverMovies = this.store.find('discover', {
      sort_by: 'popularity.desc'
    });

    const upcomingMovies = this.store.find('upcoming');

    return Ember.RSVP.hash({
      discover: discoverMovies,
      upcoming: upcomingMovies
    });
  },
  setupController: function(controller, model) {
    this._super(controller, model);
    controller.set('movieService', this.get('movieService'));
  }
});
