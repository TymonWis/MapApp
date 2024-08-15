import showMapSpots from './getMapSpots.js'
import DragAndDrop from './dragAndDrop.js'
import timer from './timer.js'
function startApp(){
        showMapSpots.showMapSpots()
        document.getElementById('spots-container').style.minHeight = '207px' 
        document.getElementById('start-screen').remove()
        document.getElementById('minutes').remove()
        document.getElementById('map-container').addEventListener('drop', (e)=> {
            DragAndDrop.drop(e)
        })
        document.getElementById('map-container').addEventListener('dragover', DragAndDrop.allowDrop)
        timer.startTimer()
        /* document.getElementById('map-container').removeEventListener('dragover', DragAndDrop.allowDrop) */
}

export default{startApp}
