import DS from 'ember-data';

export default DS.RESTSerializer.extend({
  normalizePayload(payload) {
    payload.videos = payload.videos.results;
    payload.similar = payload.similar.results;
    payload.cast = payload.credits.cast;
    payload.crew = payload.credits.crew;

    delete payload.credits;

    return { movie: payload };
  }
});
