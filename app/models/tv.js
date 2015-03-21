import DS from 'ember-data';

const attr = DS.attr;

export default DS.Model.extend({
  "backdrop_path": attr(),
  "created_by": attr(),
  "episode_run_time": attr(),
  "first_air_date":attr(),
  "genres": attr(),
  "homepage":attr(),
  "in_production":attr(),
  "languages":attr(),
  "last_air_date":attr(),
  "name":attr(),
  "networks": attr(),
  "number_of_episodes":attr(),
  "number_of_seasons":attr(),
  "origin_country":attr(),
  "original_language":attr(),
  "original_name":attr(),
  "overview":attr(),
  "popularity":attr(),
  "poster_path":attr(),
  "production_companies":attr(),
  "seasons": attr(),
  "status": attr(),
  "type":attr(),
  "vote_average":attr(),
  "vote_count":attr()
});
