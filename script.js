//global variables

const doorImage1 = document.getElementById('door1') 
const doorImage2 = document.getElementById('door2') 
const doorImage3 = document.getElementById('door3') 

const botDoorPath = 'https://content.codecademy.com/projects/chore-door/images/robot.svg'
const beachDoorPath = 'https://content.codecademy.com/projects/chore-door/images/beach.svg'
const spaceDoorPath = 'https://content.codecademy.com/projects/chore-door/images/space.svg' 

const numClosedDoors = 3
let openDoor1
let openDoor2
let openDoor3

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
  doorImage1.src = openDoor1
}
doorImage2.onclick = () => {
  // alert('you clicked me!')
  doorImage2.src = openDoor2
}

doorImage3.onclick = () => {
  // alert('you clicked me!')
  doorImage3.src = openDoor3
}


randomChoreDoorGenerator()
