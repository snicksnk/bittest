"use strict"
angular.module('news')
    .factory("News", ['$http', function($http) {

        var News = function() {

        };

        angular.extend(News.prototype, {
            list: [],
            getList: function() {
                var that = this;
                return $http.get('/news/').success(function(data) {
                    that.list = data;
                });
            },
            getOne: function(id) {
                return $http({
                    url: '/news/', 
                    method: "GET",
                    params: {id: id}
                });
            }
        });

        return new News;
    }]);