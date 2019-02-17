
const htmlY = document.querySelectorAll('.Y')

let positionX = 2
let positionY = 2
let moveX
let pauseX
let moveY
let pauseY


const clearAllInvervals = () => {
  clearInterval(moveX)
  clearInterval(pauseX)
  clearInterval(moveY)
  clearInterval(pauseY)
}

const clearXintervals = () => {
  clearInterval(moveX)
  clearInterval(pauseX)
}
const clearYintervals = () => {
  clearInterval(moveY)
  clearInterval(pauseY)
}

const setBackground = (color) => {
  htmlY[positionY].children[positionX].style.background = color
  htmlY[positionY].children[positionX-1].style.background = color
  htmlY[positionY-1].children[positionX].style.background = color
  htmlY[positionY-1].children[positionX-1].style.background = color
}

let downRight
let upLeft
let axis
let right
let up
let down
let left
let pause
let move



(axis[up ? positionY - 2: positionY + 1][up ? positionX : positionX] === 1) || //////only want to activate if up or down move
(axis[up ? positionY - 2 : positionY + 1][up ? positionX - 1 : positionX - 1] === 1)

(axis[right ? positionY : positionY][right ? positionX + 1 : positionX - 1 ] === 1) || /// only want to activate if left or right
(axis[right ? positionY - 1 : positionY - 1][right ? positionX + 1 : positionX - 1 ] === 1)

const setBackground = (color) => {
  htmlY[positionY].children[positionX].style.background = color
  htmlY[positionY].children[positionX-1].style.background = color
  htmlY[positionY-1].children[positionX].style.background = color
  htmlY[positionY-1].children[positionX-1].style.background = color
}


const movePath = function(axis, upDown, leftRight, up, right) {
  move = setInterval(function() {
    if (upDown) {
      if ((axis[up ? positionY - 2: positionY + 1][up ? positionX : positionX] === 1) ||
      (axis[up ? positionY - 2 : positionY + 1][up ? positionX - 1 : positionX - 1] === 1)) {
        clearAllInvervals()
      }
    } else if (leftRight) {
      if ((axis[right ? positionY : positionY][right ? positionX + 1 : positionX - 1 ] === 1) ||
        (axis[right ? positionY - 1 : positionY - 1][right ? positionX + 1 : positionX - 1 ] === 1)) {
        clearAllInvervals()
      }
    } else
      setBackground('yellow')
    axis[positionY][positionX] = 2
  }, 200)
  pause = setInterval(function() {
    if (upDown) {
      if ((axis[up ? positionY - 2: positionY + 1][up ? positionX : positionX] === 1) ||
      (axis[up ? positionY - 2 : positionY + 1][up ? positionX - 1 : positionX - 1] === 1)) {
        clearYintervals()
      }
    } else if (leftRight) {
      if ((axis[right ? positionY : positionY][right ? positionX + 1 : positionX - 1 ] === 1) ||
        (axis[right ? positionY - 1 : positionY - 1][right ? positionX + 1 : positionX - 1 ] === 1)) {
        clearXintervals()
      }
    } else
      setBackground('black')
    axis[positionY][positionX] = 0
    if (leftRight)  {
      right ? ++positionX : --positionX
    } else if (upDown) {
      up ? --positionY : ++positionY
    }
  }, 260)
}

document.onkeydown = function(e) {
  e = e || window.event
  switch(e.which || e.keyCode) {
    case 37:
    clearAllInvervals()
    movePath(axis, false, true, false, false)
    break

    case 38:
    clearAllInvervals()
    movePath(axis, true, false, true, false)
    break

    case 39:
    clearAllInvervals()
    movePath(axis, false, true, false, true)
    break

    case 40:
    clearAllInvervals()
    movePath(axis, true, false, false, false)
    break

    default: return
  }
  e.preventDefault()
}
