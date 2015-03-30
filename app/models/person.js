import DS from 'ember-data';

const attr = DS.attr;

export default DS.Model.extend({
  name: attr(),
  biography: attr(),
  birthday: attr(),
  homepage: attr(),
  profile_path: attr(),
  place_of_birth: attr(),
  movie_credits: attr()
});
