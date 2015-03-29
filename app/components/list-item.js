import Ember from 'ember';
import layout from '../templates/components/list-item';

export default Ember.Component.extend({
  layout: layout,
  classNames: ['list-item', 'col-xs-4', 'col-sm-3', 'col-md-2', 'col-lg-2'],
  releaseYear: function() {
    return this.get('model.release_date').split('-')[0];
  }.property('model.release_date')
});
