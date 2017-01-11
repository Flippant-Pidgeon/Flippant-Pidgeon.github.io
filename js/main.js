/* global */
var currentScreen
var mousePos = {x: 0, y: 0}
var runGame = true
var fps = 50
var frameCount = 0

function beginLoop () { //eslint-disable-line
  var fpsInterval = 1000 / fps
  var then = window.performance.now()
  var startTime = then

  function loop (newtime) {
    if (runGame) window.requestAnimationFrame(loop)

    var now = newtime
    var elapsed = now - then

    if (elapsed > fpsInterval) {
      then = now - (elapsed % fpsInterval)

      currentScreen.update()
      currentScreen.draw(surface)

      // fps counter
      var sinceStart = now - startTime
      var currentFps = Math.round(1000 / (sinceStart / ++frameCount) * 100) / 100
      var elapsedTime = Math.round(sinceStart / 1000 * 100) / 100
      var displayText = elapsedTime.toFixed(2) + ' secs @ ' + currentFps.toFixed(2) + ' fps.'
      document.getElementById('fps').innerHTML = displayText
    }
  }
  loop()
}

var canvas = document.querySelector('canvas#board')
canvas.setAttribute('width', 1440)
canvas.setAttribute('height', 900)
var surface = canvas.getContext('2d')

var canvasRect = canvas.getBoundingClientRect()

canvas.addEventListener('click', function (e) {
  var x = e.pageX - canvas.offsetLeft
  var y = e.pageY - canvas.offsetTop

  if (typeof currentScreen.clickable !== 'undefined') {
    currentScreen.clickable.forEach(clickable => {
      if (clickable.posOnObject({x: x, y: y})) {
        clickable.onClick()
      }
    })
  }
}, false)

canvas.addEventListener('mousemove', function (e) {
  mousePos.x = e.clientX - canvasRect.left
  mousePos.y = e.clientY - canvasRect.top
}, false)

window.addEventListener('keydown', function (event) {
  switch (event.keyCode) {
    case 37: // Left
      currentScreen.controls('left')
      break

    case 38: // Up
      currentScreen.controls('up')
      break

    case 39: // Right
      currentScreen.controls('right')
      break

    case 40: // Down
      currentScreen.controls('down')
      break
  }
}, false)
