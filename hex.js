hex = function(xp, yp) {
  var texture = PIXI.Texture.fromImage("assets/hex.png");
  var texture_green = PIXI.Texture.fromImage("assets/hex_green.png");
  var sprite = new PIXI.Sprite(texture);

  var x = xp;
  var y = yp;

  var north;
  this.south;
  this.north_left;
  this.north_right;
  this.south_left;
  this.south_right;

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

  this.set_north = function(n) {
    north = n
  }

  sprite.click = function(mouseData) {
    console.log(x + " " + y);
    sprite.texture = texture_green;
    north.set_green();
  }
}
