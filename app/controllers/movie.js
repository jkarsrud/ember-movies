import Ember from 'ember';

export default Ember.Controller.extend({
  genreNames: Ember.computed.mapBy('model.genres', 'name'),
  releaseYear: function() {
    return this.get('model.release_date').split('-')[0];
  }.property('model.release_date'),
  formattedGenres: function() {
    return this.get('genreNames').join(' / ');
  }.property('genreNames'),
  slicedSimilar: function() {
    return this.get('model.similar').slice(0, 6);
  }.property('model.similar'),
  topCast: function() {
    return this.get('model.cast').slice(0,5);
  }.property('model.cast'),
  director: Ember.computed('model.crew', function() {
    return this.get('model.crew').findBy('job', 'Director');
  })
});
