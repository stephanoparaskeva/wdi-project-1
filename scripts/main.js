window.addEventListener('DOMContentLoaded', () => {

  // htmlY[positionY].children[positionX].innerHTML = 'hello'

  const axis = [
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,1,1,0,0,1,1,1,1,0,0,1,1,0,0,1,1,1,1,0,0,1,1,0,0,1],
    [1,0,0,1,1,0,0,1,1,1,1,0,0,1,1,0,0,1,1,1,1,0,0,1,1,0,0,1],
    [1,0,0,1,1,0,0,1,1,1,1,0,0,1,1,0,0,1,1,1,1,0,0,1,1,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,1,1,0,0,1,0,0,1,1,1,1,1,1,1,1,0,0,1,0,0,1,1,0,0,1],
    [1,0,0,0,0,0,0,1,0,0,0,0,0,1,1,0,0,0,0,0,1,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,1,0,0,0,0,0,1,1,0,0,0,0,0,1,0,0,0,0,0,0,1],
    [1,1,1,1,1,0,0,1,1,1,1,0,0,1,1,0,0,1,1,1,1,0,0,1,1,1,1,1],
    [0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0],
    [0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0],
    [0,0,0,0,1,0,0,1,0,0,1,1,1,0,0,1,1,1,0,0,1,0,0,1,0,0,0,0],
    [0,0,0,0,1,0,0,1,0,0,1,0,0,0,0,0,0,1,0,0,1,0,0,1,0,0,0,0],
    [1,1,1,1,1,0,0,1,0,0,1,0,0,0,0,0,0,1,0,0,1,0,0,1,1,1,1,1],
    [9,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,9],
    [9,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,9],
    [1,1,1,1,1,0,0,1,0,0,1,1,1,1,1,1,1,1,0,0,1,0,0,1,1,1,1,1],
    [0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0],
    [0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0],
    [0,0,0,0,1,0,0,1,0,0,1,1,1,1,1,1,1,1,0,0,1,0,0,1,0,0,0,0],
    [0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0],
    [1,1,1,1,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,1,1,1,1],
    [0,1,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,1,0],
    [0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0],
    [0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0],
    [1,1,0,0,1,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,1,0,0,1,1],
    [1,1,0,0,1,0,0,0,0,0,1,1,1,1,1,1,1,1,0,0,0,0,0,1,0,0,1,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,1,0,0,0,0,0,1,1,0,0,0,0,0,1,0,0,0,0,0,0,1],
    [1,0,0,1,1,1,1,1,1,1,1,0,0,1,1,0,0,1,1,1,1,1,1,1,1,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
  ]

  const htmlY = document.querySelectorAll('.Y')

  let positionX = 2
  let positionY = 2
  let imagePositionY = 0
  let moveX
  let pauseX
  let moveY
  let pauseY

  //map
  htmlY.forEach(function(item) {
    for(let i = 0; i < axis[0].length; i++) {
      if (axis[imagePositionY][i] === 1) {
        item.children[i].style.background = 'blue'
      }else if (axis[imagePositionY][i] === 0){
        item.children[i].style.background = 'black'
      }
    }

    imagePositionY++
  })

  let move
  let pause

  const clearAllInvervals = () => {
    clearInterval(move)
    clearInterval(pause)
  }

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
        if ((axis[right ? positionY : positionY][right ? positionX + 1 : positionX - 2 ] === 1) ||
          (axis[right ? positionY - 1 : positionY - 1][right ? positionX + 1 : positionX - 2 ] === 1)) {
          clearAllInvervals()
        }
      }
      setBackground('yellow')
      axis[positionY][positionX] = 2
    }, 200)
    pause = setInterval(function() {
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
      }
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




}) // close for DOMContentLoaded
