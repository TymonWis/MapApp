startBtn = document.getElementById('start-end')
list = document.getElementById('spots-container')
let mapObjectList = ''

console.log("prev: ", mapObjectList)

startBtn.addEventListener('click', (e) => {
    console.log("e:", e)
    console.log("e id:", e.target.id)
    fetch("./src/map-spots.txt")
    .then(function (res) {
        /* console.log("AAA:", res.text()) */
        return res.text();
        
    })
    .then(function (data) {
        mapObjectList = data.split(" \r\n")
/* mapObjectList = mapObjectList.map(elem => elem.replace(" \r\n", "")); */
/* console.log("B:", data); */
        for(let i =0; i<= 14; i++){
/* console.log('OBJ: ', mapObjectList[Math.floor(Math.random() * (mapObjectList.length-1))], " ", i) */
            const li = document.createElement('div')
            li.classList.add('list-item')
            const markup = `<span id="DN${i}"class="drag-number" draggable="true" ondragstart="drag(event)">${i+1}</span><span>${mapObjectList[Math.floor(Math.random() * (mapObjectList.length-1))]}</span>`
            console.log("markup: ", markup)
            li.innerHTML = markup
            console.log('li:', li)
            list.appendChild(li)
            startBtn.remove()
        }
    });

})

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}
function allowDrop(ev) {
    ev.preventDefault();
}

function drop(ev) {
    ev.preventDefault();
/*     console.log("DROP: ", ev) */
    console.log("pgX", ev.pageX)
    console.log("pgY", ev.pageY)
    const newDiv = document.getElementById(ev.dataTransfer.getData("text"))
    newDiv.style.position = "absolute";
    newDiv.style.left = ev.pageX+'px';
    newDiv.style.top = ev.pageY+'px';
    ev.target.appendChild(newDiv);
}
console.log("after: ", mapObjectList)
