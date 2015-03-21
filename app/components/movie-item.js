import Ember from 'ember';
import layout from '../templates/components/movie-item';

export default Ember.Component.extend({
  classNames: ['movie-item', 'col-sm-2', 'col-md-2'],
  layout: layout
});
