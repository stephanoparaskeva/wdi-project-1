window.addEventListener('DOMContentLoaded', () => {

  //axis
  const axis = [
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,1,2,2,2,2,2,2,2,2,2,2,1,1,1,1,2,2,2,2,2,2,2,2,2,2,1,1],
    [1,1,9,1,1,1,2,1,1,1,1,2,1,1,1,1,2,1,1,1,1,2,1,1,1,9,1,1],
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
    [5,5,5,5,1,2,1,1,2,1,1,5,6,5,5,6,5,1,1,2,1,1,2,1,5,5,5,5],
    [1,1,1,1,1,2,1,1,2,1,1,5,6,6,6,6,5,1,1,2,1,1,2,1,1,1,1,1],
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
    [1,2,9,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,9,2,1],
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
  let timerCount = 0
  let modifier = 1

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
      if (axis[this.positionY + y][this.positionX + x] === 1 ||
      axis[this.positionY + y][this.positionX + x] === 6) {
        return 1
      }
    }
    setBackground() {
      if (modifier === 1) {
        htmlY[this.positionY].children[this.positionX].style.background = this.color
      } else if (timerCount % 2 === 0) {
        htmlY[this.positionY].children[this.positionX].style.background = 'white'
      } else if (modifier === -1) {
        htmlY[this.positionY].children[this.positionX].style.background = 'blue'
      }
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
      } else if (axis[this.positionY][this.positionX] === 9) {
        htmlY[this.positionY].children[this.positionX].style.backgroundImage
        = "url('images/bigFruit.jpg')"
        htmlY[this.positionY].children[this.positionX].style.backgroundSize
        = 'contain'
      }
    }
  }

  //objects
  const pacManObj = new Pacman(14,27)
  const inky = new Ghost(14,14, 'cyan')
  const pinky = new Ghost(13,15, 'pink')
  const blinky = new Ghost(14,15, 'red')
  const clyde = new Ghost(13,14, 'orange')

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
      } else if (axis[imagePositionY][f] === 9){
        item.children[f].style.backgroundImage = "url('images/bigFruit.jpg')"
        item.children[f].style.backgroundSize = 'contain'
      } else if (axis[imagePositionY][f] === 5 || axis[imagePositionY][f] === 6){
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
    } else if (axis[pacManObj.positionY][pacManObj.positionX] === 9) {
      score += 50
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

  const bigFruit = () => {
    if (axis[pacManObj.positionY][pacManObj.positionX] === 9) {
      const tenSecondTimer = setInterval(function() {
        modifier = - 1
        timerCount++
        if (timerCount === 40) {
          clearInterval(tenSecondTimer)
          modifier = 1
        }
      }, 250)
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

  const trackingYSameMoveLeft = (k, movementCheckLeft, chaseRun) => {
    if (ghostArray[k].positionY === pacManObj.positionY) {
      if (pacManObj.positionX < ghostArray[k].positionX && movementCheckLeft) {
        ghostArray[k].setBlack()
        ghostArray[k].secondaryY = ghostArray[k].positionY
        ghostArray[k].secondaryX = ghostArray[k].positionX
        ghostArray[k].positionX -= chaseRun
        ghostArray[k].setBackground()
        loseCondition(k)
      }
    }
  }

  const trackingYSameMoveRight = (k, movementCheckRight, chaseRun) => {
    if (ghostArray[k].positionY === pacManObj.positionY) {
      if (pacManObj.positionX > ghostArray[k].positionX && movementCheckRight) {
        ghostArray[k].setBlack()
        ghostArray[k].secondaryY = ghostArray[k].positionY
        ghostArray[k].secondaryX = ghostArray[k].positionX
        ghostArray[k].positionX += chaseRun
        ghostArray[k].setBackground()
        loseCondition(k)
      }
    }
  }

  const trackingXSameMoveUp = (k, movementCheckUp, chaseRun) => {
    if (ghostArray[k].positionX === pacManObj.positionX) {
      if (pacManObj.positionY < ghostArray[k].positionY && movementCheckUp) {
        ghostArray[k].setBlack()
        ghostArray[k].secondaryY = ghostArray[k].positionY
        ghostArray[k].secondaryX = ghostArray[k].positionX
        ghostArray[k].positionY -= chaseRun
        ghostArray[k].setBackground()
        loseCondition(k)
      }
    }
  }

  const trackingXSameMoveDown = (k, movementCheckDown, chaseRun) => {
    if (ghostArray[k].positionX === pacManObj.positionX) {
      if (pacManObj.positionY > ghostArray[k].positionY && movementCheckDown) {
        ghostArray[k].setBlack()
        ghostArray[k].secondaryY = ghostArray[k].positionY
        ghostArray[k].secondaryX = ghostArray[k].positionX
        ghostArray[k].positionY += chaseRun
        ghostArray[k].setBackground()
        loseCondition(k)
      }
    }
  }

  //keypresses
  document.onkeydown = function(e) {
    switch(e.keyCode) {
      case 37: //left
        if (pacManObj.moveDirection(-1,0) !== 1) {
          pacManObj.setBackground('black')
          pacManObj.positionX -= 1
          bigFruit()
          pacManObj.setBackground('yellow')
          scoreRunner()
        }
        break
      case 38: //up
        if (pacManObj.moveDirection(0,-1) !== 1) {
          pacManObj.setBackground('black')
          pacManObj.positionY -= 1
          bigFruit()
          pacManObj.setBackground('yellow')
          scoreRunner()
        }
        break
      case 39: //right
        if (pacManObj.moveDirection(+1,0) !== 1) {
          pacManObj.setBackground('black')
          pacManObj.positionX += 1
          bigFruit()
          pacManObj.setBackground('yellow')
          scoreRunner()
        }
        break
      case 40: //down
        if (pacManObj.moveDirection(0,+1) !== 1) {
          pacManObj.setBackground('black')
          pacManObj.positionY += 1
          bigFruit()
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
    for (let k = 0; k < ghostArray.length; k++) {
      randomizer()
      let movementCheckLeft = (ghostArray[k].moveDirection(-1,0) !== 1) &&
        (ghostArray[k].secondaryX !== ghostArray[k].positionX - 1)
      let movementCheckUp = (ghostArray[k].moveDirection(0,-1) !== 1) &&
        (ghostArray[k].secondaryY !== ghostArray[k].positionY - 1)
      let movementCheckRight = (ghostArray[k].moveDirection(1,0) !== 1) &&
        (ghostArray[k].secondaryX !== ghostArray[k].positionX + 1)
      let movementCheckDown = (ghostArray[k].moveDirection(0,1) !== 1) &&
        (ghostArray[k].secondaryY !== ghostArray[k].positionY + 1)
      if (movementCheckLeft && movementCheckRight && r === 1) {
        incrementXMovement(-1, k)  //left
        movementCheckLeft = (ghostArray[k].moveDirection(-1,0) !== 1) &&
          (ghostArray[k].secondaryX !== ghostArray[k].positionX - 1)
        trackingYSameMoveLeft(k, movementCheckLeft, modifier)
      } else if (movementCheckLeft && movementCheckRight && r === 0) {
        incrementXMovement(1, k) //right
        movementCheckRight = (ghostArray[k].moveDirection(1,0) !== 1) &&
          (ghostArray[k].secondaryX !== ghostArray[k].positionX + 1)
        trackingYSameMoveRight(k, movementCheckRight, modifier)
      } else if (movementCheckUp && movementCheckDown && r === 1) {
        incrementYMovement(-1, k) //up
        movementCheckUp = (ghostArray[k].moveDirection(0,-1) !== 1) &&
          (ghostArray[k].secondaryY !== ghostArray[k].positionY - 1)
        trackingXSameMoveUp(k, movementCheckUp, modifier)
      } else if (movementCheckUp && movementCheckDown && r === 0) {
        incrementYMovement(1, k) //down
        movementCheckDown = (ghostArray[k].moveDirection(0,1) !== 1) &&
          (ghostArray[k].secondaryY !== ghostArray[k].positionY + 1)
        trackingXSameMoveDown(k, movementCheckDown, modifier)
      } else if (movementCheckLeft && movementCheckUp && r === 0) {
        incrementYMovement(-1, k) //up
        movementCheckUp = (ghostArray[k].moveDirection(0,-1) !== 1) &&
          (ghostArray[k].secondaryY !== ghostArray[k].positionY - 1)
        trackingXSameMoveUp(k, movementCheckUp, modifier)
      } else if (movementCheckLeft && movementCheckUp && r === 1) {
        incrementXMovement(-1, k) //left
        movementCheckLeft = (ghostArray[k].moveDirection(-1,0) !== 1) &&
          (ghostArray[k].secondaryX !== ghostArray[k].positionX - 1)
        trackingYSameMoveLeft(k, movementCheckLeft, modifier)
      } else if (movementCheckRight && movementCheckDown && r === 0) {
        incrementYMovement(+1, k) //down
        movementCheckDown = (ghostArray[k].moveDirection(0,1) !== 1) &&
          (ghostArray[k].secondaryY !== ghostArray[k].positionY + 1)
        trackingXSameMoveDown(k, movementCheckDown, modifier)
      } else if (movementCheckRight && movementCheckDown && r === 1) {
        incrementXMovement(+1, k) // right
        movementCheckRight = (ghostArray[k].moveDirection(1,0) !== 1) &&
          (ghostArray[k].secondaryX !== ghostArray[k].positionX + 1)
        trackingYSameMoveRight(k, movementCheckRight, modifier)
      } else if (movementCheckRight && movementCheckUp && r === 0) {
        incrementYMovement(-1, k) //up
        movementCheckUp = (ghostArray[k].moveDirection(0,-1) !== 1) &&
          (ghostArray[k].secondaryY !== ghostArray[k].positionY - 1)
        trackingXSameMoveUp(k, movementCheckUp, modifier)
      } else if (movementCheckRight && movementCheckUp && r === 1) {
        incrementXMovement(+1, k) //left
        movementCheckLeft = (ghostArray[k].moveDirection(-1,0) !== 1) &&
          (ghostArray[k].secondaryX !== ghostArray[k].positionX - 1)
        trackingYSameMoveLeft(k, movementCheckLeft, modifier)
      } else if (movementCheckLeft && movementCheckDown && r === 0) {
        incrementYMovement(+1, k) //down
        movementCheckDown = (ghostArray[k].moveDirection(0,1) !== 1) &&
          (ghostArray[k].secondaryY !== ghostArray[k].positionY + 1)
        trackingXSameMoveDown(k, movementCheckDown, modifier)
      } else if (movementCheckLeft && movementCheckDown && r === 1) {
        incrementXMovement(-1, k) // right
        movementCheckRight = (ghostArray[k].moveDirection(1,0) !== 1) &&
          (ghostArray[k].secondaryX !== ghostArray[k].positionX + 1)
        trackingYSameMoveRight(k, movementCheckRight, modifier)
      } else if (movementCheckLeft) {
        incrementXMovement(-1, k) // left
        movementCheckLeft = (ghostArray[k].moveDirection(-1,0) !== 1) &&
          (ghostArray[k].secondaryX !== ghostArray[k].positionX - 1)
        trackingYSameMoveLeft(k, movementCheckLeft, modifier)
      } else if (movementCheckUp) {
        incrementYMovement(-1, k) //up
        movementCheckUp = (ghostArray[k].moveDirection(0,-1) !== 1) &&
          (ghostArray[k].secondaryY !== ghostArray[k].positionY - 1)
        trackingXSameMoveUp(k, movementCheckUp, modifier)
      } else if (movementCheckRight) {
        incrementXMovement(1, k) //right
        movementCheckRight = (ghostArray[k].moveDirection(1,0) !== 1) &&
          (ghostArray[k].secondaryX !== ghostArray[k].positionX + 1)
        trackingYSameMoveRight(k, movementCheckRight, modifier)
      } else if (movementCheckDown){
        incrementYMovement(1, k) //down
        movementCheckDown = (ghostArray[k].moveDirection(0,1) !== 1) &&
          (ghostArray[k].secondaryY !== ghostArray[k].positionY + 1)
        trackingXSameMoveDown(k, movementCheckDown, modifier)
      }
    }
  }, 100)

}) // close for DOMContentLoaded
