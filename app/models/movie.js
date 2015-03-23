import DS from 'ember-data';

const attr = DS.attr;

export default DS.Model.extend({
  adult: attr(),
  backdrop_path: attr(),
  belongs_to_collection: attr(),
  budget: attr(),
  genres: attr(),
  homepage: attr(),
  images: attr(),
  imdb_id: attr(),
  name: attr(),
  original_language: attr(),
  original_title: attr(),
  overview: attr(),
  popularity: attr(),
  poster_path: attr(),
  production_companies: attr(),
  production_countries: attr(),
  release_date: attr(),
  revenue: attr(),
  runtime: attr(),
  spoken_languages: attr(),
  status: attr(),
  tagline: attr(),
  title: attr(),
  video: attr(),
  vote_average: attr(),
  vote_count: attr(),
  videos: DS.hasMany('video')
});
