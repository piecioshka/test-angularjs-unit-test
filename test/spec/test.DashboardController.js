'use strict';

describe('Dashboard Controller', function () {
    beforeEach(module('test-app'));

    var $controller;

    beforeEach(inject(function (_$controller_) {
        $controller = _$controller_;
    }));

    describe('methods', function () {
        var $scope;

        beforeEach(function () {
            $scope = {};
            $controller('DashboardController', { $scope: $scope });
        });

        it('should be true', function () {
            expect($scope.author).toEqual('piecioshka');
            expect(typeof $scope.append).toBe('function');
        });

        it('should appending items', function () {
            expect($scope.list.length).toEqual(0);
            $scope.append('item-123');
            expect($scope.list.length).toEqual(1);
        });

        it('try randomize number', function () {
            expect(typeof $scope.random).toBe('function');
            expect($scope.random()).toBeString();
        });
    });
});
