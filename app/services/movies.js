import Ember from 'ember';
import config from '../config/environment';

export default Ember.Service.extend({
  apiKey: config.TMDB.api_key,
  apiHost: config.TMDB.api_host,
  getMovies(query) {
    return new Ember.RSVP.Promise((resolve, reject) => {
      Ember.$.ajax({
        url: this.buildURL('discover/movie', query)
      }).success(result => {
        resolve(result.results);
      }).error(error => {
        reject(error);
      });
    });
  },
  getConfiguration() {
    return new Ember.RSVP.Promise((resolve, reject) => {
      this._configurationRequest().then(config => {
        this.setProperties(config);
        resolve();
      }).catch(err => {
        reject(err);
      });
    });
  },
  _configurationRequest() {
    return new Ember.RSVP.Promise((resolve, reject) => {
      Ember.$.ajax({
        url: this.buildURL('configuration')
      }).success(data => {
        resolve(data);
      }).error(err => {
        reject(err);
      });
    });
  },
  buildURL(url, options) {
    return this.get('apiHost') + url + this.buildQueryParams(options);
  },
  buildQueryParams(options) {
    options = options || {};

    let params = [];

    params.push('api_key=' + this.get('apiKey'));

    Object.keys(options).forEach(option => {
      params.push(option + '=' + options[option]);
    });

    return '?' + params.join('&');
  }
});
