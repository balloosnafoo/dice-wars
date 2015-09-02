(function () {
  if (typeof DiceWars === "undefined") {
    window.DiceWars = {};
  }

  Tile = DiceWars.Tile = function (options) {
    this.color = options.color;
  };
})();
