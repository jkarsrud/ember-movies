import {
  moduleFor,
  test
} from 'ember-qunit';

moduleFor('adapter:tmdb', 'MoviedbAdapter', {
  // Specify the other units that are required for this test.
  // needs: ['serializer:foo']
});

// Replace this with your real tests.
test('it exists', function(assert) {
  var adapter = this.subject();
  assert.ok(adapter);
});

test('buildURL should return a string with complete url and query parameters', function(assert) {
  var service = this.subject({
    apiKey: 'test',
    host: 'http://test.com/'
  });

  var query = {
    sort_by: 'popularity.desc'
  };

  var url = service.buildURL('test', query);

  assert.equal('http://test.com/test?api_key=test&sort_by=popularity.desc', url);
});
