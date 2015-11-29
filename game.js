game = function() {
  var stage = new PIXI.Container();
  var renderer = PIXI.autoDetectRenderer(1280, 1024);

  renderer.backgroundColor = 0xFFFFFF;

  document.body.appendChild(renderer.view);
  requestAnimationFrame(animate);

  board = new board(stage);

  function animate() {
    requestAnimationFrame(animate);
    board.render(renderer);
  };
}
