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

// Передвижение игрока по кнопкам на экране

rightButton.addEventListener('click', () => {
  rightPosition = rightPosition + 20
  leftPosition = leftPosition + 20

  player.classList.add('playerRight')

  player.classList.remove('playerLeft')
  player.classList.remove('playerTop')
  player.classList.remove('playerBottom')

  player.style.left = `${rightPosition}px`
})

leftButton.addEventListener('click', () => {
  leftPosition = leftPosition - 20
  rightPosition = rightPosition - 20

  player.classList.add('playerLeft')

  player.classList.remove('playerRight')
  player.classList.remove('playerTop')
  player.classList.remove('playerBottom')

  player.style.left = `${leftPosition}px`
})

topButton.addEventListener('click', () => {
  topPosition = topPosition - 20
  bottomPosition = bottomPosition - 20

  player.classList.add('playerTop')

  player.classList.remove('playerLeft')
  player.classList.remove('playerRight')
  player.classList.remove('playerBottom')

  player.style.top = `${topPosition}px`
})

bottomButton.addEventListener('click', () => {
  bottomPosition = bottomPosition + 20
  topPosition = topPosition + 20

  player.classList.add('playerBottom')

  player.classList.remove('playerLeft')
  player.classList.remove('playerRight')
  player.classList.remove('playerTop')

  player.style.top = `${bottomPosition}px`
})


// Передвижение игрока на W A S D на клавиатуре
document.addEventListener('keydown', (e) => {

  const code = e.code
  
  if (code === "KeyW") {
    topPosition = topPosition - 10
    bottomPosition = bottomPosition - 10
  
    player.classList.add('playerTop')
  
    player.classList.remove('playerLeft')
    player.classList.remove('playerRight')
    player.classList.remove('playerBottom')
  
    player.style.top = `${topPosition}px`
  }

  else if (code === "KeyA") {
    leftPosition = leftPosition - 10
    rightPosition = rightPosition - 10
  
    player.classList.add('playerLeft')
  
    player.classList.remove('playerRight')
    player.classList.remove('playerTop')
    player.classList.remove('playerBottom')
  
    player.style.left = `${leftPosition}px`
  }

  else if (code === "KeyS") {
    bottomPosition = bottomPosition + 10
    topPosition = topPosition + 10
  
    player.classList.add('playerBottom')
  
    player.classList.remove('playerLeft')
    player.classList.remove('playerRight')
    player.classList.remove('playerTop')
  
    player.style.top = `${bottomPosition}px`
  }

  else if (code === "KeyD") {
    rightPosition = rightPosition + 10
    leftPosition = leftPosition + 10
  
    player.classList.add('playerRight')
  
    player.classList.remove('playerLeft')
    player.classList.remove('playerTop')
    player.classList.remove('playerBottom')
  
    player.style.left = `${rightPosition}px`
  }

})

// Создание меню паузы

const pauseMenu = document.querySelector('.pauseMenu')

function pauseMenuOpen() {
  pauseMenu.style.display = 'block'
}

function pauseMenuClose() {
  pauseMenu.style.display = 'none'
}

// Инициализация пули, кнопки атаки и перезарядки

const bullet = document.querySelector('.bullet')
const btnAtak = document.querySelector('.btn-atak')
const btnRecharge = document.querySelector('.btn-recharge')

// Значения переменных с позицией пули, значениями счетчика патрон и убийств

let bulletPosition = -100

let bulletCount = 5
let killCount = 0

// Инициализация полей для вывода показателей счетчиков 

let bulletCountText = document.querySelector('.countBullet')
let killCountText = document.querySelector('.countKill')

// Система выстрела

btnAtak.addEventListener('click', () => {
  if (bulletCount > 0) {
    bullet.style.transition = 'all 2s'
    bulletPosition += 1000
    bullet.style.left = `${bulletPosition}px`
    bulletCount = bulletCount - 1
    bulletCountText.innerHTML = 'Патрон: ' + bulletCount
    setTimeout(bulletBase, 2000)
  }
  else {
    alert('У вас нет патрон, перезарядитесь!')
  }
})

// Инициализация врага

const zombi = document.querySelector('.zombi')

// Функция возвращающая пулю на исходное место (в автомат) и определяющая столкновение пули с врагом

function bulletBase() {

  let zombiPos = zombi.getBoundingClientRect();
  // console.log(Math.abs(zombiPos.top), Math.abs(zombiPos.right), Math.abs(zombiPos.bottom), Math.abs(zombiPos.left))

  let bulletPos = bullet.getBoundingClientRect();
  // console.log(Math.abs(bulletPos.top), Math.abs(bulletPos.right), Math.abs(bulletPos.bottom), Math.abs(bulletPos.left))

  if (Math.abs(zombiPos.right) && Math.abs(zombiPos.left) > Math.abs(bulletPos.right) && Math.abs(bulletPos.left)) {
    if (Math.abs(zombiPos.top) <= Math.abs(bulletPos.top)) {
      if (Math.abs(zombiPos.bottom) > Math.abs(bulletPos.bottom)) {
        killCount += 1
        killCountText.innerHTML = 'Убито: ' + killCount
        console.log('Пуля прошла зомби')
      }
    }
  }

  if (zombiPos.right && zombiPos.left < bulletPos.right && bulletPos.left) {
    if (Math.abs(zombiPos.top) >= Math.abs(bulletPos.top)) {
      if (Math.abs(zombiPos.bottom) < Math.abs(bulletPos.bottom)) {
        console.log('Пуля НЕ прошла зомби')
      }
    }
  }

  bullet.style.transition = 'none'
  bulletPosition = -100
  bullet.style.left = `${bulletPosition}px`
}

// Функция перезарядки обоймы

btnRecharge.addEventListener('click', () => {
  bulletCount = 5
  bulletCountText.innerHTML = 'Патрон: ' + bulletCount
})
