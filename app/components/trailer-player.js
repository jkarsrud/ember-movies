import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['trailer-player'],
  tagName: 'iframe',
  frameborder: 0,
  type: 'text/html',
  attributeBindings: ['trailerUrl:src', 'frameborder', 'type'],
  trailerUrl: function() {
    return 'http://youtube.com/embed/%@1?autoplay=1&fs=1&showinfo=0'.fmt(this.get('model.key'), 'autoplay=true', 'fs=1');
  }.property('model.key'),
});
