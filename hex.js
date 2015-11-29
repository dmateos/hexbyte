Hex = function(xp, yp) {
  var texture = PIXI.Texture.fromImage("assets/hex.png");
  var texture_green = PIXI.Texture.fromImage("assets/hex_green.png");
  var sprite = new PIXI.Sprite(texture);

  var x = xp;
  var y = yp;

  var north;
  var south;
  var north_east;
  var north_west;
  var south_east;
  var south_west;

  sprite.anchor.x = 0;
  sprite.anchor.y = 0;
  sprite.interactive = true;

  if(x % 2 == 0) {
    sprite.position.x = (x * 128) - (x * 35);
    sprite.position.y = (y * 107);
  } else {
    sprite.position.x = (x * 128) - (x * 35);
    sprite.position.y = (y * 107) + 50;
  }

  this.get_sprite = function() {
    return sprite;
  }

  this.set_green = function() {
    sprite.texture = texture_green;
  }

  this.set_normal = function() {
    sprite.texture = texture;
  }

  this.set_neighbour = function(neighbour_direction, neighbour) {
    switch (neighbour_direction) {
      case "north":
        north = neighbour;
        break;
      case "north_east":
        north_east = neighbour;
        break;
      case "north_west":
        north_west = neighbour;
        break;
      case "south":
        south = neighbour;
        break;
      case "south_east":
        south_east = neighbour;
        break;
      case "south_west":
        south_west = neighbour;
        break;
    }
  }

  sprite.mouseover = function(mouseData) {
    console.log(x + " " + y);

    sprite.texture = texture_green;
    //south.set_green();
    //south_west.set_green();
  }
}
