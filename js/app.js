import map from './map.js'
import getMapSpots from "./getMapSpots.js"
import startScreen from './startAppScreen.js'
import timer from './timer.js'
import startApp from './startEndTest.js'
import startEndTest from './startEndTest.js'
import modeSelectPopUp from './modeSelectPopUp.js'
document.getElementById('map-container').innerHTML += map.getMap()
startScreen.showModal()
startApp.changeButton()
timer.createTimeInput()
document.getElementById('mode-selector').addEventListener('click', modeSelectPopUp.showPopUp)
document.getElementById('github').addEventListener('click', ()=>{
    window.open('https://github.com/TymonWis/MapApp')
})