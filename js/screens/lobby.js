/* global EntityContainer CardContainer*/
lobbyScreen = (function (input) { // eslint-disable-line
  var hue = 0
  var direction = 1
  var clickableObjects = new EntityContainer()
  var cards = new CardContainer()

  cards.createEntity('Base', {})

  function start () {
  }

  function controls (control = '') {
  }

  function draw (ctx) {
    ctx.fillStyle = '#efefef'
    ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height)

    var colorGreen = 'rgb(0,' + hue + ', 0)'
    ctx.font = '18px monospace'

    clickableObjects.draw(ctx, colorGreen)
    cards.draw(ctx, colorGreen)
  }

  function update () {
    hue += 1 * direction
    if (hue > 200) direction = -1
    if (hue < 1) direction = 1
    cards.update()
  }

  return {
    start: start,
    controls: controls,
    draw: draw,
    update: update
  }
}())
