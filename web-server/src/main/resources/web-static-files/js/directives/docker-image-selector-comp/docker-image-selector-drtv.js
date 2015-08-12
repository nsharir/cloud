var app = angular.module("app");

app
    .directive('dockerImageSelector', function($http) {
            return {
                restrict: 'E',
                scope:{},
              //  replace:true,
                templateUrl:'js/directives/docker-image-selector-comp/docker-image-selector-tmpl.html',
                link:    // return the directive link function. (compile function not needed)
                 function($scope, element, attrs) {

                        //$scope.selectedIndex =-1;
                        $scope.imageList =[];

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




