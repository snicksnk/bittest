"use strict"
angular.module('news')
    .controller('NewsOneCtrl', ['$scope', '$stateParams', 'News',
        function($scope, $stateParams, News) {
            News.getOne($stateParams.id).success(function(data) {
                $scope.newsData = data;
            });
            $scope.close = function() {
                $scope.$close(true);
            };
        }
    ]);