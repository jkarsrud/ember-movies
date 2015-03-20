export function initialize(container) {
  const storeInstance = container.lookup('store:main');

  storeInstance.reopen({
    findWithQuery(type, id, query) {
      const store = this;
      const adapter = store.adapterFor(type);
      const serializer = store.serializerFor(type);
      const typeClass = store.modelFor(type);

      const url = adapter.buildURLWithQueryParams(type, query, id);
      const ajaxPromise = adapter.ajax(url, 'GET');

      return ajaxPromise.then(rawPayload => {
        var extractedPayload = serializer.extract(store, typeClass, rawPayload, id, 'find');
        return store.push(typeClass, extractedPayload);
      });
    }
  });
}

export default {
  name: 'ember-data-extensions',
  after: ['ember-data'],
  initialize: initialize
};
