import showMapSpots from './getMapSpots.js'
import DragAndDrop from './dragAndDrop.js'
import timer from './timer.js'
import guide from './guide.js'
import mollweide from './mollweide.js'
import getMapSpots from './getMapSpots.js'
function startApp(){
        showMapSpots.showMapSpots()
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
async function finalCheck(){
    const data = await getMapSpots.getMapSpotsFromJson()
    if(data){
        console.log('data in finalcheck: ', data)
        for(let i=0; i <=14; i++){
            var cords = mollweide.mollweide(data[data.findIndex(x => x.DisplayName === document.getElementById(`DT${i}`).innerHTML)].Latitude, data[data.findIndex(x => x.DisplayName === document.getElementById(`DT${i}`).innerHTML)].Longitude)
            console.log(i, 'style right: ', cords.x)
            console.log(i, 'style top: ', cords.y)
            const check = document.createElement('div')
            check.classList.add('check')
            const markup = `<span id="check${i}" class="check-item">${i+1}</span>`
            check.innerHTML = markup
            check.style.left = cords.x + 'px'
            check.style.top = cords.y + 'px'
            document.getElementById('map-container').appendChild(check)

            if(document.getElementById(`DN${i}`).style.left === ''){
                console.log(i, "0 pkt")
                }
            else{
                console.log(i, "x: ", document.getElementById(`DN${i}`).style.left)
                console.log(i, "y: ", document.getElementById(`DN${i}`).style.top)
                }
            }
        }
}
export default{startApp, changeButton}
