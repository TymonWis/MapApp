var time = 240

function changeTime(e){
    time = e.target.value*60
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

function startTimer(endFunction){
    this.time=getTimeFromTimer(this.time)

    var interval = setInterval(() => {
        this.time -= 1;
        displayTime(this.time);

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
    return time
}

function createTimeInput(){
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
    if(document.getElementById('minutes').value){document.getElementById('minutes').value=''}
}

export default{changeTime, displayTime, minMaxtime, startTimer, time, createTimeInput, removeTimeInput}