export function createMe (thing, attributes, targetId) {
  var thingy = document.createElement(thing)
  attributes.forEach(function (attribute) {
    thingy.setAttribute(attribute[0], attribute[1])
  })
  document.getElementById(targetId).appendChild(thingy)
}
