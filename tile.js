(function () {
  if (typeof DiceWars === "undefined") {
    window.DiceWars = {};
  }

  Tile = DiceWars.Tile = function (options) {
    this.color = options.color;
    this.resource = options.resources;
  };

  Tile.prototype.update = function (options) {
    var keys = Object.keys(options);
    for (var i = 0; i < keys.length; i++) {
      this[keys[i]] = options[keys[i]];
    }
  }
})();
