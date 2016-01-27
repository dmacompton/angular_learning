var app = angular.module("superhero", []);

app.directive('superman', function  () {
    return {
        restrict: "E",
        template: "<div>Here I am to save the day</div>"
    }
})

app.directive('superman1', function  () {
    return {
        restrict: "A",
        link: function() {
            alert(1)
        }
    }
})

app.directive('superman2', function  () {
    return {
        restrict: "C",
        link: function() {
            alert(2)
        }
    }
})

app.directive('superman3', function  () {
    return {
        restrict: "M",
        link: function() {
            alert(3)
        }
    }
})