import Ember from 'ember';
import DS from 'ember-data';

import config from '../config/environment';

const get = Ember.get;

export default DS.RESTAdapter.extend({
  host: config.TMDB.api_host,
  namespace: config.TMDB.api_namespace,
  apiKey: config.TMDB.api_key,
  find(store, type, id) {
    const url = this.buildURLWithQueryParams(type.typeKey, {}, id);
    return this.ajax(url, 'GET');
  },
  findAll(store, type) {
    var url = this.buildURLWithQueryParams(type.typeKey, {});
    return this.ajax(url, 'GET');
  },
  findQuery(store, type, query) {
    var url = this.buildURLWithQueryParams(type.typeKey, query);
    return this.ajax(url, 'GET');
  },
  buildURLWithQueryParams(type, query, id) {
    var url = [],
        host = get(this, 'host'),
        prefix = this.urlPrefix();

    if (type) { url.push(this.pathForType(type)); }

    //We might get passed in an array of ids from findMany
    //in which case we don't want to modify the url, as the
    //ids will be passed in through a query param
    if (id && !Ember.isArray(id)) { url.push(encodeURIComponent(id)); }

    if (prefix) { url.unshift(prefix); }

    url = url.join('/');

    if (!host && url) { url = '/' + url; }

    url = url + this.createQueryStrings(query);

    return url;
  },
  createQueryStrings(query) {
    if(typeof(query) === 'string') {
      query = {};
    }

    query.api_key = get(this, 'apiKey');

    var params = Object.keys(query).map(function(key) {
      return key + '=' + query[key];
    }).join('&');

    return '?' + params;
  },
  pathForType(type) {
    return Ember.String.camelize(type);
  }
});
