(function () {
  if (typeof DiceWars === "undefined") {
    window.diceWars = {};
  }

  Army = DiceWars.Army = function (options) {
    this.color = options.color;
  }
})();
