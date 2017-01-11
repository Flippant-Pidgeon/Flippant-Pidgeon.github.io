/* global getCirclePoints canvas mousePos pointDist EntityContainer */
lobbyScreen = (function (input) { // eslint-disable-line
  var hue = 0
  var direction = 1
  var clickableObjects = new EntityContainer()

  var but1 = clickableObjects.createEntity('Button', {})
  var but2 = clickableObjects.createEntity('Button', {})

  function start () {
    window.addEventListener('keydown', function (event) {
      switch (event.keyCode) {
        case 37: // Left
          move('left')
          break

        case 38: // Up
          move('up')
          break

        case 39: // Right
          move('right')
          break

        case 40: // Down
          move('down')
          break
      }
    }, false)
  }

  function draw (ctx) {
    ctx.fillStyle = '#efefef'
    ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height)

    var colorGreen = 'rgb(0,' + hue + ', 0)'
    ctx.font = '18px monospace'

    var center = {x: canvas.width / 2, y: canvas.height / 2}
    var dir = Math.atan2(mousePos.y - center.y, mousePos.x - center.x)
    var dist = pointDist(mousePos, center)
    var points = getCirclePoints(center, dist, 2, -dir / 2)
    Object.keys(points).forEach(i => {
      clickableObjects[i].x = i.x
      clickableObjects[i].y = i.y
    })
    clickableObjects.draw(ctx, colorGreen)
  }

  function update () {
    hue += 1 * direction
    if (hue > 200) direction = -1
    if (hue < 1) direction = 1
  }

  function move (dir) {
    console.log(dir)
  }

  return {
    start: start,
    draw: draw,
    update: update
  }
}())
