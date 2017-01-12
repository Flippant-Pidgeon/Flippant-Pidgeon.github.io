/* global */
function CardContainer () { //eslint-disable-line
  var cards = []

  function draw (ctx, color) {
    cards.forEach(card => {
      if (card.drawMe) card.draw(ctx, color)
    })
  }

  function update () {
    cards.forEach(card => {
      card.update()
    })
  }

  function createEntity (cardType, params) {
    const cardsBase = {
      Base: function (input) {
        this.roomColor = (typeof input.color === 'undefined')

        this.x = (typeof input.x === 'undefined') ? 0 : input.x
        this.y = (typeof input.y === 'undefined') ? 0 : input.y
        this.width = (typeof input.width === 'undefined') ? 200 : input.width
        this.height = (typeof input.height === 'undefined') ? 240 : input.height
        this.weight = (typeof input.weight === 'undefined') ? 2 : input.weight
        this.textx = (typeof input.textx === 'undefined') ? 8 : input.textx
        this.texty = (typeof input.texty === 'undefined') ? 26 : input.texty
        this.text = (typeof input.text === 'undefined') ? 'Button' : input.text
        this.font = (typeof input.font === 'undefined') ? '25px monospace' : input.font
        this.color = (typeof input.color === 'undefined') ? 'rgb(0,0,0)' : input.color
        this.drawMe = (typeof input.drawMe === 'undefined') ? true : input.drawMe
        this.hover = 0

        this.onClick = (typeof input.onClick === 'undefined') ? function () {} : input.onClick

        this.draw = function (ctx, roomColor) {
          if (this.roomColor) {
            ctx.strokeStyle = roomColor
          } else {
            ctx.strokeStyle = this.color
          }
          ctx.lineWidth = this.weight + this.hover
          ctx.strokeRect(this.x + 1, this.y + 1, this.width, this.height)
          if (this.roomColor) {
            ctx.fillStyle = roomColor
          } else {
            ctx.fillStyle = this.color
          }
          ctx.font = this.font
          ctx.fillText(this.text, this.x + this.textx, this.y + this.texty)
        }

        this.update = function () {
          if (this.posOnObject(mousePos)) {
            this.hover = 1
          } else {
            this.hover = 0
          }
        }

        this.posOnObject = function (pos) {
          if (pos.y > this.y && pos.y < this.y + this.height &&
             pos.x > this.x && pos.x < this.x + this.width) {
            return true
          }
          return false
        }
      }
    }

    cards.push(newEntity)
    return newEntity
  }

  function destroyEntity (card) {
    cards.splice(cards.indexOf(card))
  }

  function getAll () {
    return cards
  }

  return {
    draw: draw,
    update: update,
    createEntity: createEntity,
    destroyEntity: destroyEntity,
    getAll: getAll
  }
}
