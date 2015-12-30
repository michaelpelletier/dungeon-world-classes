function MainController($scope, $http) {
  $scope.focus = 'class';
  $scope.submitted = false;

  $http.get('js/classes.json').success(function(data) {
   $scope.classData = data;
  });
};
