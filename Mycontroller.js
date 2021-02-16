var app = angular.module('myApp',[]);
    function mithunController($scope,broadcastService)
{
    $scope.Message = "Welocme to Megron Tech Pvt ltd"
    $scope.templateUrl = "";
    $scope.LoadTemplate  = function(url) {
        $scope.templateUrl = url;
    };
    $scope.MyClick = function(data){
        $scope.Mithun = data;
    };
    $scope.tabledata = {
        name:"MithunKumar",
        adress:"Chikkamagalore",
        pincode:34444,
        talak:"Kadur",
    }
    var Mydata = $scope.tabledata;
    broadcastService.broadcast("Myfirstbroadcast",Mydata)
}
app.controller('myController',["$scope","BroadcastService",mithunController]);