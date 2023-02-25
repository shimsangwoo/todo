// console.log('weather....')

const weather = document.querySelector('.weather')
const APP_ID = '298d7bf115b9866e6a2bfda89be82d6'

// function geoError(position){
//     console.log('위치정보를 허용하지 않습니다.')
// }

// function getWeather(lat, lon){
//     const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${APP_ID}&units=metric`
//     fetch(url).then(res =>res.JSON()).then(data => weather.innerText =`${data.main.temp}℃&${data.name}`)
//         const name

// }

// function saveCoord(coods){
//     localStorage.setItem('coords', JSON.stringify(coords))
// }

// function geoSuccess(position){
//     console.log(position)
//     const lat = position.coords.latitude
//     const lon = position.coords.longiatude
//     console.log(lat.lon)
//     const coords{
//         latitde, lat
//         longitae, lon
//     }
//     saveCoord(coords)

// }

// function askCoords() {
//     navigator.geolocation.getCurrentPosition(geoSuccess, geoError) => {
//     // navigator.geolocation.getCurrentPosition((position) => {
//     // doSomething(position.coords.latitude, position.coords.longitude)
//     // console.log(position.coords.latitude),console.log(position.coords.longitude)
//   })
// }

// function loadCoods(){
//     const localCoords = localStorage.getItem('coords')
//     console.log(localCoords)

//     if(loadCoods === null){
//         askCoords()
//     }else {
//         cost parseredCoors = JSON.parse(localCoords)
//         getWeather(lacalCoords.latitude, lacalCoords.longiatude)
//     }
//     }
// }

// function init() {
//     loadCoods()
//     askCoords()
// }

// init()

function getWeather(lat, lon) {
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APP_ID}&units=metric`
  fetch(url)
    .then(res => res.json())
    .then(data => (weather.innerText = `${data.main.temp}℃ ${data.name}`))
}

function saveCoords(coords) {
  localStorage.setItem('coords', JSON.stringify(coords))
}

function geoSucces(position) {
  console.log(position)

  const lat = position.coords.latitude
  const lon = position.coords.longitude

  const coords = {
    latitude: lat,
    longitude: lon,
  }
  saveCoords(coords)
  getWeather(lat, lon)
}

function geoError() {
  console.log('위치 정보를 허용하지 않았습니다.')
}

function askCoords() {
  navigator.geolocation.getCurrentPosition(geoSucces, geoError)
}

function loadCoords() {
  const localCoords = localStorage.getItem('coords')

  if (localCoords === null) {
    askCoords()
  } else {
    const parsedCoords = JSON.parse(localCoords)
    getWeather(parsedCoords.latitude, parsedCoords.longitude)
  }
}

function init() {
  loadCoords()
}

init()
