(function() {
	'use strict';

	angular
		.module('inclusive')
		.controller('MainController', MainController);

	/** @ngInject */
	function MainController($mdToast) {

		var vm = this;

		vm.model = {

			phrase: 'Tu frase o palabra no inclusiva y poco moderna aquí'

		};

		vm.makeInclusive = makeInclusive;
		vm.inclusiveCopySuccess = inclusiveCopySuccess

		initialize();

		function initialize () {

			vm.inclusivePhrase = makeLanguageInclusive(vm.model.phrase);

		}

		function makeInclusive () {

			vm.inclusivePhrase = makeLanguageInclusive(vm.model.phrase);

		}

		function inclusiveCopySuccess (e) {

			e.clearSelection();

			$mdToast
				.show(
					$mdToast.simple()
						.textContent('Ya puedes pegar tu frase y hacer el mundo inclusivo nuevamente')
						.position('top right')
						.hideDelay(5000)
				);

		}

		function makeLanguageInclusive(str) {

			return str.replace(/[aeiouáéíóúü]/gi, 'x');

		}

	}

})();
