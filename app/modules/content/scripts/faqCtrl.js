"use strict"
angular.module('content')
.controller('FaqCtrl', function ($scope, $state) {
        $scope.faq = [{
            header: "Collapsible Group Item #1",
            content: "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.",
            isOpen: true
        }, {
            header: "Collapsible Group Item #2",
            content: "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry",
            isOpen: false
        }, {
            header: "Collapsible Group Item #3",
            content: " Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry",
            isOpen: false
        }];
    });