import DS from 'ember-data';

export default DS.RESTSerializer.extend({
  normalizePayload(payload) {
    return {
      'discover-movie': payload.results
    };
  }
});
