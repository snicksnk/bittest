"use strict"
angular.module('news')
    .controller('NewsCtrl', function HomeCtrl($scope, $state, $modal, News) {
        News.getList().success(function(data) {
            $scope.data = data;
        });
    });