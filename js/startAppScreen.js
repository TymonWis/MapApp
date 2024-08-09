function screenModel(){
    return `
    <div id="start-screen" class="startScreen">
        <div id="startScreenContent" class="startScreenContent">
        <span class="startTitle">CZAS</span>
            <input type="number" id="minutes" class="timeSelect"placeholder="minuty" max="59"> 
            <div id="start-end" class="start-end-btn">START</div>
        </div>       
    </div>`
}
function showModal() {
    let place = document.getElementById('startAppScreenPlace')
    place.innerHTML = screenModel()
}
function changeTime(e){
    var time = e.target.value*60
    if(time > 3599){time = 3599}
    console.log("new time: ", time)
    displayTime(time)
    document.getElementById('timer').value = time
}
function displayTime(time){
    document.getElementById('timer').innerHTML = Math.floor(time/60) + ' : ' + time%60
}
/*     timer(){
    var timer = setInterval(function(){
        document.getElementById('timer').innerHTML='00:'+sec;
        sec--;
        if (sec < 0) {
            clearInterval(timer);
        }
    }, 1000);
} */

export default {screenModel, changeTime, showModal, displayTime}