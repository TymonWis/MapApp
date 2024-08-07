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
            const li = document.createElement('li')
            li.classList.add('list-item')
            const markup = `<span>${mapObjectList[Math.floor(Math.random() * (mapObjectList.length-1))]}</span>`
            console.log("markup: ", markup)
            li.innerHTML = markup
            console.log('li:', li)
            list.appendChild(li)
        }
    });

})

console.log("after: ", mapObjectList)
