window.addEventListener('DOMContentLoaded', () => {

  const firstTest = [0,0,0,0,0,0,0,0,0,1]
  let position = 0
  class Movement {
    constructor() {
      // this.xDirection = xDirection
      // this.yDirection = yDirection
      // this.startFrom = startFrom
      // this.rightLeft = rightLeft

      this.firstDownLeft = position - 1
      this.incrementLeft = position - 1
      this.firstUpRight = position + 1
      this.incrementRight = position + 1
    }

      wayToMove = function(firstMove, incrementMoves, position) {
        console.log(firstMove)
        console.log(incrementMoves)
        console.log(position)

        const moveX = setInterval(function() {
          if (firstTest[position+1] !== 0) {
            clearInterval(moveX)
          }
          firstTest[position] = 1
          console.log(firstTest[firstMove])
          console.log(firstTest)
          
        }, 200)
        const pauseX = setInterval(function() {
          if (firstTest[position+1] !== 0) {
            clearInterval(pauseX)
          }
          firstTest[position] = 0
          ++position
          console.log(position)
        }, 200)
      }

  }

  const xMovementRight = new Movement()
  xMovementRight.wayToMove(xMovementRight.firstUpRight, xMovementRight.incrementRight, position)








  const items = document.querySelectorAll('.item')
  // const firstTest = [0,0,0,0,0,0,0,0,0,1]
  // let index = 0
  //
  // const moveX = setInterval(function() {
  //   if (firstTest[index+1] !== 0) {
  //     clearInterval(moveX)
  //   }
  //   firstTest[index] = 1
  //   console.log(firstTest)
  // }, 200)
  // const pauseX = setInterval(function() {
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




console.log(firstTest)










})
