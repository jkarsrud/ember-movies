import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    return this.store.findWithQuery('person', params.person_id, {
      append_to_response: 'movie_credits'
    });
  }
});
