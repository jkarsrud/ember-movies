import DS from 'ember-data';

export default DS.RESTSerializer.extend({
  normalizePayload(payload) {
    payload.videos = payload.videos.results;

    return { movie: payload };
  }
});
