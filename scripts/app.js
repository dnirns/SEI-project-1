function init() {


  //*ELEMENTS
  const grid = document.querySelector('.game-grid')
  const cells = []
  const startButton = document.querySelector('#start-button')
  const resetButton = document.querySelector('#reset-button')


  //?EXECUTION

  //*PLAYER AND ENEMIES

  //ADD PLAYER (+ SET START POSITION)
  let playerPosition = 390
  function createPlayer() {
    cells[playerPosition].classList.add('player')
  }
  //ADD ENEMY
  let enemyPosition = 10
  function createEnemy() {
    cells[enemyPosition].classList.add('enemy')
  }
  //REMOVE PLAYER
  function removePlayer() {
    cells[playerPosition].classList.remove('player')
  }
  //REMOVE ENEMY
  function removeEnemy() {
    cells[enemyPosition].classList.remove('enemy')
  }



  //* START GAME

  function startGame() {
    createPlayer()
    createEnemy()
  }


  //RESET - REMOVE PLAYER AND RESET POSITION FOR NEXT START
  function reset() {  
    removePlayer()
    playerPosition = 390
    removeEnemy()
    enemyPosition = 10
  }
  
  //MOVE PLAYER - left key 37 - right key 39
  function movePlayer(e){
    
    const playerMoveLeft = playerPosition - 1
    const playerMoveRight = playerPosition + 1
    if (e.keyCode === 37) {
      removePlayer()
      playerPosition = playerMoveLeft
      createPlayer()
    } else if (e.keyCode === 39) {
      removePlayer()
      playerPosition = playerMoveRight
      createPlayer()
    } else {
      return false
    }
  } 
  

  //EVENTS
  resetButton.addEventListener('click', reset)
  startButton.addEventListener('click', startGame)
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
      cell.innerHTML = i
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