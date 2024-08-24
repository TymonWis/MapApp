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
            //console.log(i+1, 'style right: ', cords.x)
            //console.log(i, 'style top: ', cords.y)
            const check = document.createElement('div')
            check.classList.add('check')
            const markup = `<span id="check${i}" class="check-item">${i+1}</span>`
            check.innerHTML = markup
            check.style.left = cords.x + 'px'
            check.style.top = cords.y + 'px'
            document.getElementById('map-container').appendChild(check)

            if(document.getElementById(`DN${i}`).style.left === ''){
                console.log(i+1, "0 pkt")
                }
            else{
                console.log(i+1, 'x diff: ', Math.abs((cords.x + 35) - (parseFloat((document.getElementById(`DN${i}`).style.left).replace('px', '')))))
                console.log(i+1, 'y diff: ', Math.abs((cords.y + 20) - (parseFloat((document.getElementById(`DN${i}`).style.top).replace('px', '')) +15)))
                console.log(i+1, 'r diff: ', Math.sqrt(Math.pow((cords.x + 35) - (parseFloat((document.getElementById(`DN${i}`).style.left).replace('px', ''))), 2) + Math.pow((cords.y + 20) - (parseFloat((document.getElementById(`DN${i}`).style.top).replace('px', '')) +15), 2)))
                if(Math.sqrt(Math.pow((cords.x + 35) - (parseFloat((document.getElementById(`DN${i}`).style.left).replace('px', ''))), 2) + Math.pow((cords.y + 20) - (parseFloat((document.getElementById(`DN${i}`).style.top).replace('px', '')) +15), 2)) <50){
                    
                    document.getElementById(`check${i}`).style.background = 'rgba(38, 254, 135, 0.3)'
                    document.getElementById(`check${i}`).parentNode.style.background = 'rgba(18, 224, 11, 0.12)'
                }
                
                else{
                    if(Math.sqrt(Math.pow((cords.x + 35) - (parseFloat((document.getElementById(`DN${i}`).style.left).replace('px', ''))), 2) + Math.pow((cords.y + 20) - (parseFloat((document.getElementById(`DN${i}`).style.top).replace('px', '')) +15), 2)) < 65)
                        {
                            document.getElementById(`check${i}`).style.background = 'rgb(226 249 0 / 50%)'
                            document.getElementById(`check${i}`).parentNode.style.background = 'rgb(205 212 29 / 30%)'
                        }
                        else{
                    console.log(i, 'miss')
                            }
                    }
                }
            }
        }
}
export default{startApp, changeButton}
