"use strict"
angular.module('content')
	.controller('AppCtrl', function ($scope, $state) {
        $state.go('dashboard.about')
	});