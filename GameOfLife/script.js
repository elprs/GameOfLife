var app = angular.module('gameOfLifeApp', []);
app.controller('gameOfLifeCtrl', function ($scope, $interval) {

    //grid size
    var rowMax = 25;
    var colMax = 30;

    // create grid
    $scope.rows = [];
    for (var i = 0; i < rowMax; i++) {
        var col = [];
        for (var j = 0; j < colMax; j++) {
            var elem = { 'active': 0 };
            col.push(elem);
        }
        $scope.rows.push({ 'cols': col });
    }


    //generate seeds
    var randomSeeds = function () {
        for (var i = 0; i < (rowMax * colMax / 2); i++) {
            var row = Math.floor(Math.random() * (rowMax - 1));
            var col = Math.floor(Math.random() * (colMax - 1));
            $scope.activate(row, col);
        }
    }

    // count live neighbors
    var checkNeighbours = function (row, col) {
        var count = 0;
        for (var i = row - 1; i <= row + 1; i++) {
            for (var j = col - 1; j <= col + 1; j++) {
                if ((i != row || j != col) && ($scope.rows[i]) && ($scope.rows[i].cols[j])) {
                    if ($scope.rows[i].cols[j].active >= 1) {
                        count++;
                    }
                }
            }
        }
        return count;
    }


    })