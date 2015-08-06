var app = angular.module("app",['dangle']);

app
    .directive('dockerImageSelector', function($http) {
            return {
                restrict: 'E',
              //  replace:true,
                templateUrl:'js/directives/docker-image-selector-comp/docker-image-selector-tmpl.html',
                link:    // return the directive link function. (compile function not needed)
                 function($scope, element, attrs) {
                        $http.get("/rest/dockerImage/list")

                           .success( function callback (data){
                                $scope.imageList = data;
                            })
                            .error(function(data, status, headers, config) {
                                         alert(status)
                             });
                 }

            }
    });




