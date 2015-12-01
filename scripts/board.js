Board = function(container) {
  var x_max = 256;
  var y_max = 256;
  var container = container;
  var hexes = new Array();

  PIXI.loader
    .add("waterHex", "assets/water_hex.png")
    .add("grassHex", "assets/grass_hex.png")
    .add("snowHex", "assets/snow_hex.png")
    .add("sandHex", "assets/sand_hex.png")
    .add("denseGrassHex", "assets/dense_grass_hex.png")
    .load(function(loader, resources) {
      build_hexgrid(resources);
      compute_hexgrid_neighbours();
    });

  var build_hexgrid = function(resources) {
    noise.seed(Math.random());

    for(var x = 0; x < x_max; x++) {
      var line = new Array();
      for(var y = 0; y < y_max; y++) {
        var value = Math.abs(noise.simplex2(x / 100, y / 100));
        if(value < 0.08) {
          var h = new Hex(x, y, resources.waterHex.texture);
        } else if(value < 0.1) {
          var h = new Hex(x, y, resources.sandHex.texture);
        } else if(value < 0.4) {
          var h = new Hex(x, y, resources.grassHex.texture);
        } else if(value < 0.8) {
          var h = new Hex(x, y, resources.denseGrassHex.texture);
        } else {
          var h = new Hex(x, y, resources.snowHex.texture);
        }
        line.push(h);
        container.addChild(h.get_sprite());
      }
      hexes.push(line);
    }
  }

  var compute_hexgrid_neighbours = function() {
    for(var x = 0; x < x_max; x++) {
      for(var y = 0; y < y_max; y++) {
        h = hexes[x][y];
        h.set_neighbour("north", hexes[x][y-1]);
        h.set_neighbour("south", hexes[x][y+1]);
        if(x % 2 != 0) {
          if(typeof(hexes[x-1]) != "undefined" && typeof(hexes[x-1][y+1]) != "undefined") { 
            h.set_neighbour("south_west", hexes[x-1][y+1]);
          }
          if(typeof(hexes[x-1]) != "undefined" && typeof(hexes[x-1][y]) != "undefined") {
            h.set_neighbour("north_west", hexes[x-1][y]);
          }
          if(typeof(hexes[x+1]) != "undefined" && typeof(hexes[x+1][y]) != "undefined") {
            h.set_neighbour("north_east", hexes[x+1][y]); 
          }
          if(typeof(hexes[x+1]) != "undefined" && typeof(hexes[x+1][y+1]) != "undefined") {
            h.set_neighbour("south_east", hexes[x+1][y+1]);
          }
        } else {
          if(typeof(hexes[x-1]) != "undefined" && typeof(hexes[x-1][y+2]) != "undefined") { 
            h.set_neighbour("south_west", hexes[x-1][y]);
          }
          if(typeof(hexes[x-1]) != "undefined" && typeof(hexes[x-1][y-1]) != "undefined") {
            h.set_neighbour("north_west", hexes[x-1][y-1]);
          }
          if(typeof(hexes[x+1]) != "undefined" && typeof(hexes[x+1][y-1]) != "undefined") {
            h.set_neighbour("north_east", hexes[x+1][y-1]);
          }
          if(typeof(hexes[x+1]) != "undefined" && typeof(hexes[x+1][y]) != "undefined") {
            h.set_neighbour("south_east", hexes[x+1][y]); 
          }
        }
      }
    }
  }

  this.render = function(renderer) {
     renderer.render(container);
  }

  this.get_container = function() {
    return container;
  }
  
}
