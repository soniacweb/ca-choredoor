//global variables

const doorImage1 = document.getElementById('door1') 
const doorImage2 = document.getElementById('door2') 
const doorImage3 = document.getElementById('door3') 
const startButton = document.getElementById('start') 

const botDoorPath = 'https://content.codecademy.com/projects/chore-door/images/robot.svg'
const beachDoorPath = 'https://content.codecademy.com/projects/chore-door/images/beach.svg'
const spaceDoorPath = 'https://content.codecademy.com/projects/chore-door/images/space.svg' 
const closedDoorPath = 'https://content.codecademy.com/projects/chore-door/images/closed_door.svg'

let numClosedDoors = 3
let openDoor1
let openDoor2
let openDoor3
let currentlyPlaying = true

const choreDoor = Math.floor(Math.random() * numClosedDoors + 1)

const randomChoreDoorGenerator = () => {
  if (choreDoor === 1) {
    openDoor1 = botDoorPath
    openDoor2 = beachDoorPath
    openDoor3 = spaceDoorPath
  } else if (choreDoor === 2) {
    openDoor2 = botDoorPath
    openDoor3 = beachDoorPath
    openDoor1 = spaceDoorPath
  } else if (choreDoor === 3) {
    openDoor3 = botDoorPath
    openDoor2 = spaceDoorPath
    openDoor1 = beachDoorPath
  }
}

doorImage1.onclick = () => {
  // alert('you clicked me!')
  if (currentlyPlaying === true && !isClicked(doorImage1)) {
    doorImage1.src = openDoor1
    playDoor(doorImage1)
  }
}

doorImage2.onclick = () => {
  if (currentlyPlaying === true && !isClicked(doorImage2)) {
    doorImage2.src = openDoor2
    playDoor(doorImage2)
  }
}

doorImage3.onclick = () => {
  if (currentlyPlaying === true && !isClicked(doorImage3)) {
    doorImage3.src = openDoor3
    playDoor(doorImage3)
  }
}

startButton.onclick = () => {
  startRound()
}

//reset function
const startRound = () => {
  // All doorImage.src values
  // numClosedDoors variable
  // startButton.innerHTML variable
  // currentlyPlaying variable
  if(!currentlyPlaying) {
    window.location.reload()
  }
}


const gameOver = (status) => {
  currentlyPlaying = false
  if (status === 'win') {
    startButton.innerHTML = 'You win! Play again?'
  } else return startButton.innerHTML = 'Game over! Play again?'
  
}

const isBot = (door) => {
  if (door.src === botDoorPath) {
    return true
  } else return false
}

//checking to see if the door has been clicked or not
const isClicked = door => door.src === closedDoorPath ? false : true


const playDoor = (door) => {
  numClosedDoors--
  if (numClosedDoors === 0) {
    gameOver('win')
  } else if (isBot(door)) {
    gameOver('lose')
  } 
}

randomChoreDoorGenerator()
// startRound()