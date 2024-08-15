import map from './map.js'
import getMapSpots from "./getMapSpots.js"
import startScreen from './startAppScreen.js'
import timer from './timer.js'
import startApp from './startEndTest.js'
document.getElementById('map-container').innerHTML += map.getMap()
startScreen.showModal()
document.getElementById('start-end').addEventListener('click', startApp.startApp)
document.getElementById('minutes').addEventListener('change', (timer.changeTime))