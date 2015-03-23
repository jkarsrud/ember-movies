import Ember from 'ember';

export default Ember.Controller.extend({
  genreNames: Ember.computed.mapBy('model.genres', 'name'),
  releaseYear: function() {
    return this.get('model.release_date').split('-')[0];
  }.property('model.release_date'),
  formattedGenres: function() {
    return this.get('genreNames').join(' / ');
  }.property('genreNames')
});
