Game = function() {
  var stage = new PIXI.Container();
  var renderer = PIXI.autoDetectRenderer(1280, 1024);
  var board = new Board(stage);

  renderer.backgroundColor = 0xFFFFFF;
  document.body.appendChild(renderer.view);
  requestAnimationFrame(animate);

  function animate() {
    requestAnimationFrame(animate);
    board.render(renderer);
  };
}
