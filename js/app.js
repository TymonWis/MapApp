import map from './map.js'
import getMapSpots from "./getMapSpots.js"
import DragAndDrop from './dragAndDrop.js'
import startScreen from './startAppScreen.js'



document.getElementById('map-container').addEventListener('drop', (e)=> {
    DragAndDrop.drop(e)
})
document.getElementById('map-container').innerHTML += map.getMap()
startScreen.showModal()
document.getElementById('start-end').addEventListener('click', getMapSpots.showMapSpots)
document.getElementById('minutes').addEventListener('change', (startScreen.changeTime))