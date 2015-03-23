import Ember from 'ember';
import layout from '../templates/components/list-item';

export default Ember.Component.extend({
  layout: layout,
  classNames: ['list-item', 'col-sm-2', 'col-md-2', 'col-lg-2'],
  releaseYear: function() {
    return this.get('model.release_date').split('-')[0];
  }.property('model.release_date')
});
