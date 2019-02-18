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
    [1,1,2,2,2,2,1,1,2,1,1,2,1,1,1,1,2,1,1,2,1,1,2,2,2,2,1,1],
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
  let pathFind1 = 1

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
      htmlY[this.positionY].children[this.positionX].style.background = 'black'
    }
  }

  //objects
  const pacManObj = new Pacman(2,2)
  const inky = new Ghost(14,16, 'blue')
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
        item.children[f].style.background = 'black'
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

  let r = 0
  const randomizer = () => {
    r = Math.floor(Math.random()*2)
  }

  //keypresses
  document.onkeydown = function(e) {
    switch(e.which || e.keyCode) {
      case 37: //left
        if (pacManObj.moveDirection(-1,0) !== 1) {
          scoreRunner()
          pacManObj.setBackground('black')
          pacManObj.positionX -= 1
          pacManObj.setBackground('yellow')
        }
        break

      case 38: //up
        if (pacManObj.moveDirection(0,-1) !== 1) {
          scoreRunner()
          pacManObj.setBackground('black')
          pacManObj.positionY -= 1
          pacManObj.setBackground('yellow')
        }
        break

      case 39: //right
        if (pacManObj.moveDirection(+1,0) !== 1) {
          scoreRunner()
          pacManObj.setBackground('black')
          pacManObj.positionX += 1
          pacManObj.setBackground('yellow')
        }
        break

      case 40: //down
        if (pacManObj.moveDirection(0,+1) !== 1) {
          scoreRunner()
          pacManObj.setBackground('black')
          pacManObj.positionY += 1
          pacManObj.setBackground('yellow')
        }
        break

      default: return
    }
    e.preventDefault()
  }

  //ghosts
  const allGhostMove = setInterval(function() {

    randomizer()

    for (let k = 0; k < ghostArray.length; k++) {
      let movementCheckLeft = (ghostArray[k].moveDirection(-1,0) !== 1) && (ghostArray[k].secondaryX !== ghostArray[k].positionX - 1)
      let movementCheckUp = (ghostArray[k].moveDirection(0,-1) !== 1) && (ghostArray[k].secondaryY !== ghostArray[k].positionY - 1)
      let movementCheckRight = (ghostArray[k].moveDirection(1,0) !== 1) && (ghostArray[k].secondaryX !== ghostArray[k].positionX + 1)
      let movementCheckDown = (ghostArray[k].moveDirection(0,1) !== 1) && (ghostArray[k].secondaryY !== ghostArray[k].positionY + 1)

      if (movementCheckLeft && movementCheckRight && r === 1) {
        ghostArray[k].setBlack()
        ghostArray[k].secondaryY = ghostArray[k].positionY
        ghostArray[k].secondaryX = ghostArray[k].positionX
        ghostArray[k].positionX -= 1 //only if this doesnt equal the previous position
        ghostArray[k].setBackground()
      } else if (movementCheckLeft && movementCheckRight && r === 0) {
        ghostArray[k].setBlack()
        ghostArray[k].secondaryY = ghostArray[k].positionY
        ghostArray[k].secondaryX = ghostArray[k].positionX
        ghostArray[k].positionX += 1 //only if this doesnt equal the previous position
        ghostArray[k].setBackground()
      } else if (movementCheckUp && movementCheckDown && r === 1) {
        ghostArray[k].setBlack()
        ghostArray[k].secondaryY = ghostArray[k].positionY
        ghostArray[k].secondaryX = ghostArray[k].positionX
        ghostArray[k].positionY -= 1 //only if this doesnt equal the previous position
        ghostArray[k].setBackground()
      } else if (movementCheckUp && movementCheckDown && r === 1) {
        ghostArray[k].setBlack()
        ghostArray[k].secondaryY = ghostArray[k].positionY
        ghostArray[k].secondaryX = ghostArray[k].positionX
        ghostArray[k].positionY += 1 //only if this doesnt equal the previous position
        ghostArray[k].setBackground()
      } else if (movementCheckLeft) { //left
        ghostArray[k].setBlack()
        ghostArray[k].secondaryY = ghostArray[k].positionY
        ghostArray[k].secondaryX = ghostArray[k].positionX
        ghostArray[k].positionX -= 1 //only if this doesnt equal the previous position
        ghostArray[k].setBackground()
      } else if (movementCheckUp) { //up
        ghostArray[k].setBlack()
        ghostArray[k].secondaryY = ghostArray[k].positionY
        ghostArray[k].secondaryX = ghostArray[k].positionX
        ghostArray[k].positionY -= 1 //only if this doesnt equal the previous position
        ghostArray[k].setBackground()
      } else if (movementCheckRight) { //right
        ghostArray[k].setBlack()
        ghostArray[k].secondaryY = ghostArray[k].positionY
        ghostArray[k].secondaryX = ghostArray[k].positionX
        ghostArray[k].positionX += 1 //only if this doesnt equal the previous position
        ghostArray[k].setBackground()
      } else if (movementCheckDown){ //down
        ghostArray[k].setBlack()
        ghostArray[k].secondaryY = ghostArray[k].positionY
        ghostArray[k].secondaryX = ghostArray[k].positionX
        ghostArray[k].positionY += 1 //only if this doesnt equal the previous position
        ghostArray[k].setBackground()
      }
  }
  }, 100)




  // //ai
  //
  // const aiEvaluateSpaceAround = (positionX, positionY, right, up) => {
  //   if ((axis[up ? positionY - 2: positionY + 1][up ? positionX : positionX] === 1) ||
  //     (axis[up ? positionY - 2 : positionY + 1][up ? positionX - 1 : positionX - 1] === 1)) {
  //     pathFind1 = 1
  //     console.log(pathFind1, 'pathFind now set to 1')} //upDown
  //    else if ((axis[right ? positionY - 1 : positionY - 1][right ? positionX + 1 : positionX - 2 ] === 1) ||
  //     (axis[right ? positionY : positionY][right ? positionX + 1 : positionX - 2 ] === 1)) {
  //     pathFind1 = 0
  //     console.log(pathFind1, 'pathfind now set to 0')}  //leftRight
  //   }
  //
  //
  //
  // let r = 0
  // const randomizer = () => {
  //   const r = Math.floor(Math.random()*2)
  //   return r
  // }
  //
  // const ghostObj = new Movement()
  //
  // const workMINIONS = setInterval(function() {
  //   r = randomizer()
  //   clearAllInvervals()
  //   aiEvaluateSpaceAround(positionGhostX, positionGhostY, ghostObj.right, ghostObj.up)
  //   if (pathFind1 === 1) {
  //     if (r === 0) {
  //       ghostObj.movePath(axis, false, true, false, false, false, true, positionGhostX, positionGhostY)
  //       // pathFind1 = 0
  //     } //left
  //     else if (r === 1) {
  //       ghostObj.movePath(axis, false, true, false, true, false, true, positionGhostX, positionGhostY)
  //       // pathFind1 = 0
  //     } //right
  //   } else if (pathFind1 === 0) {
  //     if (r === 0) {
  //       ghostObj.movePath(axis, true, false, true, false, false, true, positionGhostX, positionGhostY)
  //       // pathFind1 = 1
  //     } //up
  //     else if (r === 1) {
  //       ghostObj.movePath(axis, true, false, false, false, false, true, positionGhostX, positionGhostY)
  //       // pathFind1 = 1
  //     }//down
  //   }
  // }, 2000)

  // const ghostObj = new Movement()
  // ghostObj.movePath(axis, false, true, false, true,false, true, positionGhostX, positionGhostY)
  //
  // let playing = 0
  // const randomizer = () => {
  //   return Math.floor(Math.random()*4)
  // }
  //
  // while(playing < 10) {
  //   playing++
  //   let newR = randomizer()
  //   const testInverval = setInterval(function() {
  //
  //     switch(newR) {
  //     case 0: //left
  //
  //     console.log(positionGhostY)
  //
  //
  //
  //       ghostObj.movePath(axis, false, true, false, true,false, true, positionGhostX, positionGhostY)
  //       break
  //
  //
  //       default: return
  //     }
  //   }, 2000)
  // }

}) // close for DOMContentLoaded



/// add constructor and refactor
/// create ai and add more ghosts
