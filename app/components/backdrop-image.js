import Ember from 'ember';

export default Ember.Component.extend({
  attributeBindings: ['style'],
  classNameBindings: [':backdrop-image', 'loaded'],
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
    const movieService = this.get('tmdbService');
    const baseUrl = movieService.get('images.secure_base_url');
    const posterUrl = this.get('model.backdrop_path');

    let url = [baseUrl, 'original', posterUrl].join('');

    return url;
  }.property('model'),
});
