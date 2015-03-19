import Ember from 'ember';

export default Ember.Component.extend({
  movieService: Ember.inject.service('movies'),
  tagName: 'img',
  attributeBindings: ['imageUrl:src', 'alt'],
  alt: function() {
    return this.get('movie.title');
  }.property('movie.title'),
  imageUrl: function() {
    const movieService = this.get('movieService');

    console.log(this.get('movie'));

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
      default:
        posterIndex = 1;
    }

    let url = [baseUrl, posterSizes[posterIndex], posterUrl].join('');

    return url;
  }.property('movie', 'size'),
});
