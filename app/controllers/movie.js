import Ember from 'ember';

export default Ember.Controller.extend({
  releaseYear: function() {
    return this.get('model.release_date').split('-')[0];
  }.property('model.release_date')
});
