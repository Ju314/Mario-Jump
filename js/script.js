const jump = () => {
  let mario = document.querySelector('.mario')
  mario.classList.add('jump')

  setTimeout(() => {
    mario.classList.remove('jump')
  }, 500)
}

const loop = setInterval(() => {
  let pipe = document.querySelector('.pipe')
  let pipePosition = pipe.offsetLeft

  let mario = document.querySelector('.mario')
  let marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '')

  //console.log(marioPosition)

  if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
    pipe.style.animation = 'none'
    pipe.style.left = `${pipePosition}px`

    mario.style.animation = 'none'
    mario.style.bottom = `${marioPosition}px`
    mario.src = './imgs/game-over.png'
    mario.style.width = '75px'
    mario.style.marginLeft = '45px'

    clearInterval(loop)
  }
}, 10)

document.addEventListener('keydown', jump)
