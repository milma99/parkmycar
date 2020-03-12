var url = "http://smart.sum.ba/parking?withParkingSpaces=1";
        
        var app = angular.module("SmartSum", []);
        app.controller('Parking', ["$scope", "$http", "socket", function($scope, $http, socket) {
            $http.get(url)
            .then(function(data) {
                $scope.normal_available = data[0].normal_available;
            });
            socket.on("parking-lot-state-change", function(data){
                
                console.log(data)
            })
        }]);
        app.factory('socket', ["$rootScope", function ($rootScope){
            var socket = io('http://smart.sum.ba/parking-events');
            return {
                on: function(evtName, callback){
                    socket.on(evtName, function () {
                        var args = arguments;
                        $rootScope.$apply(function(){
                            callback.apply(socket, args);
                        })
                    });
                }
            }
        }]);
  