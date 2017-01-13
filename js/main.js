/* global */
var currentScreen
var mousePos = {x: 0, y: 0}

var canvas = document.querySelector('canvas#board')
canvas.setAttribute('width', 1440)
canvas.setAttribute('height', 900)
canvas.boundingRect = canvas.getBoundingClientRect()
canvas.surface = canvas.getContext('2d')

function beginLoop () { //eslint-disable-line
  const fpsGoal = 60
  var then = window.performance.now()
  var fps2
  var lastCalledTime = Date.now()

  function loop (newtime) {
    window.requestAnimationFrame(loop)

    var now = newtime
    var elapsed = now - then

    if (elapsed > 1000 / fpsGoal) {
      then = now - (elapsed % 1000 / fpsGoal)

      currentScreen.update()
      currentScreen.draw(canvas.surface)

      fps2 = 1 / ((Date.now() - lastCalledTime) / 1000)
      lastCalledTime = Date.now()

      document.getElementById('fps').innerHTML = fps2.toFixed(0)
    }
  }
  loop()
}

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
  mousePos.x = e.clientX - canvas.boundingRect.left
  mousePos.y = e.clientY - canvas.boundingRect.top
}, false)

window.addEventListener('keydown', function (event) {
  switch (event.keyCode) {
    case 37: currentScreen.controls('left')
      break
    case 38: currentScreen.controls('up')
      break
    case 39: currentScreen.controls('right')
      break
    case 40: currentScreen.controls('down')
      break
  }
}, false)
