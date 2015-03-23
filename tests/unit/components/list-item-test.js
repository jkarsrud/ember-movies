import {
  moduleForComponent,
  test
} from 'ember-qunit';

moduleForComponent('list-item', {
  // specify the other units that are required for this test
  needs: ['component:cover-image']
});

test('it renders', function(assert) {
  assert.expect(2);

  // creates the component instance
  var component = this.subject({
    layout: ''
  });

  assert.equal(component._state, 'preRender');

  // renders the component to the page
  this.render();
  assert.equal(component._state, 'inDOM');
});
