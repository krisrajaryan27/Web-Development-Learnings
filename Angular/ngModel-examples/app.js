var app = angular.module("ngModelExamples", []);
app.controller("ExamplesCtrl", ExampleCtrl);

function ExampleCtrl($scope) {
    $scope.textBoxChange = function() {
        console.log("Textbox value changed");
    }
}