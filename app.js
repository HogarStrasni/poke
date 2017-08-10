var app = angular.module('pokemon',[]);

app.controller('mainController', function ($scope,$http) {
	$scope.pokemon = [];
	$scope.activePok = {};

	$http({
		method: "get",
		url : "https://api.myjson.com/bins/pekl1.json"
	}).then(function (result) {
		$scope.pokemon = result.data;
	},function (error) {
		console.log(error);
	})

	$scope.display = function (poke) {
		$scope.activePok = poke;
	}
})

