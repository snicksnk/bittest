"use strict"
angular.module('news')
   .config(function estateConfig($stateProvider, $urlRouterProvider, $locationProvider) {
        $stateProvider
            .state('dashboard.news', {
                url: '/news',
                views: {
                    "content@dashboard": {
                        controller: 'NewsCtrl',
                        templateUrl: 'app/modules/news/views/_news.html'
                    },
                    "navbar@dashboard": {
                        templateUrl: 'app/modules/content/views/_navbar.html'
                    }
                }
            })
            .state('dashboard.news.showOne', {
                url: "/:id",
                onEnter: ['$stateParams', '$state', '$modal', function($stateParams, $state, $modal) {
                    $modal.open({
                        templateUrl: "app/modules/news/views/_news_one.html",
                        controller: "NewsOneCtrl"
                    }).result.finally(function() {
                        $state.go('^');
                    });
                }]
            })
    });