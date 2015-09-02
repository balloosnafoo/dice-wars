(function () {
  if (typeof DiceWars === "undefined") {
    window.DiceWars = {};
  }

  Tile = DiceWars.Tile = function (options) {
    this.color = options.color;
    this.resource = options.resources;
  };

  Tile.prototype.update = function (options) {
    
  }
})();
