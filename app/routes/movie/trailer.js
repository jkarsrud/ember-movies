import Ember from 'ember';

export default Ember.Route.extend({
  movie: null,
  beforeModel(transition) {
    const parentModel = this.modelFor('movie');
    if(parentModel.get('hasVideos')) {
      this.set('movie', parentModel);
    } else {
      transition.abort();
    }
  },
  model: function() {
    const trailer = this.get('movie.videos').filter((video) => {
      return video.type.toLowerCase() === 'trailer' && video.size >= 720;
    })[0];
    return Ember.RSVP.hash({
      movie: this.get('movie'),
      trailer: trailer
    });
  },
  actions: {
    close: function() {
      this.transitionTo('movie', this.get('movie.id'));
    }
  }
});
