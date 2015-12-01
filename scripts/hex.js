Hex = function(xp, yp, texture) {
  var sprite = new PIXI.Sprite(texture);

  var x = xp;
  var y = yp;

  var north;
  var south;
  var north_east;
  var north_west;
  var south_east;
  var south_west;

  var hex_height = texture.height;
  var hex_width = texture.width;

  sprite.anchor.x = 0;
  sprite.anchor.y = 0;
  sprite.interactive = true;

  if(x % 2 == 0) {
    sprite.position.x = (x * hex_width) - (x * (hex_width/4));
    sprite.position.y = (y * hex_height);
  } else {
    sprite.position.x = (x * hex_width) - (x * (hex_width/4));
    sprite.position.y = (y * hex_height) + (hex_height/2 );
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

  sprite.click = function(mouseData) {
    console.log(x + " " + y);

    sprite.texture = texture_green;
    if(south_west)
    south_west.set_green();

    if(north_west) {
      north_west.set_green();
    }

    if(north_east) {
      north_east.set_green();
    }

    if(south_east) {
      south_east.set_green();
    }

    if(north) {
      north.set_green();
    }

    if(south) {
      south.set_green();
    }
  }
}
