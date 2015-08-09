"use strict"
angular.module('sample', ['news', 'content']);  
    .constant("DataUrls", {
        news: {
            list: function() {
                return {
                    url: '/news/',
                    method: 'get'
                }
            },
            one: function(id) {
                return {
                    url: '/news/',
                    method: 'get',
                    params: {
                        id: id
                    }
                }
            }
        }
    });