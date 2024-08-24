import DragAndDrop from "./dragAndDrop.js";
function showMapSpots(){
        fetch("./src/wykazy/KL1FIZ.txt")

        .then(function (res) {
            return res.text();
            
        })

        .then(function (data) {
            let mapObjectList = data.split(" \r\n")

            document.getElementById('spots-container').innerHTML = ''
            document.querySelectorAll('.drag-number').forEach(e => e.remove());
            
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
    }
async function mapSpotsFromJson(){
    fetch("./src/wykazy/KL1FIZ.json")
    .then(response => response.json())
    .then(data => {
        let mapObjectList = data
        console.log("data: ", mapObjectList)
        document.getElementById('spots-container').innerHTML = ''
        document.querySelectorAll('.drag-number').forEach(e => e.remove());            
        for(let i =0; i<= 14; i++){
                const li = document.createElement('div')
                li.classList.add('list-item')
                const markup = `<span id="DN${i}"class="drag-number" draggable="true">${i+1   }</span><span>${mapObjectList[Math.floor(Math.random() * (mapObjectList.length-1))].DisplayName}</span>`
                li.innerHTML = markup
                li.addEventListener('dragstart', (e) => {
                    DragAndDrop.drag(e)
                })
                document.getElementById('spots-container').appendChild(li)
        } 
    })
}
export default {mapSpotsFromJson}