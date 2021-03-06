import {
  moduleForComponent,
  test
} from 'ember-qunit';

import mockTmdbService from '../../mocks/services/tmdb';

moduleForComponent('backdrop-image', {
  // specify the other units that are required for this test
});

test('it renders', function(assert) {
  assert.expect(2);

  // creates the component instance
  var component = this.subject({
    tmdbService: mockTmdbService
  });
  assert.equal(component._state, 'preRender');

  // renders the component to the page
  this.render();
  assert.equal(component._state, 'inDOM');
});
