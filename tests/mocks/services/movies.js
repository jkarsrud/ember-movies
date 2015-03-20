import Ember from 'ember';

const mockMovieService = Ember.Object.create({
  images: {
    secure_base_url: 'testsecure',
    poster_sizes: [0,1,2,3,4,5]
  }
});

export default mockMovieService;
