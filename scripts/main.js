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
    [1,1,1,1,1,2,1,1,2,2,2,2,2,2,2,2,2,2,2,2,1,1,2,1,1,1,1,1],
    [5,5,5,5,1,2,1,1,2,1,1,1,1,2,2,1,1,1,1,2,1,1,2,1,5,5,5,5],
    [5,5,5,5,1,2,1,1,2,1,1,1,1,5,5,1,1,1,1,2,1,1,2,1,5,5,5,5],
    [5,5,5,5,1,2,1,1,2,1,1,5,6,6,6,6,5,1,1,2,1,1,2,1,5,5,5,5],
    [5,5,5,5,1,2,1,1,2,1,1,5,6,6,6,6,5,1,1,2,1,1,2,1,5,5,5,5],
    [1,1,1,1,1,2,1,1,2,1,1,5,5,5,5,5,5,1,1,2,1,1,2,1,1,1,1,1],
    [1,1,1,1,1,2,2,2,2,1,1,5,5,5,5,5,5,1,1,2,2,2,2,1,1,1,1,1],
    [5,5,5,5,1,2,1,1,2,1,1,1,1,1,1,1,1,1,1,2,1,1,2,1,5,5,5,5],
    [5,5,5,5,1,2,1,1,2,1,1,1,1,1,1,1,1,1,1,2,1,1,2,1,5,5,5,5],
    [5,5,5,5,1,2,1,1,2,2,2,2,2,2,2,2,2,2,2,2,1,1,2,1,5,5,5,5],
    [5,5,5,5,1,2,1,1,2,1,1,1,1,1,1,1,1,1,1,2,1,1,2,1,5,5,5,5],
    [1,1,1,1,1,2,1,1,2,2,1,1,1,1,1,1,1,1,2,2,1,1,2,1,1,1,1,1],
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
  const htmlLives = document.querySelector('.lives')
  const htmlDieOverlay = document.querySelector('.die-overlay')
  const htmlPlayOverlay = document.querySelector('.play-overlay')
  const htmlReplay = document.querySelector('.replay')
  const htmlPlay = document.querySelector('.play')
  const htmlHighscore = document.querySelector('.highscores')

  //variables
  let highscore = localStorage.getItem('highscore')
  let lives = 3
  let imagePositionY = 0
  let score = 0
  let r = 0
  let timerCount = 0
  let modifier = 1
  let ghostMovementInterval
  let loseBlocker = 1
  let gameReset = 0

  //event listeners
  htmlPlayOverlay.addEventListener('click', () => {
    gameContainer.style.display = 'block'
    htmlPlayOverlay.style.display = 'none'
    loseBlocker = 0
    if (gameReset === 0) {
      setTimeout(ghostMovementLogic, 200)
    } else {
      location.reload()
    }
  })

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
  const inky = new Ghost(14,14, 'purple')
  const pinky = new Ghost(13,15, 'purple')
  const blinky = new Ghost(14,15, 'purple')
  const clyde = new Ghost(13,14, 'purple')

  //object array
  const ghostArray = [inky, pinky, blinky, clyde]

  //map
  htmlY.forEach(function(item) {
    for(let f = 0; f < axis[0].length; f++) {
      if (axis[imagePositionY][f] === 1) {
        item.children[f].style.marginTop = '5px'
      } else if (axis[imagePositionY][f] === 2){
        item.children[f].style.backgroundImage = "url('images/pellets.jpg')"
        item.children[f].style.backgroundSize = '16px 16px'
        item.children[f].style.backgroundRepeat = 'no-repeat'
      } else if (axis[imagePositionY][f] === 9){
        item.children[f].style.backgroundImage = "url('images/bigFruit.jpg')"
        item.children[f].style.backgroundSize = 'contain'
      } else if (axis[imagePositionY][f] === 5 || axis[imagePositionY][f] === 6){
        item.children[f].style.background = 'black'
      }
    }
    imagePositionY++
    htmlY[27].children[14].style.background = 'cyan'
  })

  //functions
  const scoreRunner = () => {

    htmlHighscore.innerHTML = `HIGHSCORE<br>${highscore}`
    if (score >= 3500) {
      gameReset = 1
      gameContainer.style.display = 'none'
      htmlPlayOverlay.style.display = 'block'
      loseBlocker = 1
      htmlPlay.innerHTML = 'You Won'
      htmlReplay.innerHTML = 'click to play again'
      htmlScore.classList.add('animated')
      htmlScore.classList.add('flash')
      htmlScore.classList.add('infinite')
      htmlLives.classList.add('animated')
      htmlLives.classList.add('flash')
      htmlLives.classList.add('infinite')
      clearInterval(ghostMovementInterval)
      for (let l = 0; l < ghostArray.length; l++) {
        htmlY[ghostArray[l].positionY].children[ghostArray[l].positionX].style.background = 'black'
      }
    }  else if (axis[pacManObj.positionY][pacManObj.positionX] === 2) {
      score += 10
      htmlScore.innerHTML = `score ${score}`
      axis[pacManObj.positionY][pacManObj.positionX] = 0
      if (score > highscore) {
        localStorage.setItem('highscore', score * 10)
      } else{
        localStorage.setItem('highscore', score * 10)
      }
    } else if (axis[pacManObj.positionY][pacManObj.positionX] === 9) {
      score += 50
      htmlScore.innerHTML = `score ${score}`
      axis[pacManObj.positionY][pacManObj.positionX] = 0
      if (score > highscore) {
        localStorage.setItem('highscore', score * 10)
      } else{
        localStorage.setItem('highscore', score * 10)
      }
    }
  }

  const loseCondition = (k) => {
    if (ghostArray[k].positionX === pacManObj.positionX &&
      ghostArray[k].positionY === pacManObj.positionY && modifier === 1) {
      clearInterval(ghostMovementInterval)
      loseBlocker = 1
      if (lives > 0) lives -= 1
      htmlLives.innerHTML = `lives ${lives}`
      pacManObj.positionX = 14
      pacManObj.positionY = 27
      htmlY[27].children[14].style.background = 'cyan'
      htmlDieOverlay.style.display = 'block'
      for (let t = 0; t < ghostArray.length; t++) {
        htmlY[ghostArray[t].positionY].children[ghostArray[t].positionX].style.background = 'black'
        ghostArray[t].positionX = 13
        ghostArray[t].positionY = 14
      } if (lives !== 0)
        setTimeout(function() {
          ghostMovementLogic()
          htmlDieOverlay.style.display = 'none'
          loseBlocker = 0
        }, 3000)
    }
    if (lives === 0) {
      gameReset = 1
      htmlPlay.innerHTML = 'You Lost'
      htmlReplay.innerHTML = 'click to play again'
      htmlPlayOverlay.style.display = 'block'
      gameContainer.style.display = 'none'
      htmlDieOverlay.style.display = 'none'
      htmlLives.classList.add('animated')
      htmlLives.classList.add('flash')
      htmlLives.classList.add('infinite')
      htmlScore.classList.add('animated')
      htmlScore.classList.add('flash')
      htmlScore.classList.add('infinite')
      clearInterval(ghostMovementInterval)
      if (score > highscore) {
        localStorage.setItem('highscore', score * 10)
      } else{
        localStorage.setItem('highscore', score * 10)
      }
    }
  }

  const loseConditionKeyCall = () => {
    for (let p = 0; p < ghostArray.length; p++)
      loseCondition(p)
  }

  const bigFruit = () => {
    if (axis[pacManObj.positionY][pacManObj.positionX] === 9) {
      const tenSecondTimer = setInterval(function() {
        modifier = - 1
        timerCount++
        if (timerCount === 40) {
          modifier = 1
          timerCount = 0
          clearInterval(tenSecondTimer)
        }
      }, 250)
    }
  }

  const eatGhost = () => {
    for (let n = 0; n < ghostArray.length; n++) {
      if (modifier === -1 && pacManObj.positionX === ghostArray[n].positionX &&
        pacManObj.positionY === ghostArray[n].positionY) {
        score += 200
        htmlScore.innerHTML = `score ${score}`
        ghostArray[n].positionX = 1
        ghostArray[n].positionY = 1
        setTimeout(function() {
          ghostArray[n].positionX = 13
          ghostArray[n].positionY = 14
        }, 3000)
      }
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
        if (pacManObj.moveDirection(-1,0) !== 1 && loseBlocker === 0) {
          pacManObj.setBackground('black')
          pacManObj.positionX -= 1
          bigFruit()
          eatGhost()
          pacManObj.setBackground('#89F8F8')
          scoreRunner()
          loseConditionKeyCall()
        }
        break
      case 38: //up
        if (pacManObj.moveDirection(0,-1) !== 1 && loseBlocker === 0) {
          pacManObj.setBackground('black')
          pacManObj.positionY -= 1
          bigFruit()
          eatGhost()
          pacManObj.setBackground('#89F8F8')
          scoreRunner()
          loseConditionKeyCall()
        }
        break
      case 39: //right
        if (pacManObj.moveDirection(+1,0) !== 1 && loseBlocker === 0) {
          pacManObj.setBackground('black')
          pacManObj.positionX += 1
          bigFruit()
          eatGhost()
          pacManObj.setBackground('#89F8F8')
          scoreRunner()
          loseConditionKeyCall()
        }
        break
      case 40: //down
        if (pacManObj.moveDirection(0,+1) !== 1 && loseBlocker === 0) {
          pacManObj.setBackground('black')
          pacManObj.positionY += 1
          bigFruit()
          eatGhost()
          pacManObj.setBackground('#89F8F8')
          scoreRunner()
          loseConditionKeyCall()
        }
        break
      default: return
    }
    e.preventDefault()
  }

  //ghosts
  const ghostMovementLogic = () => {
    ghostMovementInterval = setInterval(function() {
      eatGhost()
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
  }
}) // close for DOMContentLoaded
