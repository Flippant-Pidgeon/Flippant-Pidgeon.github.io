/* global*/
lobbyScreen = (function (input) { // eslint-disable-line
  var hue = 0
  var direction = 1

  function controls (control) {}

  function draw (ctx) {
    ctx.fillStyle = '#efefef'
    ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height)

    // var colorGreen = 'rgb(0,' + hue + ', 0)'
    ctx.font = '18px monospace'
  }

  function update () {
    hue += 1 * direction
    if (hue > 200) direction = -1
    if (hue < 1) direction = 1
  }

  return {
    controls: controls,
    draw: draw,
    update: update
  }
}())
