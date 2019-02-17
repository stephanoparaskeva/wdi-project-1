window.addEventListener('DOMContentLoaded', () => {

  //axis
  const axis = [
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,2,2,2,2,2,2,2,2,2,2,2,2,1,1,2,2,2,2,2,2,2,2,2,2,2,2,1],
    [1,2,2,2,2,2,2,2,2,2,2,2,2,1,1,2,2,2,2,2,2,2,2,2,2,2,2,1],
    [1,2,2,1,1,2,2,1,1,1,1,2,2,1,1,2,2,1,1,1,1,2,2,1,1,2,2,1],
    [1,2,2,1,1,2,2,1,1,1,1,2,2,1,1,2,2,1,1,1,1,2,2,1,1,2,2,1],
    [1,2,2,1,1,2,2,1,1,1,1,2,2,1,1,2,2,1,1,1,1,2,2,1,1,2,2,1],
    [1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1],
    [1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1],
    [1,2,2,1,1,2,2,1,2,2,1,1,1,1,1,1,1,1,2,2,1,2,2,1,1,2,2,1],
    [1,2,2,2,2,2,2,1,2,2,2,2,2,1,1,2,2,2,2,2,1,2,2,2,2,2,2,1],
    [1,2,2,2,2,2,2,1,2,2,2,2,2,1,1,2,2,2,2,2,1,2,2,2,2,2,2,1],
    [1,1,1,1,1,2,2,1,1,1,1,2,2,1,1,2,2,1,1,1,1,2,2,1,1,1,1,1],
    [5,5,5,5,1,2,2,1,2,2,2,2,2,2,2,2,2,2,2,2,1,2,2,1,5,5,5,5],
    [5,5,5,5,1,2,2,1,2,2,2,2,2,2,2,2,2,2,2,2,1,2,2,1,5,5,5,5],
    [5,5,5,5,1,2,2,1,2,2,1,1,1,5,5,1,1,1,2,2,1,2,2,1,5,5,5,5],
    [5,5,5,5,1,2,2,1,2,2,1,5,5,5,5,5,5,1,2,2,1,2,2,1,5,5,5,5],
    [1,1,1,1,1,2,2,1,2,2,1,5,5,5,5,5,5,1,2,2,1,2,2,1,1,1,1,1],
    [1,2,2,2,2,2,2,2,2,2,1,5,5,5,5,5,5,1,2,2,2,2,2,2,2,2,2,1],
    [1,2,2,2,2,2,2,2,2,2,1,5,5,5,5,5,5,1,2,2,2,2,2,2,2,2,2,1],
    [1,1,1,1,1,2,2,1,2,2,1,1,1,1,1,1,1,1,2,2,1,2,2,1,1,1,1,1],
    [5,5,5,5,1,2,2,1,2,2,2,2,2,2,2,2,2,2,2,2,1,2,2,1,5,5,5,5],
    [5,5,5,5,1,2,2,1,2,2,2,2,2,2,2,2,2,2,2,2,1,2,2,1,5,5,5,5],
    [5,5,5,5,1,2,2,1,2,2,1,1,1,1,1,1,1,1,2,2,1,2,2,1,5,5,5,5],
    [5,5,5,5,1,2,2,1,2,2,2,2,2,2,2,2,2,2,2,2,1,2,2,1,5,5,5,5],
    [1,1,1,1,1,2,2,1,2,2,2,2,2,2,2,2,2,2,2,2,1,2,2,1,1,1,1,1],
    [5,1,2,2,2,2,2,2,2,2,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,1,5],
    [5,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,5],
    [5,1,2,2,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,2,2,1,5],
    [1,1,2,2,1,2,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,2,1,2,2,1,1],
    [1,1,2,2,1,2,2,2,2,2,1,1,1,1,1,1,1,1,2,2,2,2,2,1,2,2,1,1],
    [1,2,2,2,2,2,2,2,2,2,2,2,2,1,1,2,2,2,2,2,2,2,2,2,2,2,2,1],
    [1,2,2,2,2,2,2,1,2,2,2,2,2,1,1,2,2,2,2,2,1,2,2,2,2,2,2,1],
    [1,2,2,1,1,1,1,1,1,1,1,2,2,1,1,2,2,1,1,1,1,1,1,1,1,2,2,1],
    [1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1],
    [1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
  ]

  //1 wall 2 points // 3 pacman //4 ghosts //5 no-go //max-score 3000

  //html
  const gameContainer = document.querySelector('.game-container')

  for (let i = 0; i < 36; i++) {
    const createHtmlAxisY = document.createElement('div')
    createHtmlAxisY.setAttribute('class', 'Y')
    gameContainer.appendChild(createHtmlAxisY)
    for (let j = 0; j < 28; j++) {
      const createHtmlAxisX = document.createElement('div')
      createHtmlAxisX.setAttribute('class', 'items')
      createHtmlAxisY.appendChild(createHtmlAxisX)
    }
  }

  const htmlY = document.querySelectorAll('.Y')
  const htmlScore = document.querySelector('.score')

  //variables
  let positionX = 2
  let positionY = 2
  let imagePositionY = 0
  let score = 0
  let move
  let pause

  //map
  htmlY.forEach(function(item) {
    for(let f = 0; f < axis[0].length; f++) {
      if (axis[imagePositionY][f] === 1) {
        item.children[f].style.background = 'blue'
        item.children[f].style.marginBottom = '3px'
      } else if (axis[imagePositionY][f] === 2){
        item.children[f].style.background = 'black'
        item.children[f].style.borderBottomLeftRadius = '4px'
      } else if (axis[imagePositionY][f] === 5){
        item.children[f].style.background = 'black'
      }
    }
    imagePositionY++
  })

  //functions
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
  const createPacMan = () => {
    htmlY[positionY].children[positionX].style.backgroundImage = "url('images/bottomRight.png')"
    htmlY[positionY].children[positionX].style.backgroundSize = '16px 14px'
    htmlY[positionY].children[positionX-1].style.backgroundImage = "url('images/bottomLeft.png')"
    htmlY[positionY].children[positionX-1].style.backgroundSize = '16px 14px'
    htmlY[positionY-1].children[positionX].style.backgroundImage = "url('images/topRight.png')"
    htmlY[positionY-1].children[positionX].style.backgroundSize = '16px 14px'
    htmlY[positionY-1].children[positionX-1].style.backgroundImage = "url('images/topLeft.png')"
    htmlY[positionY-1].children[positionX-1].style.backgroundSize = '16px 14px'

  }

  const removeBorder = () => {
    htmlY[positionY].children[positionX].style.borderBottomLeftRadius = '0px'
    htmlY[positionY].children[positionX-1].style.borderBottomLeftRadius = '0px'
    htmlY[positionY-1].children[positionX].style.borderBottomLeftRadius = '0px'
    htmlY[positionY-1].children[positionX-1].style.borderBottomLeftRadius = '0px'
  }

  //movement
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
      createPacMan()
      // setBackground('yellow')
      if (axis[positionY][positionX] === 2) {
        score += 10
        htmlScore.innerHTML = `Score ${score}`
      }
      axis[positionY][positionX] = 3
    }, 100)
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
      removeBorder()
      axis[positionY][positionX] = 0
      if (leftRight)  {
        right ? ++positionX : --positionX
      } else if (upDown) {
        up ? --positionY : ++positionY
      }
    }, 160)
  }

  //keypresses
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

  // //score
  // let score = 0


}) // close for DOMContentLoaded
