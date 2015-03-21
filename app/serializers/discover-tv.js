import DS from 'ember-data';

export default DS.RESTSerializer.extend({
  normalizePayload(payload) {
    return {
      'discover-tv': payload.results
    };
  }
});