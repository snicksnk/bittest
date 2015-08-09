function getNewsData() {

    return [
        {
            id: 1,
            title: 'title',
            content: 'content <h2>Hello</h2>'
        },
        {
            id: 2,
            title: 'title',
            content: 'content'
        },
        {
            id: 3,
            title: 'title',
            content: 'content'
        }
    ];
}

var app = angular.module('sample', [
    'ui.router',
    'ngAnimate',
    'ngSanitize'
])
    .config(function estateConfig($stateProvider, $urlRouterProvider, $locationProvider) {
        $stateProvider
            .state('dashboard', {
                url: '/dashboard',
                views: {
                    "master": {
                        templateUrl: '_dashboard.html'
                    },
                    "navbar@dashboard": {
                        templateUrl: '_navbar.html'
                    }
                }
            })
            .state('dashboard.about', {
                url: '/about',
                views: {
                    "content@dashboard": {
                        templateUrl: '_contentAbout.html'
                    }
                }
            })
            .state('dashboard.faq', {
                url: '/faq',
                views: {
                    "content@dashboard": {
                        templateUrl: '_contentFaq.html'
                    }
                }
            })
            .state('dashboard.news', {
                url: '/news',
                views: {
                    "content@dashboard": {
                        controller: 'NewsCtrl',
                        templateUrl: '_news.html'
                    },
                    "navbar@dashboard": {
                        templateUrl: '_navbar.html'
                    }
                }
            })
    })
    .controller('AppCtrl', function HomeCtrl($scope, $state) {
        $state.go('dashboard.about')
    })
    .controller('NewsCtrl', function HomeCtrl($scope, $state) {
        $scope.data = getNewsData();
        $scope.open = function(id) {
            $("#news_detail").html("News by id: " + id);
        }
    });
