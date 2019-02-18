window.addEventListener('DOMContentLoaded', () => {

  //axis
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
    [1,2,2,2,2,2,2,2,2,1,1,5,5,5,5,5,5,1,1,2,2,2,2,2,2,2,2,1],
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
    moveAll(x, y) {
      if (axis[this.positionY + y][this.positionX + x] === 1) {
        return 1
      }
    }
    setBackground(color) {
      htmlY[this.positionY].children[this.positionX].style.background = color
    }
  }

  //objects

  const pacManObj = new Pacman(2,2)

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

  //
  // function evaluateSpaceAround(positionX, positionY, upDown, leftRight, right, up) {
  //   if (upDown) {
  //     if (axis[up ? positionY - 1: positionY + 1][positionX] === 1)  {
  //       clearAllInvervals()
  //     }
  //   } else if (leftRight) {
  //     if (axis[positionY][right ? positionX + 1 : positionX - 1 ] === 1) {
  //       clearAllInvervals()
  //     }
  //   }
  // }

  //keypresses
  document.onkeydown = function(e) {
    switch(e.which || e.keyCode) {
      case 37: //left
        if (pacManObj.moveAll(-1,0) !== 1) {
          scoreRunner()
          pacManObj.setBackground('black')
          pacManObj.positionX -= 1
          pacManObj.setBackground('yellow')
        }
        break

      case 38: //up
        if (pacManObj.moveAll(0,-1) !== 1) {
          scoreRunner()
          pacManObj.setBackground('black')
          pacManObj.positionY -= 1
          pacManObj.setBackground('yellow')
        }
        break

      case 39: //right
        if (pacManObj.moveAll(+1,0) !== 1) {
          scoreRunner()
          pacManObj.setBackground('black')
          pacManObj.positionX += 1
          pacManObj.setBackground('yellow')
        }
        break

      case 40: //down
        if (pacManObj.moveAll(0,+1) !== 1) {
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
