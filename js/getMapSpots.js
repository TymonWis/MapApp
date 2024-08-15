import DragAndDrop from "./dragAndDrop.js";
import startScreen from "./startAppScreen.js"
const getMapSpots = {
    showMapSpots(){
            fetch("./src/wykazy/KL1FIZ.txt")

            .then(function (res) {
                return res.text();
                
            })

            .then(function (data) {
                let mapObjectList = data.split(" \r\n")

                for(let i =0; i<= 14; i++){
                    const li = document.createElement('div')
                    li.classList.add('list-item')
                    const markup = `<span id="DN${i}"class="drag-number" draggable="true">${i+1   }</span><span>${mapObjectList[Math.floor(Math.random() * (mapObjectList.length-1))]}</span>`
                    li.innerHTML = markup
                    li.addEventListener('dragstart', (e) => {
                        DragAndDrop.drag(e)
                    })
                    console.log('li:', li)
                    document.getElementById('spots-container').appendChild(li)
                    
                }
            });

            document.getElementById('spots-container').style.minHeight = '207px' 
            document.getElementById('start-screen').remove()
            document.getElementById('minutes').remove()
            document.getElementById('map-container').addEventListener('dragover', DragAndDrop.allowDrop)
            
            let time2 = document.getElementById('timer').value
            if(time2 === undefined || time2 <= 0){
                time2 = 10
            }

            var interval = setInterval(() => {
                startScreen.displayTime(time2);
                time2 -= 1;

              if (time2 < 0) {
                  clearInterval(interval);

                  for(let i=0; i <=14; i++){
                    if(document.getElementById(`DN${i}`).style.left === ''){
                        console.log(i, "0 pkt")
                    }
                    else{
                    console.log(i, "x: ", document.getElementById(`DN${i}`).style.left)
                    console.log(i, "y: ", document.getElementById(`DN${i}`).style.top)
                    }
                  }
                  
                  document.getElementById('map-container').removeEventListener('dragover', DragAndDrop.allowDrop)
              }
            }, 1000);
        }
    
}
export default getMapSpots