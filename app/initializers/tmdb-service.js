export function initialize(container, application) {
  application.inject('route', 'tmdbService', 'service:tmdb');
  application.inject('controller', 'tmdbService', 'service:tmdb');
  application.inject('component:cover-image', 'tmdbService', 'service:tmdb');
  application.inject('component:backdrop-image', 'tmdbService', 'service:tmdb');
}

export default {
  name: 'tmdb-service',
  initialize: initialize
};
