Board = function(container) {
  var container = container;
  var hexes = new Array();

  var build_hexgrid = function() {
    for(var x = 0; x < 12; x++) {
      var line = new Array();
      for(var y = 0; y < 12; y++) {
        h = new Hex(x, y);
        line.push(h);
        container.addChild(h.get_sprite());
      }
      hexes.push(line);
    }
  }

  var compute_hexgrid_neighbours = function() {
    for(var x = 0; x < 12; x++) {
      for(var y = 0; y < 12; y++) {
        h = hexes[x][y];
        h.set_neighbour("north", hexes[x][y-1]);
        h.set_neighbour("south", hexes[x][y+1]);
        if(typeof(hexes[x-1]) != "undefined" && typeof(hexes[x-1][y+1] != "undefined")) { 
          h.set_neighbour("south_west", hexes[x-1][y+1]);
        }
      }
    }
  }

  build_hexgrid();
  compute_hexgrid_neighbours();

  this.render = function(renderer) {
     renderer.render(container);
  }
}
