import DragAndDrop from "./dragAndDrop.js";

async function showMapSpots(wykaz){
    const data = await getMapSpotsFromJson(wykaz)

    if(data){
        for(let i =0; i<= 14; i++){
            const li = document.createElement('div')
            li.classList.add('list-item')
            const markup = `<span id="DN${i}"class="drag-number" draggable="true">${i+1}</span><span id="DT${i}">${data[Math.floor(Math.random() * (data.length-1))].DisplayName}</span>`
            li.innerHTML = markup
            li.addEventListener('dragstart', (e) => {
                DragAndDrop.drag(e)
            })
            li.addEventListener('touchstart', (e) => {
                DragAndDrop.removePhoneDraggedElement()
                DragAndDrop.phoneDrag(e) 
            })
            document.getElementById('spots-container').appendChild(li)
            } 
        }
    }

async function getMapSpotsFromJson(wykaz){
    try{
        const response = await fetch(`./src/wykazy/W${wykaz}.json`)
        if(!response.ok){
            throw new error(`network response was not ok`)
        } 
        const data1 = await response.json()
        return data1
        }catch(error){
            console.error('there has been an error with the catch operation', error)
    }
}
export default {getMapSpotsFromJson, showMapSpots}