window.addEventListener('DOMContentLoaded', () => {


  const htmlY = document.querySelectorAll('.Y')


// myDiv.querySelectorAll("#myDiv > .foo");

// htmlY[positionY].children[positionX].innerHTML = 'hello'


  const lilAxis = [1,0,0,0,0,0,0,0,0,1]
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
  let positionX = 1
  let positionY = 1
  console.log(axis)
  // class Movement {
  //   constructor() {
  //     // this.xDirection = xDirection
  //     // this.yDirection = yDirection
  //     // this.startFrom = startFrom
  //     // this.rightLeft = rightLeft
  //
  //     this.firstUpLeft = position - 1
  //     this.firstDownRight = position + 1
  //
  //   }

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
      axis[positionY][positionX] = 2
      console.log(positionX)
      console.log(positionY)

    }, 200)
    pauseX = setInterval(function() {
      if (axis[positionY][downRight ? positionX +1 : positionX -1] !== 0) {
        clearInterval(pauseX)
        clearInterval(moveX)
      }
      htmlY[positionY].children[positionX].style.background = 'white'
      console.log(positionX, 'positionX')
      console.log(positionY, 'positionY')
      axis[positionY][positionX] = 0
      downRight ? ++positionX : --positionX //this works
      console.log(downRight) //downRight works
      // console.log(axis)
    }, 260)
  }


  const upDown = function(axis, downRight) {
    moveY = setInterval(function() {
      if (axis[downRight ? positionY + 1 : positionY - 1][positionX] !== 0) {
        clearInterval(moveY)
        clearInterval(pauseY)
      }
      htmlY[positionY].children[positionX].style.background = 'red'
      axis[positionY][positionX] = 2
      console.log(positionX)
      console.log(positionY)

    }, 200)
    pauseY = setInterval(function() {
      if (axis[downRight ? positionY +1 : positionY -1][positionX] !== 0) {
        clearInterval(pauseY)
        clearInterval(moveY)
      }
      htmlY[positionY].children[positionX].style.background = 'white'
      axis[positionY][positionX] = 0
      downRight ? ++positionY : --positionY

      // console.log(axis)
      // console.log(position)
    }, 260)
  }




// const items = document.querySelector('.item1')
//   items.addEventListener('click', () => {
//     console.log(position)
//     wayToMove(true)
//   })
//
// const itemsvlV = document.querySelector('.item2')
//   itemsvlV.addEventListener('click', () => {
//     console.log(position)
//     wayToMove(false)
//   })

  // document.onkeydown('onkeydown', (e) => {
  //   if (e.KeyCode === 37) {
  //     wayToMove(axis, false)
  //   }
  //   if (e.KeyCode === 38) {
  //     wayToMove(yAxis, false)
  //   }
  //   if (e.KeyCode === 39) {
  //     wayToMove(xAxis, true)
  //   }
  //   if (e.KeyCode === 40) {
  //     wayToMaxisAxis, true)
  //   }
  // })

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

      default: return // xit this handler for other keys
    }
    e.preventDefault() // prevent the default action (scroll / move caret)
  }



// arrays from both sides
// y axis
// event listeners
// stop addEventListener






  // const firstTest = [0,0,0,0,0,0,0,0,0,1]
  // let index = 0
  //
  // const move = setInterval(function() {
  //   if (firstTest[index+1] !== 0) {
  //     clearInterval(moveX)
  //   }
  //   firstTest[index] = 1
  //   console.log(firstTest)
  // }, 200)
  // const pause = setInterval(function() {
  //   if (firstTest[index+1] !== 0) {
  //     clearInterval(pauseX)
  //   }
  //   firstTest[index] = 0
  //   index ++
  // }, 200)
  //
  //
  //
  // const firstTest = [0,0,0,0,0,0,0,0,0,0]
  // let index = firstTest.length-1
  //
  // const moveX = setInterval(function() {
  //   if (firstTest[index-1] !== 0) {
  //     clearInterval(moveX)
  //   }
  //   firstTest[index] = 1
  //   console.log(firstTest)
  // }, 200)
  // const pauseX = setInterval(function() {
  //   if (firstTest[index-1] !== 0) {
  //     clearInterval(pauseX)
  //   }
  //   firstTest[index] = 0
  //   index --
  // }, 200)
  //















})
