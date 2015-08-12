(function (root) {
    'use strict';

    angular
        .module('test-app.controllers', [])
        .controller('DashboardController', DashboardController);

    function DashboardController($scope) {
        $scope.author = 'piecioshka';
        $scope.list = [];

        $scope.append = function (item) {
            $scope.list.push(item);
        };

        $scope.random = function () {
            return String(Math.random()).substr(2);
        }
    }

}(this));
