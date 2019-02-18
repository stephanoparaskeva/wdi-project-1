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
  let positionA = 2
  let positionB = 2
  let positionGhostX = 2
  let positionGhostY = 2
  let imagePositionY = 0
  let score = 0
  let move
  let pause
  let pacMan
  let pathFind1 = 1

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

  class Pacman {
    constructor() {

    }
  }

  const setBackground = (color) => {
    htmlY[positionB].children[positionA].style.background = color
    htmlY[positionB].children[positionA-1].style.background = color
    htmlY[positionB-1].children[positionA].style.background = color
    htmlY[positionB-1].children[positionA-1].style.background = color

  }
  const setBackgroundOfGhost = (color) => {
    htmlY[positionGhostY].children[positionGhostX].style.background = color
    htmlY[positionGhostY].children[positionGhostX-1].style.background = color
    htmlY[positionGhostY-1].children[positionGhostX].style.background = color
    htmlY[positionGhostY-1].children[positionGhostX-1].style.background = color

  }
  const createPacMan = () => {
    htmlY[positionB].children[positionA].style.backgroundImage = "url('images/bottomRight.png')"
    htmlY[positionB].children[positionA].style.backgroundSize = '16px 14px'
    htmlY[positionB].children[positionA-1].style.backgroundImage = "url('images/bottomLeft.png')"
    htmlY[positionB].children[positionA-1].style.backgroundSize = '16px 14px'
    htmlY[positionB-1].children[positionA].style.backgroundImage = "url('images/topRight.png')"
    htmlY[positionB-1].children[positionA].style.backgroundSize = '16px 14px'
    htmlY[positionB-1].children[positionA-1].style.backgroundImage = "url('images/topLeft.png')"
    htmlY[positionB-1].children[positionA-1].style.backgroundSize = '16px 14px'

  }

  const removeBorder = () => {
    htmlY[positionB].children[positionA].style.borderBottomLeftRadius = '0px'
    htmlY[positionB].children[positionA-1].style.borderBottomLeftRadius = '0px'
    htmlY[positionB-1].children[positionA].style.borderBottomLeftRadius = '0px'
    htmlY[positionB-1].children[positionA-1].style.borderBottomLeftRadius = '0px'
  }

  const evaluateSpaceAround = (positionX, positionY, upDown, leftRight, right, up) => {
    if (upDown) {
      if ((axis[up ? positionY - 2: positionY + 1][up ? positionX : positionX] === 1) ||
      (axis[up ? positionY - 2 : positionY + 1][up ? positionX - 1 : positionX - 1] === 1)) {
        clearAllInvervals()
      }
    } else if (leftRight) {
      if ((axis[right ? positionY - 1 : positionY - 1][right ? positionX + 1 : positionX - 2 ] === 1) ||
      (axis[right ? positionY : positionY][right ? positionX + 1 : positionX - 2 ] === 1)) {
        clearAllInvervals()
      }
    }
  }





  //movement
  class Movement {
    constructor() {}

    //movement position a = x position y = b
    movePath(axis, upDown, leftRight, up, right, pacMan, ghost, positionX, positionY) {
      move = setInterval(function() {
        evaluateSpaceAround(positionX, positionY, upDown, leftRight, right, up)

        if (pacMan) {
          createPacMan()
        }
        if (ghost) {
          setBackgroundOfGhost('white')
        }
        if (pacMan && axis[positionB][positionA] === 2) {
          score += 10
          htmlScore.innerHTML = `Score ${score}`

        }
        axis[positionA][positionB] = 3
      }, 100)
      pause = setInterval(function() {
        evaluateSpaceAround(positionX, positionY, upDown, leftRight, right, up)

        if (pacMan) {
          setBackground('black')
          removeBorder()
          axis[positionB][positionX] = 0
        }
        if (ghost) {
          setBackgroundOfGhost('black')
        }
        if (leftRight)  {
          right ? ++positionX : --positionX
        } else if (upDown) {
          up ? --positionY : ++positionY
        }
        if (pacMan && leftRight) {
          right ? ++positionA : --positionA
        } else if (pacMan && upDown) {
          up ? --positionB : ++positionB
        }
        if (ghost && leftRight) {
          right ? ++positionGhostX : --positionGhostX
        } else if (ghost && upDown) {
          up ? --positionGhostY : ++positionGhostY
        }
      }, 160)
    }
  }

const pacManObj = new Movement()

//short circuit nature!!!!!!!!!!!!!!!!!!!


  //keypresses
  document.onkeydown = function(e) {
    e = e || window.event
    switch(e.which || e.keyCode) {
      case 37: //left
        clearAllInvervals()
        pacManObj.movePath(axis, false, true, false, false, true, false, positionA, positionB)
        break

      case 38: //up
        clearAllInvervals()
        pacManObj.movePath(axis, true, false, true, false, true, false, positionA, positionB)
        break

      case 39: //right
        clearAllInvervals()
        pacManObj.movePath(axis, false, true, false, true, true, false, positionA, positionB)
        break

      case 40: //down
        clearAllInvervals()
        pacManObj.movePath(axis, true, false, false, false, true, false, positionA, positionB)
        break

      default: return
    }
    e.preventDefault()
  }

  //ai

  const aiEvaluateSpaceAround = (positionX, positionY, right, up) => {
    if ((axis[up ? positionY - 2: positionY + 1][up ? positionX : positionX] === 1) ||
      (axis[up ? positionY - 2 : positionY + 1][up ? positionX - 1 : positionX - 1] === 1)) {
      pathFind1 = 1
      console.log(pathFind1, 'pathFind now set to 1')} //upDown
     else if ((axis[right ? positionY - 1 : positionY - 1][right ? positionX + 1 : positionX - 2 ] === 1) ||
      (axis[right ? positionY : positionY][right ? positionX + 1 : positionX - 2 ] === 1)) {
      pathFind1 = 0
      console.log(pathFind1, 'pathfind now set to 0')}  //leftRight
    }



  let r = 0
  const randomizer = () => {
    const r = Math.floor(Math.random()*2)
    return r
  }

  const ghostObj = new Movement()

  const workMINIONS = setInterval(function() {
    r = randomizer()
    clearAllInvervals()
    aiEvaluateSpaceAround(positionGhostX, positionGhostY, ghostObj.right, ghostObj.up)
    if (pathFind1 === 1) {
      if (r === 0) {
        ghostObj.movePath(axis, false, true, false, false, false, true, positionGhostX, positionGhostY)
        // pathFind1 = 0
      } //left
      else if (r === 1) {
        ghostObj.movePath(axis, false, true, false, true, false, true, positionGhostX, positionGhostY)
        // pathFind1 = 0
      } //right
    } else if (pathFind1 === 0) {
      if (r === 0) {
        ghostObj.movePath(axis, true, false, true, false, false, true, positionGhostX, positionGhostY)
        // pathFind1 = 1
      } //up
      else if (r === 1) {
        ghostObj.movePath(axis, true, false, false, false, false, true, positionGhostX, positionGhostY)
        // pathFind1 = 1
      }//down
    }
  }, 2000)

  // const ghostObj = new Movement()
  // ghostObj.movePath(axis, false, true, false, true,false, true, positionGhostX, positionGhostY)

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


///// fix clipping
//// fix interval overlap
/// add constructor and refactor
/// create ai and add more ghosts
