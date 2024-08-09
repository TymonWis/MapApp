import DragAndDrop from "./dragAndDrop.js";
import startScreen from "./startAppScreen.js"
const getMapSpots = {
    showMapSpots(){
            fetch("./src/map-spots.txt")
            .then(function (res) {
                /* console.log("AAA:", res.text()) */
                return res.text();
                
            })
            .then(function (data) {
                let mapObjectList = data.split(" \r\n")
                for(let i =0; i<= 14; i++){
        /* console.log('OBJ: ', mapObjectList[Math.floor(Math.random() * (mapObjectList.length-1))], " ", i) */
                    const li = document.createElement('div')
                    li.classList.add('list-item')
                    const markup = `<span id="DN${i}"class="drag-number" draggable="true">${i+1   }</span><span>${mapObjectList[Math.floor(Math.random() * (mapObjectList.length-1))]}</span>`
                    console.log("markup: ", markup)
                    li.innerHTML = markup
                    li.addEventListener('dragstart', (e) => {
                        DragAndDrop.drag(e)
                    })
                    console.log('li:', li)
                    document.getElementById('spots-container').appendChild(li)
                    /* startBtn.remove() */
                    
                }
            });
            document.getElementById('spots-container').style.minHeight = '207px' 
            document.getElementById('start-screen').remove()
            let time2 = document.getElementById('timer').value
            console.log('ss time', time2)
            var interval = setInterval(() => {
                startScreen.displayTime(time2);
                time2 -= 1;
              if (time2 < 0) {
                  clearInterval(interval);
              }
            }, 1000);
        }
    
}
export default getMapSpots