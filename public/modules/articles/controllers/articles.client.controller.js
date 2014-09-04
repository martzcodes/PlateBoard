'use strict';

angular.module('articles').controller('ArticlesController', ['$scope', '$stateParams', '$location', 'Authentication', 'Articles',
	function($scope, $stateParams, $location, Authentication, Articles) {
		$scope.authentication = Authentication;

		$scope.createview = function() {
			$scope.user = Authentication.user;

			// If user is not signed in then redirect back home
			if (!$scope.user) $location.path('/signin');
		};

		$scope.create = function() {
			var article = new Articles({
				platenumber: this.platenumber,
				platenumbercheck: this.platenumbercheck,
				plateorigin: this.plateorigin,
				plateorigincheck: this.plateorigincheck,
				vehicletype: this.vehicletype,
				vehicletypecheck: this.vehicletypecheck,
				vehiclemake: this.vehiclemake,
				vehiclemakecheck: this.vehiclemakecheck,
				driversex: this.driversex,
				formwhen: this.formwhen,
				formwhere: this.formwhere,
				message: this.message,
				formanonymous: this.formanonymous
			});
			article.$save(function(response) {
				$location.path('articles/' + response._id);

				$scope.platenumber = '';
				$scope.platenumbercheck = '';
				$scope.plateorigin = '';
				$scope.plateorigincheck = '';
				$scope.vehicletype = '';
				$scope.vehicletypecheck = '';
				$scope.vehiclemake = '';
				$scope.vehiclemakecheck = '';
				$scope.driversex = '';
				$scope.formwhen = '';
				$scope.formwhere = '';
				$scope.message = '';
				$scope.formanonymous = '';
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		$scope.remove = function(article) {
			if (article) {
				article.$remove();

				for (var i in $scope.articles) {
					if ($scope.articles[i] === article) {
						$scope.articles.splice(i, 1);
					}
				}
			} else {
				$scope.article.$remove(function() {
					$location.path('articles');
				});
			}
		};

		$scope.update = function() {
			var article = $scope.article;

			article.$update(function() {
				$location.path('articles/' + article._id);
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		$scope.find = function() {
			$scope.articles = Articles.query();
		};

		$scope.findOne = function() {
			$scope.article = Articles.get({
				articleId: $stateParams.articleId
			});
		};
	}
]);