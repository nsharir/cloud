var app = angular.module("app",['dangle']);

app
    .directive('demoDirective', function($http) {
            return {
                restrict: 'E',
              //  replace:true,
                templateUrl:'js/directives/demo-comp/demo-tmpl.html',
                link:    // return the directive link function. (compile function not needed)
                 function($scope, element, attrs) {

                   $http.get("/rest/demo/test")

                           .success( function callback (data){

                                    $scope.designTemplateName = data.templateName;

                            })
                            .error(function(data, status, headers, config) {
                                         alert(status)
                             });
                 }
            }
    });




