var app = angular.module('myApp',[]);
function mithunControllerlowe($scope,broadcastservice)
{
$scope.on("Myfirstbroadcast",function (evnt,data) {
  $scope.boardCastdata = data;
});
};
app.controller('broadCastcontroller',["$scope","BroadcastService",mithunControllerlowe]);