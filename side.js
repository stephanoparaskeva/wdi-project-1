
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
let downRight
let upLeft
let axis
let right
let up
let down
let left



(axis[up ? positionY - 2: positionY + 1][up ? positionX : positionX] === 1) || (axis[up ? positionY - 2 : positionY + 1][up ? positionX - 1 : positionX - 1] === 1)

(axis[right ? positionY : positionY][right ? positionX + 1 : positionX - 1 ] === 1) || (axis[right ? positionY - 1 : positionY - 1][right ? positionX +1 : positionX - 1 ] === 1)


const leftRight = function(axis, downRight, upLeft) {
  moveX = setInterval(function() {
    if (axis[positionY][downRight ? positionX + 1 : positionX - 2] === 1)
    {
      clearInterval(moveX)
      clearInterval(pauseX)
    } else if (axis[upLeft ? positionY - 1 : positionY + 1][positionX] === 1) {
      clearInterval(moveY)
      clearInterval(pauseY)
      console.log(positionY , 'positionY')
    } else
      htmlY[positionY].children[positionX].style.background = 'red'
    htmlY[positionY].children[positionX-1].style.background = 'yellow'
    htmlY[positionY-1].children[positionX].style.background = 'yellow'
    htmlY[positionY-1].children[positionX-1].style.background = 'yellow'
    axis[positionY][positionX] = 2
  }, 200)
  pauseX = setInterval(function() {
    if (axis[positionY][downRight ? positionX + 1 : positionX - 2] === 1)
    {
      clearInterval(pauseX)
      clearInterval(moveX)
    }
    else if (axis[upLeft ? positionY - 1 : positionY + 1][positionX] === 1) {
      clearInterval(moveY)
      clearInterval(pauseY)
      console.log(positionY , 'positionY')
    } else
    htmlY[positionY].children[positionX].style.background = 'black'
    htmlY[positionY].children[positionX-1].style.background = 'black'
    htmlY[positionY-1].children[positionX].style.background = 'black'
    htmlY[positionY-1].children[positionX-1].style.background = 'black'
    axis[positionY][positionX] = 0
    downRight ? ++positionX : --positionX //this works
  }, 260)
}

const upDown = function(axis, downRight, upLeft) {
  moveY = setInterval(function() {
    if (axis[positionY][downRight ? positionX : positionX ] === 1)
    {
      clearInterval(moveX)
      clearInterval(pauseX)
    } else if (axis[upLeft ? positionY - 2 : positionY + 1][positionX] === 1) {
      clearInterval(moveY)
      clearInterval(pauseY)
      console.log(positionY , 'positionY')
    } else
    htmlY[positionY].children[positionX].style.background = 'red'
    htmlY[positionY].children[positionX-1].style.background = 'yellow'
    htmlY[positionY-1].children[positionX].style.background = 'yellow'
    htmlY[positionY-1].children[positionX-1].style.background = 'yellow'
    axis[positionY][positionX] = 2
  }, 200)
  pauseY = setInterval(function() {
    if (axis[positionY][downRight ? positionX + 1 : positionX ] === 1)
    {
      clearInterval(pauseX)
      clearInterval(moveX)
    } else if (axis[upLeft ? positionY - 2 : positionY + 1][positionX] === 1) {
      clearInterval(moveY)
      clearInterval(pauseY)
      console.log(positionY , 'positionY')
    } else
    htmlY[positionY].children[positionX].style.background = 'black'
    htmlY[positionY].children[positionX-1].style.background = 'black'
    htmlY[positionY-1].children[positionX].style.background = 'black'
    htmlY[positionY-1].children[positionX-1].style.background = 'black'
    axis[positionY][positionX] = 0
    downRight ? ++positionY : --positionY
  }, 260)
}



document.onkeydown = function(e) {
  e = e || window.event
  switch(e.which || e.keyCode) {
    case 37:
    clearAllInvervals()
    leftRight(axis, false, false)
    break

    case 38:
    clearAllInvervals()
    upDown(axis, false, true)
    break

    case 39:
    clearAllInvervals()
    leftRight(axis, true, true)
    break

    case 40:
    clearAllInvervals()
    upDown(axis, true, false)
    break

    default: return
  }
  e.preventDefault()
}
