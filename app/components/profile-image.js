import Ember from 'ember';
import CoverImage from './cover-image';

export default CoverImage.extend({
  alt: Ember.computed('model.name', function() {
    return this.get('model.name');
  }),
  imageUrl: Ember.computed('model.profile_path', function() {
    const movieService = this.get('tmdbService');
    const baseUrl = movieService.get('images.secure_base_url');
    const posterSizes = movieService.get('images.profile_sizes');
    const posterUrl = this.get('model.profile_path');

    let url = [baseUrl, posterSizes[2], posterUrl].join('');

    return url;
  })
});
