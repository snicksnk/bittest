"use strict"
angular.module('content')
	.config(function estateConfig($stateProvider, $urlRouterProvider, $locationProvider) {
	        $stateProvider
	            .state('dashboard', {
	                url: '/dashboard',
	                views: {
	                    "master": {
	                        templateUrl: 'app/modules/content/views/_dashboard.html'
	                    },
	                    "navbar@dashboard": {
	                        templateUrl: 'app/modules/content/views/_navbar.html'
	                    }
	                }
	            })
	            .state('dashboard.about', {
	                url: '/about',
	                views: {
	                    "content@dashboard": {
	                        templateUrl: 'app/modules/content/views/_contentAbout.html'
	                    }
	                }
	            })
	            .state('dashboard.faq', {
	                url: '/faq',
	                views: {
	                    "content@dashboard": {
	                        controller: 'FaqCtrl',
	                        templateUrl: 'app/modules/content/views/_contentFaq.html'
	                    }
	                }
	            })
	    });