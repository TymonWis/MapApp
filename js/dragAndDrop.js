const DragAndDrop = {
    drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
    console.log("-------------- text: ", ev.target.id, "----------")
},
    allowDrop(ev) {
    ev.preventDefault();
},
    drop(ev) {
    ev.preventDefault();
    console.log("pgX", ev.pageX)
    console.log("pgY", ev.pageY)
    
    const markup = document.createElement('span')
    markup.classList.add('after-drag-number')
    markup.innerHTML = document.getElementById(ev.dataTransfer.getData("text")).innerHTML 
    console.log('markup: ', markup)
    //console.log(markup, document.getElementById(ev.dataTransfer.getData("text")).innerHTML, `DT${parseFloat(document.getElementById(ev.dataTransfer.getData("text")).innerHTML)-1}`, document.getElementById(`DT${parseFloat(document.getElementById(ev.dataTransfer.getData("text")).innerHTML)-1}`).parentNode)
    //if(document.getElementById(`DT${parseFloat(document.getElementById(ev.dataTransfer.getData("text")).innerHTML)-1}`).parentNode.childElementCount == 2){}
    console.log('aa:',document.getElementById(`DT${parseFloat(document.getElementById(ev.dataTransfer.getData("text")).innerHTML)-1}`).parentNode.firstChild)
    if(!document.getElementById(`DT${parseFloat(document.getElementById(ev.dataTransfer.getData("text")).innerHTML)-1}`).parentNode.firstChild.classList.contains('after-drag-number')){
    document.getElementById(`DT${parseFloat(document.getElementById(ev.dataTransfer.getData("text")).innerHTML)-1}`).parentNode.insertBefore(markup, document.getElementById(`DT${parseFloat(document.getElementById(ev.dataTransfer.getData("text")).innerHTML)-1}`).parentNode.firstChild)
    }
    let newDiv = document.getElementById(ev.dataTransfer.getData("text"))
    newDiv.addEventListener('dragstart', (e) => {
        DragAndDrop.drag(e)
    })
/*     console.log("ev target: ", ev.target)
    console.log("ev parent: ", ev.target.parentNode) */
    newDiv.style.position = "absolute";
    newDiv.style.left = ev.pageX-document.getElementById('map-container').getBoundingClientRect().x+'px';
    newDiv.style.top = ev.pageY-document.getElementById('map-container').getBoundingClientRect().y+'px';
    console.log("left: ", newDiv.style.left, "top: ", newDiv.style.top)
    console.log("target", document.getElementById(ev.dataTransfer.getData("text")))
    document.getElementById('map-container').appendChild(newDiv);
    
},

}

export default DragAndDrop