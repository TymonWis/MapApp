import guide from "./guide.js"
function screenModel(){
    return `
    <div id="start-screen" class="startScreen">
        <div id="startScreenContent" class="startScreenContent">
            <span class="startTitle">SYMULATOR MAPKI</span>
            <div style="margin: 0 auto;">${guide.getGuide()}</div>
        </div>       
    </div>`
}
function showModal() {
    let place = document.getElementById('startAppScreenPlace')
    place.innerHTML = screenModel()
    document.getElementById('minutes').addEventListener('change', minMaxtime)
}
function changeTime(e){
    var time = e.target.value*60
    if(time > 3599){time = 3599}
    console.log("new time: ", time)
    displayTime(time)
    document.getElementById('timer').value = time
}
function displayTime(time){
    document.getElementById('timer').innerHTML = ("0"+ Math.floor(time/60)).slice(-2) + ':' + ("0"+time%60).slice(-2)
}
function minMaxtime(){
  let v = parseInt(this.value); 
  if (v < 1) this.value = 1;
  if (v > 60) this.value = 60;
}

export default {changeTime, showModal, displayTime}