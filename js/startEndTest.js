import showMapSpots from './getMapSpots.js'
import DragAndDrop from './dragAndDrop.js'
import timer from './timer.js'
import guide from './guide.js'
function startApp(){
        showMapSpots.mapSpotsFromJson()
        document.getElementById('spots-container').style.minHeight = '207px' 
        if(document.getElementById('start-screen')){document.getElementById('start-screen').remove()}
        if(document.getElementById('minutes')){document.getElementById('minutes').remove()}
        document.getElementById('map-container').addEventListener('drop', (e)=> {
            DragAndDrop.drop(e)
        })
        document.getElementById('map-container').addEventListener('dragover', DragAndDrop.allowDrop)
        changeButton()
        timer.startTimer(endApp)
}


function endApp(){
    document.getElementById('map-container').removeEventListener('dragover', DragAndDrop.allowDrop)
    console.log('time: ', timer.time)
    changeButton()
    timer.createTimeInput()
}
function changeButton(){
    var button = document.getElementById('start-end')
    if(button.innerHTML === 'START'){
        button.innerHTML = 'KONIEC'
        /* button.style.background = 'red' */
        
        button.removeEventListener('click', startApp)
        button.addEventListener('click', ()=>{
            timer.time = 0
        })

        console.log('zmiana na koniec')
    }
    else {
        button.innerHTML = 'START'
        button.style.background = 'var(--btn-new)'
        button.addEventListener('click', startApp)
        console.log('zmiana na poczatek')
    }
}

export default{startApp, changeButton}
