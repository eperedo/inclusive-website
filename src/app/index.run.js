(function() {
  'use strict';

  angular
    .module('inclusive')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
