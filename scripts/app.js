function init() {


  //*ELEMENTS
  const grid = document.querySelector('.game-grid')
  const cells = []
  const startButton = document.querySelector('#start-button')
  const resetButton = document.querySelector('#reset-button')


  //*EXECUTION
  //ADD PLAYER (+ SET START POSITION)
  let playerPosition = 390
  function createPlayer() {
    cells[playerPosition].classList.add('red-square')
  }

  //REMOVE PLAYER
  function removeRedSquare() {
    cells[playerPosition].classList.remove('red-square')
  }

  //RESET - REMOVE PLAYER AND RESET POSITION FOR NEXT START
  function reset() {  
    removeRedSquare()
    playerPosition = 390
  }
  
  //MOVE PLAYER - left key 37 - right key 39
  function movePlayer(e){
    
    const playerMoveLeft = playerPosition - 1
    const playerMoveRight = playerPosition + 1
    if (e.keyCode === 37) {
      removeRedSquare()
      playerPosition = playerMoveLeft
      createPlayer()
    } else if (e.keyCode === 39) {
      removeRedSquare()
      playerPosition = playerMoveRight
      createPlayer()
    } else {
      return false
    }
  } 
  

  //EVENTS
  resetButton.addEventListener('click', reset)
  startButton.addEventListener('click', createPlayer)
  document.addEventListener('keydown', movePlayer)


  //PRINT PRESSED KEYCODE IN CONSOLE:
  // function printKey(e) {
  //   console.log(e.keyCode)
  // }
  // document.addEventListener('keyup', printKey)


  //MAKE GRID
  const width = 20
  const numberOfCells = width * width

  function makeGrid() {
    for (let i = 0; i < numberOfCells; i++) {
      const cell = document.createElement('div')
      cells.push(cell)
      cell.innerHTML = '.'
      grid.appendChild(cell)
      // console.log('clicked me')
    }
  
  }
  //make grid function on page load
  makeGrid()
  // createPlayer()
  // movePlayer()

}

document.addEventListener('DOMContentLoaded', init)