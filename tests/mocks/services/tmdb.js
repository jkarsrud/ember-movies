import Ember from 'ember';

const mockTmdbService = Ember.Object.create({
  images: {
    secure_base_url: 'testsecure',
    poster_sizes: [0,1,2,3,4,5],
    profile_sizes: [0,1,2,3]
  }
});

export default mockTmdbService;
