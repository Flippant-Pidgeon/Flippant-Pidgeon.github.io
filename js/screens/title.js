/* global canvas currentScreen lobbyScreen EntityContainer */
currentScreen = (function () { //eslint-disable-line
  var hue = 0
  var direction = 1
  var clickableObjects = new EntityContainer()

  clickableObjects.createEntity('Button', {
    x: canvas.width / 2 - 47,
    y: canvas.height * 0.55,
    text: 'Start!',
    onClick: function () { nextScreen() }
  })

  function draw (ctx) {
    ctx.fillStyle = '#efefef'
    ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height)

    var y = ctx.canvas.height / 2 - 80
    var color = 'rgb(' + hue + ',0,0)'

    ctx.fillStyle = color
    ctx.font = '48px monospace'
    centerText(ctx, 'CCG', y - 30)

    ctx.fillStyle = color
    ctx.font = '24px monospace'
    centerText(ctx, 'Survival of the Fittest', y)

    ctx.fillStyle = color
    ctx.font = '15px monospace'
    centerText(ctx, '0.0.6 ', y + 20)

    clickableObjects.draw(ctx, color)
  }

  function update () {
    hue += 1 * direction
    if (hue > 255) direction = -1
    if (hue < 1) direction = 1

    clickableObjects.update()
  }

  function nextScreen () {
    currentScreen = lobbyScreen //eslint-disable-line
    currentScreen.start()
  }

  function centerText (ctx, text, y, xOffset = 0) {
    var measurement = ctx.measureText(text)
    var x = (ctx.canvas.width - measurement.width) / 2 + xOffset
    ctx.fillText(text, x, y)
  }

  return {
    draw: draw,
    update: update,
    clickable: clickableObjects.getAll()
  }
}())
