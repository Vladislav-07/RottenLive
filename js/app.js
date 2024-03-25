// Инициализация игрока, кнопок уравления и координат игрока по всем сторонам

let player = document.querySelector('.player')

const rightButton = document.querySelector('.btnD')
const leftButton = document.querySelector('.btnA')
const topButton = document.querySelector('.btnW')
const bottomButton = document.querySelector('.btnS')

let rightPosition = 0
let leftPosition = 0
let topPosition = 0
let bottomPosition = 0

// Передвижение игрока впарово

rightButton.addEventListener('click', () => {
  rightPosition = rightPosition + 20
  leftPosition = leftPosition + 20

  player.classList.add('playerRight')

  player.classList.remove('playerLeft')
  player.classList.remove('playerTop')
  player.classList.remove('playerBottom')

  player.style.left = `${rightPosition}px`
})

// Передвижение игрока влево

leftButton.addEventListener('click', () => {
  leftPosition = leftPosition - 20
  rightPosition = rightPosition - 20

  player.classList.add('playerLeft')

  player.classList.remove('playerRight')
  player.classList.remove('playerTop')
  player.classList.remove('playerBottom')

  player.style.left = `${leftPosition}px`
})

// Передвижение игрока вверх

topButton.addEventListener('click', () => {
  topPosition = topPosition - 20
  bottomPosition = bottomPosition - 20

  player.classList.add('playerTop')

  player.classList.remove('playerLeft')
  player.classList.remove('playerRight')
  player.classList.remove('playerBottom')

  player.style.top = `${topPosition}px`
})

// Передвижение игрока вниз

bottomButton.addEventListener('click', () => {
  bottomPosition = bottomPosition + 20
  topPosition = topPosition + 20

  player.classList.add('playerBottom')

  player.classList.remove('playerLeft')
  player.classList.remove('playerRight')
  player.classList.remove('playerTop')

  player.style.top = `${bottomPosition}px`
})
