(function() {
  /* globals define, accounting */

  var shims = {
    'accounting': {
      'default': accounting
    }
  };

  function generateModule(name, values) {
    define(name, [], function() {
      'use strict';

      return values;
    });
  }

  for (var moduleName in shims) {
    generateModule(moduleName, shims[moduleName]);
  }
})();
