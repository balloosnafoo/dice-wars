(function () {
  if (typeof DiceWars === "undefined") {
    window.diceWars = {};
  }

  Game = DiceWars.Game = function (options) {
    this.numArmies = options.numArmies || 4;
    this.armies = this.generateArmies();

    this.numRows = options.numRows;
    this.numCols = options.numCols;
    this.grid = this.generateGrid();
    this.allocateTiles();
  };

  Game.COLORS = [
    "red", "green", "blue", "black"
  ];

  Game.RESOURCES = [
    "oil", "wheat", "iron", "coal"
  ];

  Game.prototype.allocateTiles = function () {
    for (var i = 0; i < this.grid.length; i++) {
      for (var j = 0; j < this.grid[i].length; j++) {
        this.tileAt(i, j).update({
          color: Game.COLORS[Math.floor(Math.random() * this.numArmies)],
          resource:
            Game.RESOURCES[Math.floor(Math.random() * Game.RESOURCES.length)]
        });
      }
    }
  };

  Game.prototype.generateArmies = function () {
    var armies = [];
    for (var i = 0; i < this.numArmies; i++) {
      armies.push(
        new DiceWars.Army({
          color: Game.COLORS[i],
          id: i
        })
      );
    }
    return armies;
  };

  Game.prototype.tileAt = function (row, col) {
    return this.grid[row][col];
  };

  Game.prototype.setGridAt = function (row, col, val) {
    this.grid[row][col] = val;
  };

  Game.prototype.generateGrid = function () {
    var grid = [];
    for (var i = 0; i < this.numRows; i++) {
      var row = [];
      for (var j = 0; j < this.numCols; j++) {
        row.push(new DiceWars.Tile({}));
      }
      grid.push(row);
    }
    return grid;
  }
})();
