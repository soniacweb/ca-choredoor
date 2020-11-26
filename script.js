//global variables

const doorImage1 = document.getElementById('door1') 
const doorImage2 = document.getElementById('door2') 
const doorImage3 = document.getElementById('door3') 

const botDoorPath = 'https://content.codecademy.com/projects/chore-door/images/robot.svg'
const beachDoorPath = 'https://content.codecademy.com/projects/chore-door/images/beach.svg'
const spaceDoorPath = 'https://content.codecademy.com/projects/chore-door/images/space.svg' 

const numClosedDoors = 3;
const openDoor1;
const openDoor2;
const openDoor3;


const randomChoreDoorGenerator = () => {
let choreDoor = Math.floor(Math.random() * numClosedDoors + 1)
if (choreDoor === 1) {
  openDoor1 = botDoorPath
} else if (choreDoor === 2) {
  openDoor2 = botDoorPath
} else (choreDoor === 3) {
  openDoor3 = botDoorPath
}

}
randomChoreDoorGenerator()

doorImage1.onclick = () => {
  // alert('you clicked me!')
  doorImage1.src = botDoorPath
}
doorImage2.onclick = () => {
  // alert('you clicked me!')
  doorImage2.src = beachDoorPath
}

doorImage3.onclick = () => {
  // alert('you clicked me!')
  doorImage3.src = spaceDoorPath
}

