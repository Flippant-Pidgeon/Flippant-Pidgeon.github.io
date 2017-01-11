/* global */
function getCirclePoints(point, radius, steps, rotation = 0) { // eslint-disable-line
  var values = {}
  for (var i = 0; i < steps; i++) {
    values[String(i)] = {
      x: (point.x + radius * Math.cos(2 * Math.PI * i / steps + rotation)),
      y: (point.y + radius * Math.sin(2 * Math.PI * i / steps + rotation))
    }
  }
  return values
}

function getCirclePoints2(point, radius, steps, rotation = 0) { // eslint-disable-line
  var values = {}
  for (var i = 0; i < steps; i++) {
    values[String(i)] = {
      x: (point.x + radius * Math.cos(2 * Math.PI * i / steps + rotation)),
      y: (point.y + radius * Math.sin(2 * Math.PI * i / steps + rotation))
    }
  }
  return values
}

function pointDist(point1, point2) { // eslint-disable-line
  var xPow = Math.pow(point1.x - point2.x, 2)
  var yPow = Math.pow(point1.y - point2.y, 2)
  return Math.sqrt(xPow + yPow)
}

function getPointPos(point) {

}
