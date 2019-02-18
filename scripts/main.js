window.addEventListener('DOMContentLoaded', () => {

  //axis 17y 13x
  const axis = [
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,1,2,2,2,2,2,2,2,2,2,2,1,1,1,1,2,2,2,2,2,2,2,2,2,2,1,1],
    [1,1,2,1,1,1,2,1,1,1,1,2,1,1,1,1,2,1,1,1,1,2,1,1,1,2,1,1],
    [1,1,2,1,1,1,2,1,1,1,1,2,1,1,1,1,2,1,1,1,1,2,1,1,1,2,1,1],
    [1,1,2,1,1,1,2,1,1,1,2,2,2,1,1,2,2,2,1,1,1,2,1,1,1,2,1,1],
    [1,1,2,1,1,2,2,2,2,2,2,1,2,2,2,2,1,2,2,2,2,2,2,1,1,2,1,1],
    [1,1,2,2,2,2,1,1,2,1,1,1,1,1,1,1,1,1,1,2,1,1,2,2,2,2,1,1],
    [1,1,2,1,1,2,1,1,2,1,1,1,1,1,1,1,1,1,1,2,1,1,2,1,1,2,1,1],
    [1,1,2,1,1,2,1,1,2,2,2,2,1,1,1,1,2,2,2,2,1,1,2,1,1,2,1,1],
    [1,1,2,2,2,2,1,1,1,1,1,2,1,1,1,1,2,1,1,1,1,1,2,2,2,2,1,1],
    [1,1,1,1,1,2,1,1,1,1,1,2,1,1,1,1,2,1,1,1,1,1,2,1,1,1,1,1],
    [5,5,5,5,1,2,1,1,2,2,2,2,2,2,2,2,2,2,2,2,1,1,2,1,5,5,5,5],
    [5,5,5,5,1,2,1,1,2,1,1,1,1,2,2,1,1,1,1,2,1,1,2,1,5,5,5,5],
    [5,5,5,5,1,2,1,1,2,1,1,1,1,5,5,1,1,1,1,2,1,1,2,1,5,5,5,5],
    [5,5,5,5,1,2,1,1,2,1,1,5,5,5,5,5,5,1,1,2,1,1,2,1,5,5,5,5],
    [1,1,1,1,1,2,1,1,2,1,1,5,5,5,5,5,5,1,1,2,1,1,2,1,1,1,1,1],
    [1,1,1,1,1,2,1,1,2,1,1,5,5,5,5,5,5,1,1,2,1,1,2,1,1,1,1,1],
    [1,1,1,1,1,2,2,2,2,1,1,5,5,5,5,5,5,1,1,2,2,2,2,1,1,1,1,1],
    [1,1,1,1,1,2,1,1,2,1,1,1,1,1,1,1,1,1,1,2,1,1,2,1,1,1,1,1],
    [5,5,5,5,1,2,1,1,2,1,1,1,1,1,1,1,1,1,1,2,1,1,2,1,5,5,5,5],
    [5,5,5,5,1,2,1,1,2,2,2,2,2,2,2,2,2,2,2,2,1,1,2,1,5,5,5,5],
    [5,5,5,5,1,2,1,1,2,1,1,1,1,1,1,1,1,1,1,2,1,1,2,1,5,5,5,5],
    [5,5,5,5,1,2,1,1,2,2,1,1,1,1,1,1,1,1,2,2,1,1,2,1,5,5,5,5],
    [1,1,1,1,1,2,1,1,1,2,2,2,2,2,2,2,2,2,2,1,1,1,2,1,1,1,1,1],
    [1,1,2,2,2,2,2,2,2,2,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,1,1],
    [1,1,2,1,1,1,2,1,1,2,1,1,1,1,1,1,1,1,2,1,1,2,1,1,1,2,1,1],
    [1,1,2,1,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,1,1,2,1,1],
    [1,1,2,1,1,1,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,1,1,2,1,1],
    [1,1,2,1,1,1,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,1,1,2,1,1],
    [1,1,2,1,1,1,2,2,2,2,2,2,1,1,1,1,2,2,2,2,2,2,1,1,1,2,1,1],
    [1,2,2,2,2,2,2,1,1,1,1,2,1,1,1,1,2,1,1,1,1,2,2,2,2,2,2,1],
    [1,2,1,1,1,1,1,1,1,1,1,2,1,1,1,1,2,1,1,1,1,1,1,1,1,1,2,1],
    [1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
  ]

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
  let imagePositionY = 0
  let score = 0
  let r = 0

  //classes
  class Pacman {
    constructor(positioX, positionY) {
      this.positionX = positioX
      this.positionY = positionY
    }
    moveDirection(x, y) {
      if (axis[this.positionY + y][this.positionX + x] === 1) {
        return 1
      }
    }
    setBackground(color) {
      htmlY[this.positionY].children[this.positionX].style.background = color
    }
  }

  class Ghost {
    constructor(positioX, positionY, color) {
      this.positionX = positioX
      this.positionY = positionY
      this.color = color
      this.secondaryX = 0
      this.secondaryY = 0
    }
    moveDirection(x, y) {
      if (axis[this.positionY + y][this.positionX + x] === 1) {
        return 1
      }
    }
    setBackground() {
      htmlY[this.positionY].children[this.positionX].style.background = this.color
    }
    setBlack() {
      if (axis[this.positionY][this.positionX] === 0 ||
        axis[this.positionY][this.positionX] === 5) {
        htmlY[this.positionY].children[this.positionX].style.background = 'black'
      } else if (axis[this.positionY][this.positionX] === 2) {
        htmlY[this.positionY].children[this.positionX].style.backgroundImage
        = "url('images/pellets.jpg')"
        htmlY[this.positionY].children[this.positionX].style.backgroundSize
        = 'contain'
      }
    }
  }

  //objects
  const pacManObj = new Pacman(2,2)
  const inky = new Ghost(14,16, 'cyan')
  const pinky = new Ghost(13,16, 'pink')
  const blinky = new Ghost(12,16, 'red')
  const clyde = new Ghost(11,16, 'orange')

  //object array
  const ghostArray = [inky, pinky, blinky, clyde]

  //map
  htmlY.forEach(function(item) {
    for(let f = 0; f < axis[0].length; f++) {
      if (axis[imagePositionY][f] === 1) {
        item.children[f].style.background = 'blue'
        item.children[f].style.marginBottom = '3px'
      } else if (axis[imagePositionY][f] === 2){
        item.children[f].style.backgroundImage = "url('images/pellets.jpg')"
        item.children[f].style.backgroundSize = 'contain'
      } else if (axis[imagePositionY][f] === 5){
        item.children[f].style.background = 'black'
      }
    }
    imagePositionY++
  })

  //functions
  const scoreRunner = () => {
    if (axis[pacManObj.positionY][pacManObj.positionX] === 2) {
      score += 10
      htmlScore.innerHTML = `Score ${score}`
      axis[pacManObj.positionY][pacManObj.positionX] = 0
    }
  }

  const loseCondition = (k) => {
    if (ghostArray[k].positionX === pacManObj.positionX &&
      ghostArray[k].positionY === pacManObj.positionY) {
      console.log('you lose')
    }
  }

  const randomizer = () => {
    r = Math.floor(Math.random()*2)
  }

  const incrementXMovement = (increment, k) => {
    ghostArray[k].setBlack()
    ghostArray[k].secondaryY = ghostArray[k].positionY
    ghostArray[k].secondaryX = ghostArray[k].positionX
    ghostArray[k].positionX += increment
    ghostArray[k].setBackground()
    loseCondition(k)
  }
  const incrementYMovement = (increment, k) => {
    ghostArray[k].setBlack()
    ghostArray[k].secondaryY = ghostArray[k].positionY
    ghostArray[k].secondaryX = ghostArray[k].positionX
    ghostArray[k].positionY += increment
    ghostArray[k].setBackground()
    loseCondition(k)
  }

  //keypresses
  document.onkeydown = function(e) {
    switch(e.keyCode) {
      case 37: //left
        if (pacManObj.moveDirection(-1,0) !== 1) {
          pacManObj.setBackground('black')
          pacManObj.positionX -= 1
          pacManObj.setBackground('yellow')
          scoreRunner()
        }
        break
      case 38: //up
        if (pacManObj.moveDirection(0,-1) !== 1) {
          pacManObj.setBackground('black')
          pacManObj.positionY -= 1
          pacManObj.setBackground('yellow')
          scoreRunner()
        }
        break
      case 39: //right
        if (pacManObj.moveDirection(+1,0) !== 1) {
          pacManObj.setBackground('black')
          pacManObj.positionX += 1
          pacManObj.setBackground('yellow')
          scoreRunner()
        }
        break
      case 40: //down
        if (pacManObj.moveDirection(0,+1) !== 1) {
          pacManObj.setBackground('black')
          pacManObj.positionY += 1
          pacManObj.setBackground('yellow')
          scoreRunner()
        }
        break
      default: return
    }
    e.preventDefault()
  }

  //ghosts
  const ghostMovementLogic = setInterval(function() {
    randomizer()
    for (let k = 0; k < ghostArray.length; k++) {
      const movementCheckLeft = (ghostArray[k].moveDirection(-1,0) !== 1) &&
        (ghostArray[k].secondaryX !== ghostArray[k].positionX - 1)
      const movementCheckUp = (ghostArray[k].moveDirection(0,-1) !== 1) &&
        (ghostArray[k].secondaryY !== ghostArray[k].positionY - 1)
      const movementCheckRight = (ghostArray[k].moveDirection(1,0) !== 1) &&
        (ghostArray[k].secondaryX !== ghostArray[k].positionX + 1)
      const movementCheckDown = (ghostArray[k].moveDirection(0,1) !== 1) &&
        (ghostArray[k].secondaryY !== ghostArray[k].positionY + 1)
      if (movementCheckLeft && movementCheckRight && r === 1) {
        incrementXMovement(-1, k)
      } else if (movementCheckLeft && movementCheckRight && r === 0) {
        incrementXMovement(1, k)
      } else if (movementCheckUp && movementCheckDown && r === 1) {
        incrementYMovement(-1, k)
      } else if (movementCheckUp && movementCheckDown && r === 0) {
        incrementYMovement(1, k)
      } else if (movementCheckLeft) {
        incrementXMovement(-1, k)
      } else if (movementCheckUp) {
        incrementYMovement(-1, k)
      } else if (movementCheckRight) {
        incrementXMovement(1, k)
      } else if (movementCheckDown){
        incrementYMovement(1, k)
      }
    }
  }, 100)

}) // close for DOMContentLoaded
