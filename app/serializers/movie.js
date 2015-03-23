import DS from 'ember-data';

export default DS.RESTSerializer.extend({
  normalizePayload(payload) {
    payload.videos = payload.videos.results;
    payload.similar = payload.similar.results;

    return { movie: payload };
  }
});
