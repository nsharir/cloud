var app = angular.module("app");

app
    .directive('dockerImage', function($http) {
            return {
                restrict: 'E',
                scope:{
                    image:'=',
                    imageJson:'='

                },
              //  replace:true,
                templateUrl:'js/directives/docker-image-comp/docker-image-tmpl.html',
                link:    // return the directive link function. (compile function not needed)
                 function($scope, element, attrs) {

                        if ($scope.imageJson){
                            $scope.image = angular.fromJson($scope.imageJson);
                        }

                 }

            }
    });




