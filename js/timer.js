var time = 240
var minutes = document.getElementById('minutes')
function changeTime(e){
    time = e.target.value*60
    console.log('e target', e.target)
    console.log("new time: ", time)
    displayTime(time)
    document.getElementById('timer').value = time
    //nie wiem czemu tu nie moge zaadresowac this.time 
}
function displayTime(time){
    document.getElementById('timer').innerHTML = ("0"+ Math.floor(time/60)).slice(-2) + ':' + ("0"+time%60).slice(-2)
}
function minMaxtime(){
  let v = parseInt(this.value); 
  if (v < 1) this.value = 1;
  if (v > 60) this.value = 60;
}
function startTimer(endFunction){
    /* var time2 = document.getElementById('timer').value */
    

    this.time=getTimeFromTimer(this.time)
    var interval = setInterval(() => {
        this.time -= 1;
        displayTime(this.time);
        console.log(this.time)
        if (this.time <= 0) {
            clearInterval(interval);
            displayTime(getTimeFromTimer(this.time))
            endFunction()

        }
        
    }, 1000);
}
function getTimeFromTimer(time){
    time = document.getElementById('timer').value
    if(time === undefined || time <= 0){
        time = 240
    }
    console.log('time: ', time)
    return time
}
function createTimeInput(){
    //document.getElementById('mid-container').innerHTML += `<input type="number" id="minutes" class="timeSelect" placeholder="czas[m]">`
    document.getElementById('minutes').addEventListener('change', minMaxtime)
    document.getElementById('minutes').addEventListener('change', (changeTime))
    document.getElementById('minutes').style.background = 'white'
    document.getElementById('minutes').style.color = 'gray'
    if(document.getElementById('minutes').value){document.getElementById('minutes').value=''}
    
}
function removeTimeInput(){
    document.getElementById('minutes').removeEventListener('change', minMaxtime)
    document.getElementById('minutes').removeEventListener('change', (changeTime))
    document.getElementById('minutes').style.background = 'red'
    document.getElementById('minutes').style.color = 'white'
}
export default{changeTime, displayTime, minMaxtime, startTimer, time, createTimeInput, removeTimeInput}