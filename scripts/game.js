Game = function() {
  var stage = new PIXI.Container();
  var renderer = PIXI.autoDetectRenderer(1680, 1280);
  var board = new Board(stage);
  var left = keyboard(65), up = keyboard(87), right = keyboard(68), down = keyboard(83), out_key = keyboard(40), in_key = keyboard(38);

  renderer.backgroundColor = 0xFFFFFF;
  document.body.appendChild(renderer.view);
  requestAnimationFrame(animate);

  down.press = function() {
    board.get_container().position.y -= 10;
  }

  up.press = function() {
    board.get_container().position.y += 10;
  }

  right.press = function() {
    board.get_container().position.x -= 10;
  }

  left.press = function() {
    board.get_container().position.x += 10;
  }

  out_key.press = function() {
    board.get_container().scale.x -= 0.1
    board.get_container().scale.y -= 0.1
  }

  in_key.press = function() {
    board.get_container().scale.x += 0.1
    board.get_container().scale.y += 0.1
  }

  function animate() {
    requestAnimationFrame(animate);
    board.render(renderer);
  };
}
