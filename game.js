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

  Game.prototype.allocateTiles = function () {
    this.chooseOrigins();
    this.fillInTiles();
  };

  Game.prototype.chooseOrigins = function () {
    for (var i = 0; i < this.numArmies; i++) {
      var row = Math.floor(Math.random() * this.numRows);
      var col = Math.floor(Math.random() * this.numCols);
      while (this.gridAt(row, col).color) {
        row = Math.floor(Math.random() * this.numRows);
        col = Math.floor(Math.random() * this.numCols);
      }

      this.gridAt(row, col).color = this.armies[i].color;
    }
  };

  Game.prototype.fillInTiles = function () {

  };

  Game.prototype.generateArmies = function () {
    var armies = [];
    for (var i = 0; i < this.numArmies; i++) {
      armies.push(new DiceWars.Army({
        color: Game.COLORS[i],
        id: i
        })
      );
    }
    return armies;
  };

  Game.prototype.tileAt = function (row, col) {

  };

  Game.prototype.generateGrid = function () {
    var grid = [];
    for (var i = 0; i < this.numRows; i++) {
      var row = [];
      for (var j = 0; j < this.numCols; j++) {
        row.push(new DiceWars.Tile());
      }
      grid.push(row);
    }
    return grid;
  }
})();
