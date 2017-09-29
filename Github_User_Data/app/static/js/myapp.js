angular.module('myapp', [])
    .config(function($interpolateProvider) { 
        $interpolateProvider.startSymbol('{$');
        $interpolateProvider.endSymbol('$}');
    })

        .controller('GithubController', ['$scope', '$http', GithubController]);

        function GithubController($scope, $http) {
            $scope.data = [];
            $scope.user = null;
            $scope.getdata = function(user){
                var data = {
                    user: user
                };

            $http.get('https://api.github.com/users/' + user).then(function(response) {
                $scope.data = response.data
                console.log($scope.data.name)
            });  
            }
        };