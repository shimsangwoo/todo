// console.log(clock...)

const clock = document.querySelector('.clock')

function getTime() {
  const now = new Date()
  // console.log(now)
  const hour = now.getHours()
  const min = now.getMinutes()
  const sec = now.getSeconds()

  const h = `${hour < 10 ? `0${hour}` : `${hour}`}`
  const m = `${min < 10 ? `0${min}` : `${min}`}`
  const s = `${sec < 10 ? `0${sec}` : `${sec}`}`

  clock.innerText = `${h}:${m}:${s}`
}

function init() {
  getTime()
  setInterval(getTime, 1000)
}

init()
