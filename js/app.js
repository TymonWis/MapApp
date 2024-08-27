import maps from './maps.js'
import getMapSpots from "./getMapSpots.js"
import startScreen from './startAppScreen.js'
import timer from './timer.js'
import startApp from './startEndTest.js'
import startEndTest from './startEndTest.js'
import modeSelectPopUp from './modeSelectPopUp.js'
maps.getWM()
startScreen.showModal()
startApp.changeButton()
document.getElementById('mid-container').innerHTML += `<input type="number" id="minutes" class="timeSelect" placeholder="czas[m]">`
timer.createTimeInput()
document.getElementById('mode-selector').addEventListener('click', modeSelectPopUp.showPopUp)
document.getElementById('github').addEventListener('click', ()=>{
    window.open('https://github.com/TymonWis/MapApp')
})