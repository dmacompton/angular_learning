angular.module("myApp", [])
    
    .factory("Averanges", function () {
        var Averanges = {};
        Averanges.cast = [];

        for (var i = 0; i < 20; i++) {
            Averanges.cast.push({
                name: faker.name.findName(),
                character: faker.name.jobType()
            });
        };

        return Averanges;
    })

    .controller("Averanges", function FirstCtrl($scope, Averanges) {
        $scope.averanges = Averanges;
    });