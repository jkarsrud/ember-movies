import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['list-cast'],
  imageUrl: function() {
    const movieService = this.get('tmdbService');
    const baseUrl = movieService.get('images.secure_base_url');
    const posterSizes = movieService.get('images.profile_sizes');
    const posterUrl = this.get('model.profile_path');

    return [baseUrl, posterSizes[0], posterUrl].join('');
  }.property('model.profile_path')
});
