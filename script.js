//global variables

const doorImage1 = document.getElementById('door1') 
const doorImage2 = document.getElementById('door2') 
const doorImage3 = document.getElementById('door3') 

const botDoorPath = 'https://content.codecademy.com/projects/chore-door/images/robot.svg'
const beachDoorPath = 'https://content.codecademy.com/projects/chore-door/images/beach.svg'

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
  doorImage3.src = beachDoorPath
}