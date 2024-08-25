import DragAndDrop from "./dragAndDrop.js";
async function showMapSpots(){
    const data = await getMapSpotsFromJson()
    if(data){
        console.log('data in sms: ', data)
        for(let i =0; i<= 14; i++){
            const li = document.createElement('div')
            li.classList.add('list-item')
            const markup = `<span id="DN${i}"class="drag-number" draggable="true">${i+1}</span><span id="DT${i}">${data[Math.floor(Math.random() * (data.length-1))].DisplayName}</span>`
            li.innerHTML = markup
            li.addEventListener('dragstart', (e) => {
                DragAndDrop.drag(e)
            })
            document.getElementById('spots-container').appendChild(li)
            } 
        }
    }
async function getMapSpotsFromJson(){
    /* fetch("./src/wykazy/KL1FIZ.json")
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
    }) */
    try{
        const response = await fetch('./src/wykazy/KL1FIZ.json')
        if(!response.ok){
            throw new error(`network response was not ok`)
        } 
        const data1 = await response.json()
        console.log('data1: ', data1)
        return data1
        }catch(error){
            console.error('there has been an error with the catch operation', error)
    }
}
export default {getMapSpotsFromJson, showMapSpots}