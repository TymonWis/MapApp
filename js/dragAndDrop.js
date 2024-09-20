const DragAndDrop = {
    drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
},

    allowDrop(ev) {
    ev.preventDefault();
},

    drop(ev) {
    ev.preventDefault();
    const markup = document.createElement('span')
    markup.classList.add('after-drag-number')
    markup.innerHTML = document.getElementById(ev.dataTransfer.getData("text")).innerHTML 
    
    if(!document.getElementById(`DT${parseFloat(document.getElementById(ev.dataTransfer.getData("text")).innerHTML)-1}`).parentNode.firstChild.classList.contains('after-drag-number')){
    document.getElementById(`DT${parseFloat(document.getElementById(ev.dataTransfer.getData("text")).innerHTML)-1}`).parentNode.insertBefore(markup, document.getElementById(`DT${parseFloat(document.getElementById(ev.dataTransfer.getData("text")).innerHTML)-1}`).parentNode.firstChild)
    }

    const newDiv = document.getElementById(ev.dataTransfer.getData("text"))
    newDiv.addEventListener('dragstart', (e) => {
        DragAndDrop.drag(e)
    })
    newDiv.style.position = "absolute";
    newDiv.style.left = ev.pageX-document.getElementById('map-container').getBoundingClientRect().x-window.scrollX+'px';
    newDiv.style.top = ev.pageY-document.getElementById('map-container').getBoundingClientRect().y-window.scrollY+'px';
    document.getElementById('map-container').appendChild(newDiv);
},
    phoneDrag(ev){
        if(document.getElementsByClassName('phone-drag-element')[0] != undefined){
        console.log('phoneDrag works')
        document.getElementsByClassName('phone-drag-element')[0].classList.remove('phone-drag-element')
    }
        if(ev.target instanceof HTMLSpanElement){
            ev.target.parentNode.classList.add('phone-drag-element')
        }
        if(ev.target instanceof HTMLDivElement){
            ev.target.classList.add('phone-drag-element')
        }
    },
}

export default DragAndDrop