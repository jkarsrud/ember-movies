import {
  moduleForComponent,
  test
} from 'ember-qunit';

import mockMovieService from '../../mocks/services/movies';

moduleForComponent('movie-item', {
  // specify the other units that are required for this test
  needs: ['component:movie-cover']
});

test('it renders', function(assert) {
  assert.expect(2);

  // creates the component instance
  var component = this.subject({
    movieService: mockMovieService
  });

  assert.equal(component._state, 'preRender');

  // renders the component to the page
  this.render();
  assert.equal(component._state, 'inDOM');
});
