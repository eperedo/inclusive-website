(function() {
	'use strict';

	angular
		.module('inclusive')
		.controller('MainController', MainController);

	/** @ngInject */
	function MainController($mdToast) {

		var vm = this;

		vm.model = {

			phrase: ''

		};

		vm.makeInclusive = makeInclusive;
		vm.inclusiveCopySuccess = inclusiveCopySuccess

		initialize();

		function initialize () {

			vm.inclusiveResult = makeLanguageInclusive(vm.model.phrase);

		}

		function makeInclusive () {

			vm.inclusiveResult = makeLanguageInclusive(vm.model.phrase);

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

			var result = {};

			if (str.length > 0) {

				var regExp = /[aeiouáéíóúü]/gi;

				result = {

					totalLetters: str.length,

					totalNoInclusive: str.match(regExp).length,

					inclusivePhrase: str.replace(regExp, 'x')

				};

				result.unfairPhrase = (result.totalNoInclusive / result.totalLetters) * 100;

			}

			return result;

		}

	}

})();
