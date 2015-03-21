import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'img',
  attributeBindings: ['imageUrl:src', 'alt'],
  classNameBindings: [':movie-cover', 'loaded'],
  loaded: false,
  waitForImageLoad: function() {
    this.$().on('load', () => {
      this.set('loaded', true);
    });
  }.on('didInsertElement'),
  alt: function() {
    return this.get('movie.title');
  }.property('movie.title'),
  imageUrl: function() {
    const movieService = this.get('tmdbService');
    const baseUrl = movieService.get('images.secure_base_url');
    const posterSizes = movieService.get('images.poster_sizes');
    const posterUrl = this.get('movie.poster_path');

    let posterIndex;
    switch(this.get('size')) {
      case 'small':
        posterIndex = 1;
        break;
      case 'medium':
        posterIndex = 2;
        break;
      case 'large':
        posterIndex = 3;
        break;
      default:
        posterIndex = 1;
    }

    let url = [baseUrl, posterSizes[posterIndex], posterUrl].join('');

    return url;
  }.property('movie', 'size'),
});
