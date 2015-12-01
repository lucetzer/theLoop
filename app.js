var app = angular.module('theLoop', []);

app.controller('MainCtrl', [
  '$scope',
  function($scope) {
    $scope.test = 'Hello world!';
  },
]);
