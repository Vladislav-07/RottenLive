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

let fire = false
let pause = false

// Поворот/передвижение игрока по кнопкам на экране

rightButton.addEventListener('click', () => {
  // rightPosition = rightPosition + 20
  // leftPosition = leftPosition + 20

  if (fire === false) {
    player.classList.add('playerRight')

    player.classList.remove('playerLeft')
    player.classList.remove('playerTop')
    player.classList.remove('playerBottom')
  }

  // player.style.left = `${rightPosition}px`
})

leftButton.addEventListener('click', () => {
  // leftPosition = leftPosition - 20
  // rightPosition = rightPosition - 20

  if (fire === false) {
    player.classList.add('playerLeft')

    player.classList.remove('playerRight')
    player.classList.remove('playerTop')
    player.classList.remove('playerBottom')
  }

  // player.style.left = `${leftPosition}px`
})

topButton.addEventListener('click', () => {
  // topPosition = topPosition - 20
  // bottomPosition = bottomPosition - 20

  if (fire === false) {
    player.classList.add('playerTop')

    player.classList.remove('playerLeft')
    player.classList.remove('playerRight')
    player.classList.remove('playerBottom')
  }

  // player.style.top = `${topPosition}px`
})

bottomButton.addEventListener('click', () => {
  // bottomPosition = bottomPosition + 20
  // topPosition = topPosition + 20

  if (fire === false) {
    player.classList.add('playerBottom')

    player.classList.remove('playerLeft')
    player.classList.remove('playerRight')
    player.classList.remove('playerTop')
  }

  // player.style.top = `${bottomPosition}px`
})


// Поворот/передвижение игрока на W A S D на клавиатуре

document.addEventListener('keydown', (e) => {

  const code = e.code
  
  if (code === "KeyW") {
    // topPosition = topPosition - 10
    // bottomPosition = bottomPosition - 10

    if (pause === false) {
      if (fire === false) {
        player.classList.add('playerTop')
    
        player.classList.remove('playerLeft')
        player.classList.remove('playerRight')
        player.classList.remove('playerBottom')
      }
    }
  
    // player.style.top = `${topPosition}px`
  }

  else if (code === "KeyA") {
    // leftPosition = leftPosition - 10
    // rightPosition = rightPosition - 10

    if (pause === false) {
      if (fire === false) {
        player.classList.add('playerLeft')
    
        player.classList.remove('playerRight')
        player.classList.remove('playerTop')
        player.classList.remove('playerBottom')
      }
    }
  
    // player.style.left = `${leftPosition}px`
  }

  else if (code === "KeyS") {
    // bottomPosition = bottomPosition + 10
    // topPosition = topPosition + 10

    if (pause === false) {
      if (fire === false) {
        player.classList.add('playerBottom')
    
        player.classList.remove('playerLeft')
        player.classList.remove('playerRight')
        player.classList.remove('playerTop')
      }
    }
  
    // player.style.top = `${bottomPosition}px`
  }

  else if (code === "KeyD") {
    // rightPosition = rightPosition + 10
    // leftPosition = leftPosition + 10

    if (pause === false) {
      if (fire === false) {
        player.classList.add('playerRight')
    
        player.classList.remove('playerLeft')
        player.classList.remove('playerTop')
        player.classList.remove('playerBottom')
      }
    }
  
    // player.style.left = `${rightPosition}px`
  }

})

// Создание меню паузы

const pauseMenu = document.querySelector('.pauseMenu')

function pauseMenuOpen() {
  pause = true
  pauseMenu.style.display = 'block'
}

function pauseMenuClose() {
  pause = false
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
    fire = true
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

// Инициализация врагов

const zombiOne = document.querySelector('.zombi1')
const zombiTwo = document.querySelector('.zombi2')

// Позиции врагов

let positionZombiOne = 1500
let positionZombiTwo = -1500

// Функция передвижение 1го врага

function zombiOneMov() {
  if (pause === false) {
    if (positionZombiOne > 100) {
      positionZombiOne -= 100
      zombiOne.style.margin = '20px ' + `${positionZombiOne}px` + ' 0 0'
      if (positionZombiOne === 100) {-
        clearInterval(movOne)
        positionZombiOne = 1500
        zombiOne.style.margin = '20px ' + `${positionZombiOne}px` + ' 0 0'
        killCount += 1
        killCountText.innerHTML = 'Убито: ' + killCount
        movOne = setInterval(zombiOneMov, 2000)
        console.log('Зомби 1 дошел до вас!')
      }
    }
  }
}

// Функция передвижение 2го врага

function zombiTwoMov() {
  if (pause === false) {
    if (positionZombiTwo <= -200) {
      positionZombiTwo += 100
      zombiTwo.style.margin = '20px ' + `${positionZombiTwo}px` + ' 0 0'
      if (positionZombiTwo === -100) {
        clearInterval(movTwo)
        positionZombiTwo = -1500
        zombiTwo.style.margin = '20px ' + `${positionZombiTwo}px` + ' 0 0'
        killCount += 1
        killCountText.innerHTML = 'Убито: ' + killCount
        movTwo = setInterval(zombiTwoMov, 2000)
        console.log('Зомби 2 дошел до вас!')
      }
    } 
  }
}

// Запуск функций передвижения врагов каждые 2 секунды (1000 = 1 секунде)

let movOne = setInterval(zombiOneMov, 2000)
let movTwo = setInterval(zombiTwoMov, 2000)

// Функция возвращающая пулю на исходное место (в автомат) и определяющая столкновение пули с врагом

function bulletBase() {

  let zombiOnePos = zombiOne.getBoundingClientRect();
  let zombiTwoPos = zombiTwo.getBoundingClientRect();
  let bulletPos = bullet.getBoundingClientRect();

  // console.log('Позиция зомби 1: ' + Math.abs(zombiOnePos.top), Math.abs(zombiOnePos.right), Math.abs(zombiOnePos.bottom), Math.abs(zombiOnePos.left))
  // console.log('Позиция зомби 2: ' + Math.abs(zombiTwoPos.top), Math.abs(zombiTwoPos.right), Math.abs(zombiTwoPos.bottom), Math.abs(zombiTwoPos.left))
  // console.log('Позиция пули: ' + Math.abs(bulletPos.top), Math.abs(bulletPos.right), Math.abs(bulletPos.bottom), Math.abs(bulletPos.left))

  if (Math.abs(bulletPos.right) && Math.abs(bulletPos.left) < Math.abs(zombiOnePos.right) && Math.abs(zombiOnePos.left)) {
    console.log('пуля прошла 1го зомби')
    zombiOne.style.display = 'none'
    positionZombiOne = 1500
    zombiOne.style.margin = '20px ' + `${positionZombiOne}px` + ' 0 0'
    clearInterval(movOne)
    killCount += 1
    killCountText.innerHTML = 'Убито: ' + killCount
    setTimeout(zombiRegenerationOne, 3000)
  }

  if (Math.abs(bulletPos.right) && Math.abs(bulletPos.left) > Math.abs(zombiTwoPos.right) && Math.abs(zombiTwoPos.left)) {
    console.log('пуля прошла 2го зомби')
    zombiTwo.style.display = 'none'
    positionZombiTwo = -1500
    zombiTwo.style.margin = '20px ' + `${positionZombiTwo}px` + ' 0 0'
    clearInterval(movTwo)
    killCount += 1
    killCountText.innerHTML = 'Убито: ' + killCount
    setTimeout(zombiRegenerationTwo, 3000)
  }

  bullet.style.transition = 'none'
  bulletPosition = -100
  bullet.style.left = `${bulletPosition}px`

  fire = false
}

// Функции возраждающие врагов на исхожных местах

function zombiRegenerationOne() {
  zombiOne.style.display = 'block'
  movOne = setInterval(zombiOneMov, 2000)
}

function zombiRegenerationTwo() {
  zombiTwo.style.display = 'block'
  movTwo = setInterval(zombiTwoMov, 2000)
}

// Функция перезарядки обоймы

btnRecharge.addEventListener('click', () => {
  bulletCount = 5
  bulletCountText.innerHTML = 'Патрон: ' + bulletCount
})
