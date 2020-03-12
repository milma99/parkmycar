var url = "http://smart.sum.ba/parking?withParkingSpaces=1";
        
        var app = angular.module("SmartSum", []);
        app.controller('Parking', ["$scope", "$http", "socket", function($scope, $http, socket) {
            $http.get(url)
            .then(function(response) {
                $scope.parkingSpaces = response.data[0].parkingSpaces;
            });
            socket.on("parking-lot-state-change", function(data){
                $scope.parkingSpaces.find(x => x.id === data.id_parking_space).occupied = data.occupied;
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
  
        
    

        