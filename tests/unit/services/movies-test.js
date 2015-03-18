import {
  moduleFor,
  test
} from 'ember-qunit';

moduleFor('service:movies', {
  // Specify the other units that are required for this test.
  // needs: ['service:foo']
});

// Replace this with your real tests.
test('it exists', function(assert) {
  var service = this.subject();
  assert.ok(service);
});

test('buildQueryParams should return a string with api_key and options as query parameters', function(assert) {
  var service = this.subject({
    apiKey: 'test'
  });

  var options = {
    sort_by: 'popularity.desc'
  };

  var url = service.buildQueryParams(options);

  assert.equal('?api_key=test&sort_by=popularity.desc', url);
});

test('buildURL should return a string with complete url and query parameters', function(assert) {
  var service = this.subject({
    apiKey: 'test',
    apiHost: 'http://test.com/'
  });

  var options = {
    sort_by: 'popularity.desc'
  };

  var url = service.buildURL('test', options);

  assert.equal('http://test.com/test?api_key=test&sort_by=popularity.desc', url);
});
