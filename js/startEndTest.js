import showMapSpots from './getMapSpots.js'
import DragAndDrop from './dragAndDrop.js'
import timer from './timer.js'
import guide from './guide.js'
import mollweide from './mollweide.js'
import getMapSpots from './getMapSpots.js'
import modeSelectPopUp from './modeSelectPopUp.js'
import maps from './maps.js'
import cordsTranslate from './cordsTranslate.js'

function startApp(){
        if(modeSelectPopUp.getMode() == 'KL3POL' || modeSelectPopUp.getMode() == 'KL3FIZ'){
            maps.getPL()
        }
        else{
            maps.getWM()
        }
        document.getElementById('spots-container').innerHTML = ''
        document.querySelectorAll('.drag-number').forEach(e => e.remove());
        document.querySelectorAll('.check').forEach(e => e.remove());

        
        showMapSpots.showMapSpots(`${modeSelectPopUp.getMode()}`)
        document.getElementById('spots-container').style.minHeight = '207px' 
        document.getElementById('mode-selector').style.background = 'red'
        document.getElementById('mode-selector').removeEventListener('click', modeSelectPopUp.showPopUp)
        if(document.getElementById('start-screen')){document.getElementById('start-screen').remove()}
        timer.removeTimeInput()
        if(document.getElementById('score')){document.getElementById('score').remove()
            document.getElementById('score-place').style.padding = ''
            document.getElementById('score-place').style.border = ''
        }
        document.getElementById('map-container').addEventListener('drop', (e)=> {
            DragAndDrop.drop(e)
        })
        document.getElementById('map-container').addEventListener('dragover', DragAndDrop.allowDrop)
        changeButton()
        timer.startTimer(endApp)
}

function endApp(){
    document.getElementById('map-container').removeEventListener('dragover', DragAndDrop.allowDrop)
    changeButton()
    timer.createTimeInput()
    finalCheck()
    document.getElementById('mode-selector').style.background = 'var(--btn-new)'
    document.getElementById('mode-selector').addEventListener('click', modeSelectPopUp.showPopUp)
}

function changeButton(){
    var button = document.getElementById('start-end')

    if(button.innerHTML === 'START'){
        button.innerHTML = 'KONIEC'
        button.removeEventListener('click', startApp)
        button.addEventListener('click', ()=>{
            timer.time = 0
        })
    }

    else {
        button.innerHTML = 'START'
        button.style.background = 'var(--btn-new)'
        button.addEventListener('click', startApp)
    }
}

async function finalCheck(){
    const data = await getMapSpots.getMapSpotsFromJson(`${modeSelectPopUp.getMode()}`)
    if(data){
        var score = 0

        for(let i=0; i <=14; i++){
            cordsTranslate.translate(data[data.findIndex(x => x.DisplayName === document.getElementById(`DT${i}`).innerHTML)].Latitude, data[data.findIndex(x => x.DisplayName === document.getElementById(`DT${i}`).innerHTML)].Longitude)
            if(modeSelectPopUp.getMode() == 'KL3POL' || modeSelectPopUp.getMode() == 'KL3FIZ'){
            var cords = cordsTranslate.translate(data[data.findIndex(x => x.DisplayName === document.getElementById(`DT${i}`).innerHTML)].Latitude, data[data.findIndex(x => x.DisplayName === document.getElementById(`DT${i}`).innerHTML)].Longitude)
            }
            else{var cords = mollweide.mollweide(data[data.findIndex(x => x.DisplayName === document.getElementById(`DT${i}`).innerHTML)].Latitude, data[data.findIndex(x => x.DisplayName === document.getElementById(`DT${i}`).innerHTML)].Longitude)}

            const check = document.createElement('div')
            check.classList.add('check')
            const markup = `<span id="check${i}" class="check-item">${i+1}</span>`
            check.innerHTML = markup
            check.style.left = cords.x + 'px'
            check.style.top = cords.y + 'px'
            document.getElementById('map-container').appendChild(check)

            if(Math.sqrt(Math.pow((cords.x) - (parseFloat((document.getElementById(`DN${i}`).style.left).replace('px', ''))), 2) + Math.pow((cords.y) - (parseFloat((document.getElementById(`DN${i}`).style.top).replace('px', ''))), 2)) <40)
                {
                score++
                document.getElementById(`check${i}`).parentNode.style.background = 'rgba(18, 224, 11, 0.3)'
                document.getElementById(`DT${i}`).parentNode.style.background = 'rgba(18, 224, 11, 0.1)'
                }
            
            else
                {
                if(Math.sqrt(Math.pow((cords.x + 35) - (parseFloat((document.getElementById(`DN${i}`).style.left).replace('px', ''))), 2) + Math.pow((cords.y + 20) - (parseFloat((document.getElementById(`DN${i}`).style.top).replace('px', '')) +15), 2)) < 65)
                    {
                        score += 0.5
                        document.getElementById(`check${i}`).parentNode.style.background = 'rgb(205 212 29 / 30%)'
                        document.getElementById(`DT${i}`).parentNode.style.background = 'rgb(242 252 0 / 30%)'
                    }

                else{
                    if(document.getElementById(`DN${i}`).style.left != ''){
                        document.getElementById(`DT${i}`).parentNode.style.background = 'rgb(252 3 3 / 30%)'
                        }
                    }   
                }
            }
            document.getElementById('score-place').innerHTML = `<span class="score" id="score">${score} / 15</span>`
            document.getElementById('score-place').style.padding = '20px'
            document.getElementById('score-place').style.border = '1px red solid'
        }
}

export default{startApp, changeButton}