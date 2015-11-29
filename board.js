board = function(container) {
  var container = container;
  var hexes = new Array();

  var build_hexgrid = function() {
    for(var x = 0; x < 12; x++) {
      var line = new Array();
      for(var y = 0; y < 12; y++) {
        h = new hex(x, y);
        line.push(h);
        container.addChild(h.get_sprite());
      }
      hexes.push(line);
    }
  }

  var compute_hexgrid_neighbours = function() {
    for(var x = 0; x < 12; x++) {
      for(var y = 0; y < 12; y++) {
        hexes[x][y].set_north(hexes[x][y-1]);
      }
    }
  }

  build_hexgrid();
  compute_hexgrid_neighbours();

  this.render = function(renderer) {
     renderer.render(container);
  }
}
