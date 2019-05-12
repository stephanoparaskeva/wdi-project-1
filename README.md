## General Assembly WDI Project 1: Game

/forceFight/\

PACMAN/ RPG/

const Xaxis = [0,0,0,0,0]

const Yaxis = [
[0,0,0,0,0],  //0
[0,0,0,0,0],  //1
[0,0,0,0,0],  //2
[0,0,0,0,0],  //3
[0,0,0,0,0]   //4
]

5 by 5 grid.

key up/down changes index of outer array (y axis)

key left/right changes index of inner arrays (x axis)

if arrays have a 1 the item cannot be changed, (has something in it (ie a wall))
if arrays have a 0 the item is empty and can be changed (has nothing in it)


//perhaps call the player something other than 0,1 (maybe 2 or 'player')
//perhaps call the ghosts something other than player and 0,1 (3 or 'ghost')


Start game:

Player starts on an empty square and when game begins, he begins moving,
ghosts start in a little container



PART 1 movement

The player must move in a straight line all the way to the end of it's row based
on a key press. If an up arrow is pressed, the player moves through every point
in that array in the same line unless a different keypress is made/a ghost is
hit /or a wall blocks the path. If a wall blocks the path and is in the next
index of the array and the player is moving in that direction then the Player
stops completely.


PART 2 map
each dot, is a single point/div, there are objects which occupy multiple divs
(corresponding borders) the player cannot move through objects. a point is
allocated to every empty div at the beginning and disappears when travelled
upon giving the player a point.



PART 3 loss conditions

if a player lands on a div with a ghost, (the player loses unless the player has
landed on a big white circle. (if statement add later)


PART 4 win conditions

player travels on upon every div allocated point (once)


PART 5 AI
there are originally 4 ghosts.


SCORE
score goes up depending on:
point is travelled upon
fruit is picked up
ghost is killed


LIVES
you start with 2 extra lives, 3 plays including the start life. All 3 lost means
game is over, when you lose a life, game starts again











// let x = []
// let y = []
//
// for (let i = 0; i < 10; i++) {
//   x.push(y)
//   for (let j = 0; j < 10; j++) {
//     x[i].push(0)
//   }
// }
//
// console.log(x)


let x = []
let y = []

for (let i = 0; i < 10; i++) {
  x.push(y)
  for (let j = 0; j < 10; j++) {
    x[i].push(0)
  }
}

console.log(x)
