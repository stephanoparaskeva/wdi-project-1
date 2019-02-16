window.addEventListener('DOMContentLoaded', () => {

  const xAxis = [1,0,0,0,0,0,0,0,0,1]
  const yAxis = [
    [1,1,1,1,1,1,1,1,1,1],
    [1,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,1],
    [1,1,1,1,1,1,1,1,1,1]
]
  let position = 5
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

  let move
  let pause

  const wayToMove = function(axis, downRight) {
    move = setInterval(function() {
      if (axis[downRight ? position + 1 : position - 1] !== 0) {
        clearInterval(move)
        clearInterval(pause)
      }
      axis[position] = 2

      console.log(axis)
    }, 200)
    pause = setInterval(function() {
      if (axis[downRight ? position +1 : position -1] !== 0) {
        clearInterval(pause)
        clearInterval(move)
      }
      axis[position] = 0
      downRight ? ++position : --position
      console.log(position)
    }, 200)
  }

console.log(pause)


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
  //     wayToMove(xAxis, false)
  //   }
  //   if (e.KeyCode === 38) {
  //     wayToMove(yAxis, false)
  //   }
  //   if (e.KeyCode === 39) {
  //     wayToMove(xAxis, true)
  //   }
  //   if (e.KeyCode === 40) {
  //     wayToMove(yAxis, true)
  //   }
  // })

  document.onkeydown = function(e) {
    e = e || window.event
    switch(e.which || e.keyCode) {
      case 37:
      clearInterval(move)
      clearInterval(pause)
        wayToMove(xAxis, false)

        break

      case 38:
        clearInterval(move)
        clearInterval(pause)
        wayToMove(yAxis, false)

        break

      case 39:
      clearInterval(move)
      clearInterval(pause)
        wayToMove(xAxis, true)

        break

      case 40:
      clearInterval(move)
      clearInterval(pause)
        wayToMove(yAxis, true)

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
