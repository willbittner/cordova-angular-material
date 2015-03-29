var app = angular.module("myApp", ['ngMaterial', "ngMdIcons"]);

app.controller("mainCtrl", function($scope, $mdSidenav){
    $scope.myImages = [
        {name: "Calm", suffix: 1},
        {name: "Desert Days", suffix: 2},
        {name: "Geometry", suffix: 3},
        {name: "More Geometry", suffix: 4},
        {name: "Colors", suffix: 5},
        {name: "More Colors", suffix: 6},
        {name: "Space", suffix: 7},
        {name: "Carpet", suffix: 8},
        {name: "Focus", suffix: 9}
    ]

    $scope.toggleLeft = function() {
        $mdSidenav('left').toggle()
            .then(function(){
                $log.debug("toggle left is done");
            });
      };

      $scope.openLeft = function() {
          $mdSidenav('left').open()
              .then(function(){
                  $log.debug("toggle left is done");
              });
      };

      $scope.closeLeft = function() {
          $mdSidenav('left').close()
              .then(function(){
                  $log.debug("toggle left is done");
              });
      };
});

app.controller("sideNavController", function($scope, $mdDialog){
    $scope.menu = [
        {
            "name" : "Personal",
            "icon" : "dashboard"
        },
        {
            "name" : "School",
            "icon" : "group"
        },
        {
            "name" : "Work",
            "icom" : "message"
        },
    ];
});
