import showMapSpots from './getMapSpots.js'
import DragAndDrop from './dragAndDrop.js'
import timer from './timer.js'
import guide from './guide.js'
import mollweide from './mollweide.js'
import getMapSpots from './getMapSpots.js'
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
    finalCheck()
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
function finalCheck(){
    for(let i=0; i <=14; i++){
        /* const check = document.createElement('div')
        dispatchEvent.classList.add('check')
        const markup = `<span id="check${i}" class="check-item">${i+1}</span>`
        check.innerHTML = markup
        document.getElementById('map-container').appendChild(check) */
        
        //newDiv.style.left = ev.pageX-document.getElementById('map-container').getBoundingClientRect().x+'px';
        //newDiv.style.top = ev.pageY-document.getElementById('map-container').getBoundingClientRect().y+'px';
        if(document.getElementById(`DN${i}`).style.left === ''){
            console.log(i, "0 pkt")
            //console.log('style top: ', showMapSpots.showMapObjectList()[showMapSpots.showMapObjectList().findIndex(x => x.DisplayName === document.getElementById(`DN${i}`))], showMapSpots.showMapObjectList()[showMapSpots.showMapObjectList().findIndex(x => x.DisplayName === document.getElementById(`DN${i}`))])
        }
        else{
        console.log(i, "x: ", document.getElementById(`DN${i}`).style.left)
        console.log(i, "y: ", document.getElementById(`DN${i}`).style.top)
        }
        }
}
export default{startApp, changeButton}
