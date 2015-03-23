import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'img',
  attributeBindings: ['imageUrl:src', 'alt'],
  classNameBindings: [':cover-image', 'loaded'],
  loaded: false,
  waitForImageLoad: function() {
    this.$().on('load', () => {
      this.set('loaded', true);
    });
  }.on('didInsertElement'),
  removeImageLoaded: function() {
    this.set('loaded', false);
  }.on('willDestroyElement').observes('model.poster_path'),
  alt: function() {
    return this.get('movie.title');
  }.property('model.title'),
  imageUrl: function() {
    const movieService = this.get('tmdbService');
    const baseUrl = movieService.get('images.secure_base_url');
    const posterSizes = movieService.get('images.poster_sizes');
    const posterUrl = this.get('model.poster_path');

    let posterIndex;
    switch(this.get('size')) {
      case 'small':
        posterIndex = 2;
        break;
      case 'medium':
        posterIndex = 3;
        break;
      case 'large':
        posterIndex = 4;
        break;
      default:
        posterIndex = 2;
    }

    let url = [baseUrl, posterSizes[posterIndex], posterUrl].join('');

    return url;
  }.property('model.poster_path', 'size'),
});
