window.addEventListener('DOMContentLoaded', () => {

  // htmlY[positionY].children[positionX].innerHTML = 'hello'

  const axis = [
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
  ]

  const htmlY = document.querySelectorAll('.Y')

  let positionX = 1
  let positionY = 1
  let moveX
  let pauseX
  let moveY
  let pauseY

  const leftRight = function(axis, downRight) {
    moveX = setInterval(function() {
      if (axis[positionY][downRight ? positionX + 1 : positionX - 1] !== 0) {
        clearInterval(moveX)
        clearInterval(pauseX)
      }
      htmlY[positionY].children[positionX].style.background = 'red'
      htmlY[positionY].children[positionX-1].style.background = 'red'
      htmlY[positionY-1].children[positionX].style.background = 'red'
      htmlY[positionY-1].children[positionX-1].style.background = 'red'
      axis[positionY][positionX] = 2
    }, 200)
    pauseX = setInterval(function() {
      if (axis[positionY][downRight ? positionX +1 : positionX -1] !== 0) {
        clearInterval(pauseX)
        clearInterval(moveX)
      }
      htmlY[positionY].children[positionX].style.background = 'white'
      htmlY[positionY].children[positionX-1].style.background = 'white'
      htmlY[positionY-1].children[positionX].style.background = 'white'
      htmlY[positionY-1].children[positionX-1].style.background = 'white'
      axis[positionY][positionX] = 0
      downRight ? ++positionX : --positionX //this works
    }, 260)
  }


  const upDown = function(axis, downRight) {
    moveY = setInterval(function() {
      if (axis[downRight ? positionY + 1 : positionY - 1][positionX] !== 0) {
        clearInterval(moveY)
        clearInterval(pauseY)
      }
      htmlY[positionY].children[positionX].style.background = 'red'
      htmlY[positionY].children[positionX-1].style.background = 'red'
      htmlY[positionY-1].children[positionX].style.background = 'red'
      htmlY[positionY-1].children[positionX-1].style.background = 'red'
      axis[positionY][positionX] = 2
    }, 200)
    pauseY = setInterval(function() {
      if (axis[downRight ? positionY +1 : positionY -1][positionX] !== 0) {
        clearInterval(pauseY)
        clearInterval(moveY)
      }
      htmlY[positionY].children[positionX].style.background = 'white'
      htmlY[positionY].children[positionX-1].style.background = 'white'
      htmlY[positionY-1].children[positionX].style.background = 'white'
      htmlY[positionY-1].children[positionX-1].style.background = 'white'
      axis[positionY][positionX] = 0
      downRight ? ++positionY : --positionY
    }, 260)
  }

  document.onkeydown = function(e) {
    e = e || window.event
    switch(e.which || e.keyCode) {
      case 37:
        clearInterval(moveX)
        clearInterval(pauseX)
        clearInterval(moveY)
        clearInterval(pauseY)
        leftRight(axis, false)

        break

      case 38:
        clearInterval(moveX)
        clearInterval(pauseX)
        clearInterval(moveY)
        clearInterval(pauseY)
        upDown(axis, false)

        break

      case 39:
        clearInterval(moveX)
        clearInterval(pauseX)
        clearInterval(moveY)
        clearInterval(pauseY)
        leftRight(axis, true)

        break

      case 40:
        clearInterval(moveX)
        clearInterval(pauseX)
        clearInterval(moveY)
        clearInterval(pauseY)
        upDown(axis, true)

        break

      default: return
    }
    e.preventDefault()
  }





}) // close for DOMContentLoaded
