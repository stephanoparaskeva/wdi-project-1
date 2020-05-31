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
* Persistent leaderboard using `localStorage`.

**Additional**
* Add ghost follow logic where ghosts chase PacMan.


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
I decided to work on this project with a focus on the game *map*. When I broke PacMan down, I found that it is essentially one big map with 5 moving objects. Thus I decided to create a 2D array and have all properties of the game based on different integers in the 2D array. I wanted to create a very organic feel to the game were the map felt like a network with the moving objects having realistic movement.   


### Code Walkthrough:
1. I began manually constructing the map as a 2D array with different integers representing different things. The map itself is a 28x36 array of integers where `1` represents a wall and `2` represents an empty space with a point. 
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
2. I then used JavaScript to create HTML elements for each position of the map. I did this by creating 28 divs as rows and inserting 36 divs for columns inside of these.
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
3. Next the map is drawn to the screen via iterating through both axis of the 2D array and colouring the div backgrounds based on the value of the integer. I decided to make the walls transparent and give the points a black background with a yellow dot in the center (representing a point).
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
4. I then began to focus on movement. Where I used the key presses of the directional arrows to increment PacMan's X and Y position. As I made PacMan into an object, it meant that the X and Y variable values on the PacMan object change based on keypresses.
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
5. PacMan and the ghosts' movement are based on iterating through the axis of the 2D array. This is displayed visually by painting the div at the coordinates of the previous position of the character (ghost or PacMan) black and painting the next position the color of that character, additionally, PacMan also has an integer value associated to it, where the 2D array is changed to this value to record the position of PacMan for later tracking. To prevent PacMan and the ghosts from walking through walls I used a function that exists on each object (PacMan or ghost) on their respective classes called `moveDirection`. 
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
7. Once the ghosts were created, I needed to give them movement by randomizing their next position. This was harder than it seemed as the ghosts would often move back and forth, retracing their steps. So I instead used multiple if-else blocks as well as random move choices. Using these together to make the ghosts move along one path and only change direction at a junction. Although this if-else chain is long-winded, given more time I would have refactored them to be very much shorter and more concise.
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
This is only part of the code used to achieve the ghost movement. This states that as long as the next position is not a wall and is not a previous position from 2 moves ago the ghost will move to that position, while applying a randomizer where there are multiple positions to choose from. It does this for each ghost in the array of 4 ghosts.

8. After movement, I needed to implement tracking. Where the ghosts actively seek out PacMan, and actively flee from PacMan once PacMan consumes a powerup. To do this, I gave the ghosts the ability to 'see' along their axis of the map, like corridors. If a ghost is in an open section of the map, a function will run where the entire row or column is iterated through. If PacMan's coordinates are in the same axis then the ghost will move double pace towards PacMan. This is done with 4 functions for the 4 move directions which again can be refactored given enough time, to be far more efficient.
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
9. Then came the scoring element of the game. To develop this, I made it so that whenever PacMan moves a `scoreRunner` funtion is run to check whether PacMan travels over a position with an available point (a 2 on the map) the score goes up, and the integer in the map changes to a 0, so that PacMan can no longer gain points from that position.
 
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
To style the game I used CSS with SASS. I wanted to create a game that looked slightly different to the original PacMan and thus I chose to go with a 'Tron' like theme, with bright neon colors and an artistic background. I made the map semi-transparent so that the game blended with the background and added box-shadows that mirrored the background. One of the most challenging pieces to style was the map itself, as I had to use Flexbox to ensure that the 28x36 grid was displayed on the screen with the right orientation and that it didnt have divs that wrap to the other side. Each div had to be in the right place for the game to work.

### Process:
As this was a solo project I worked using Version-Control via Git on GitHub myself. The game itself went through various development phases and I'd consistently write code and then rewrite once I found a better solution.
1. First I rendered the grid to the screen with only borders to test the map and movement.
 
 ![](/images/firstStageGif.gif)

2. Next I designed the map with its structure and layout, threw in some colours to further test movement. At this point I had PacMan as 4 blocks in size, this added additional work that didnt seem necessary. It meant that all collision calculations had to be calculated 4 times more.
 
 ![](/images/secondStageGif.gif)

3. I then decided to rewrite and try again where the characters were 1 block in size. I added the Ghost class and tested random movement for the ghosts, but at this stage the ghosts would be stuck in one part of the map. This was because they didn't have the required logic to help them out.
 
 ![](/images/thirdStageGif.gif)

### Bugs:
*Below is a list of some of the known issues*:

---

**Problem**: The start screen displaying highscores will display `null` if no highscores have yet been recorded.

**Solution**: The inner HTML can be changed to `0` if the value of the highscore is falsey.

---

**Problem**: PacMan can avoid the ghosts by moving into their spawn location. This doesn't mean that the player can cheat as it adds no benefit because the player can't win by doing this. This is still another bug however.

**Solution**: This could be fixed by making the spaces inside the spawn location act as a wall to PacMan but not the ghosts.

---

### Wins and Blockers:

The biggest blocker for me was coding the movement of the ghosts. Before I used a classes, I attempted to code movement for each ghost seperately. This made it hard to keep track of all the different moving parts. I began to lose track of the different variables for each ghost. I then began to think of the ghosts as objects and knew that all ghosts had a general blueprint that was the Ghost class. Doing this made it far easier to work with the multiple ghosts as each is really just a different iteration of the same thing. The problems didnt end there however as the ghosts would still sometimes clip through the walls. It took further debugging to manage to fix the issue.

A win for the app was the giant map. I decided early on to use a 2D array rather than focusing on making the game HTML based. This meant that the game was all contained within this one managable map which gave me more control. Moreover, building the game like this and using classes made the code more scalable as if in the future I wanted to add more ghosts or a larger map, both would be possible with minimum effort.

### Future Features:

*Features we would like to add, include:*

* Prompts for the user to see what the controls are.

* An extended map, possibly multiple levels.

* Online leaderboards.

* More responsive styling.

### Key Learnings:
This project helped me in learning to code a project from the ground up by starting from little more than an idea on how to make the project work. Breaking the game into multiple smaller parts and problems and then taking these step-by-step, thinking about how to solve them. I enjoyed seeing my work come together. The project was a wealth of small problems to overcome and learn from. 
