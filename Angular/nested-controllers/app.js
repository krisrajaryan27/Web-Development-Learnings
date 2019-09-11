var app = angular.module("nestedControllers", []);

app.controller("Ctrl1",Ctrl1);
app.controller("Ctrl2",Ctrl2);

function Ctrl1(){
    //var this = $scope;
    this.testProp = "From Ctrl1";
}

function Ctrl2(){
    this.testProp= "From Ctrl2";
}