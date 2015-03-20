import Ember from 'ember';

export default Ember.Component.extend({
  attributeBindings: ['style'],
  classNameBindings: [':movie-backdrop', 'loaded'],
  loaded: false,
  waitForImageLoad: function() {
    const img = Ember.$('<img />', {
      src: this.get('imageUrl'),
      style: 'display: none;'
    });

    img.on('load', () => {
      this.$().remove('img');
      this.set('loaded', true);
    });
  }.on('didInsertElement'),
  style: function() {
    return 'background-image: url(%@)'.fmt(this.get('imageUrl'));
  }.property('imageUrl'),
  imageUrl: function() {
    const movieService = this.get('movieService');
    const baseUrl = movieService.get('images.secure_base_url');
    const posterUrl = this.get('movie.backdrop_path');

    let url = [baseUrl, 'original', posterUrl].join('');

    return url;
  }.property('movie'),
});
