const DragAndDrop = {
    drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
    console.log("text: ", ev.target.id)
},
    allowDrop(ev) {
    ev.preventDefault();
},
    drop(ev) {
    ev.preventDefault();
    console.log("pgX", ev.pageX)
    console.log("pgY", ev.pageY)
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