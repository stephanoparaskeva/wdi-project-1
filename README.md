# General Assembly WDI Project 1: Solo Game Project
## PacMan
[Deployed project](https://www.stephanoparaskeva.com/wdi-project-1-pacman/)

![](/images/pacman.gif)
___
### Overview:
A recreation of the classic game, where the user can increase their score by moving over points and avoiding ghosts. The ghosts have full follow logic and will track PacMan down or run away after PacMan eats a powerup.
___

### Timeframe & Team:
    7 days, solo

### The Brief:

* Render a grid-based game in the browser.
* Design logic for winning & visually display which player won.
* Include separate HTML / CSS / JavaScript files.
* Use Javascript or jQuery for DOM manipulation.
* Use semantic markup for HTML and CSS (adhere to best practices).
* The player should be able to clear at least one board.
* The player's score should be displayed at the end of the game.
* Responsive design.
* Each board gets more difficult.
* Persistent leaderboard using `localStorage`

**Additional**
* Create ghost logic where ghosts move randomly, and chase PacMan


### Technologies:

* HTML5
* CSS3
* Vanilla JavaScript (ECMAScript6)
* jQuery
* Animate.css
* SCSS
* Flexbox
* Git
* GitHub


### Approach:
I decided to work on this project with a focus on the map, as PacMan once broken down is essentially a map with 5 moving objects. Thus I decided to create a 2D array and have all properties of the game based on different integers in the 2D array. I wanted to create a very organic feel to the game were the map felt like a network with the moving objects having realistic movements.   


### Code Walkthrough:
1. I began by manually constructing a 2D array with different integers representing different things. The map itself is a 28x36 array of integers, where '1' represents a wall and '2' represents an empty space with a point. 
```javascript
const axis = [
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,1,2,2,2,2,2,2,2,2,2,2,1,1,1,1,2,2,2,2,2,2,2,2,2,2,1,1],
    [1,1,9,1,1,1,2,1,1,1,1,2,1,1,1,1,2,1,1,1,1,2,1,1,1,9,1,1],
    [1,1,2,1,1,1,2,1,1,1,1,2,1,1,1,1,2,1,1,1,1,2,1,1,1,2,1,1],
    [1,1,2,1,1,1,2,1,1,1,1,2,2,1,1,2,2,1,1,1,1,2,1,1,1,2,1,1],
    [1,1,2,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,1,2,1,1],
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
```
2. I then used JavaScript to create HTML elements for each position of the map. I did this by creating 28 row containers and inserting 36 divs inside of these.
```javascript
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
```
3. Next the map is drawn to the screen via iterating through both axes of the 2D and coloring the div backgrounds based on the value of the integer. I decided to make the walls transparent and give the points a black background with a yellow dot in the center (representing a point).
```javascript
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
```
4. I then began to focus on movement. Where I used the key presses of the directional arrows to increment PacMan's X and Y positions. As I made PacMan into an object, it meant that I changed the X and Y variable values on the PacMan object based on keypresses.
```javascript
switch(e.keyCode) {
      case 37: //left
        if (pacManObj.moveDirection(-1,0) !== 1 && loseBlocker === 0) {
          pacManObj.setBackground('black')
          pacManObj.positionX -= 1
          bigFruit()
          eatGhost()
          pacManObj.setBackground('#89F8F8')
          scoreRunner()
          highscores()
          htmlHighscore.innerHTML = `HIGHSCORE<br>1) ${highscore}<br>2) ${highscore2}<br>3) ${highscore3}`
          loseConditionKeyCall()
        }
```
5. PacMan and the ghosts' movement are based on iterating through the 2D array axes and display this visually by painting the previous position black (meaning that the character is no longer there) and painting the next position the color of that character, additionally, PacMan also has an integer where the 2D array is also changed to record the position of PacMan for later tracking. To prevent PacMan and the ghosts from walking through walls I used a function that exists on each object (PacMan or ghost) on the class of Ghost or of Pacman. 
```javascript
moveDirection(x, y) {
      if (axis[this.positionY + y][this.positionX + x] === 1) {
        return 1
      }
```
6. Then came creating the ghosts, I decided to make a Ghost class as each ghost will have its own position coordinates relative to itself. 
```javascript
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
   }
```
7. Once the ghosts where created, I needed to give them movement. Thus I decided to first randomize their movement. This was harder than it seemed as the ghost must pick a random move path at every junction in the map for its movement to seem truly random. Thus I used multiple cascading if-else blocks. Although these are long-winded, I believe that given more time I could refactor them to be very much shorter and more concise.
```javascript
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
        } 
```
  This is only part of the code used to achieve the ghost movement. This basically states that as long as the position that is to be   moved to is not a wall, is not the position that the ghost was in 2 moves ago and applies a randomizer. It does this for each ghost in the array of 4 ghosts.

8. After movement, I needed to implement tracking. Where the ghosts actively seek PacMan but also actively flee from PacMan once PacMan consumes a powerup. To do this, I gave the ghosts the ability to 'see' along the axis of the map. Like corridors, if a ghost is in an open section of the map, a function will run where the entire row or column is iterated through. If PacMan's coordinates are in the same axis then the ghost will move double pace towards PacMan. This is done with 4 functions which again can be refactored given enough time, to be far more efficient.
```javascript
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
```
9. Next was the scoring element of the game. To develop this, I made it so that whenever PacMan moves, a 'scoreRunner' funtion is run so that if PacMan travels over a position with a point (2 on the map) the score goes up, and the position changes to a 0, so that PacMan can no longer gain points from that position.
 
 ![](/images/score.gif)

10. Lastly, there must be win and loss conditions for PacMan. To win, PacMan must reach 3500 points. Once this is met, the while loop for the game ends and the score is displayed. The loss condition is met when PacMan travels over the same block as the ghosts 3 times (gets eaten).
```javascript
const loseCondition = (k) => {
    if (ghostArray[k].positionX === pacManObj.positionX &&
      ghostArray[k].positionY === pacManObj.positionY && modifier === 1) {
      clearInterval(ghostMovementInterval)
      loseBlocker = 1
      if (lives > 0) lives -= 1
```

### Styling:
To style PacMan I used CSS with SASS. I wanted to create an original looking game that felt different to the original PacMan and thus I chose to go with a 'Tron' like theme, with bright neon colors and an artistic background. I made the map semi-transparent so that the game blended with the background and added box-shadows that mirrored the background in order to further blend the game. One of the most challenging pieces to style was the map itself, as I had to use Flexbox to ensure that the 28x36 grid was actually displayed on the screen with the right orientation and that squares didnt wrap to the other side. Each square had to be in the right place for the game to work.

### Process:
As this was a solo project I worked using Version-Control via Git on GitHub myself. The game itself went through various stages or development phases and I'd consistently write code and then rewrite once I found a better solution.
1. First I rendered a the grid to the screen with only borders to test the map and movement.
 ![](https://media.giphy.com/media/kHCg58RakPFlxxMeBe/giphy.gif)
2. Next I designed the map with its structure and layout, threw in some colors to further test movement. At this point I had PacMan as 4 blocks in size, this began to prove to add additional work that didnt seem necessary. It meant that all collision calculations had to be calculated 4 times more.
 ![](https://media.giphy.com/media/PjyJQXfa5MCCuFosRw/giphy.gif)
3. I then decided to rewrite and try again where the characters were 1 block in size. I added the Ghost class and tested random movement for the ghosts, but at this stage the ghosts would be stuck in one part of the map. This was because they didn't have the required logic to help them out.
 ![](https://media.giphy.com/media/Qxx02zXzA5jG3QhWYQ/giphy.gif)
