var time = 10
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

            for(let i=0; i <=14; i++){
            if(document.getElementById(`DN${i}`).style.left === ''){
                console.log(i, "0 pkt")
            }
            else{
            
            console.log(i, "x: ", document.getElementById(`DN${i}`).style.left)
            console.log(i, "y: ", document.getElementById(`DN${i}`).style.top)
            }
            }
            displayTime(getTimeFromTimer(this.time))
            endFunction()

        }
        
    }, 1000);
}
function getTimeFromTimer(time){
    time = document.getElementById('timer').value
    if(time === undefined || time <= 0){
        time = 10
    }
    console.log('time: ', time)
    return time
}
function createTimeInput(){
    document.getElementById('mid-container').innerHTML += `<input type="number" id="minutes" class="timeSelect" placeholder="czas[m]">`
    document.getElementById('minutes').addEventListener('change', minMaxtime)
    document.getElementById('minutes').addEventListener('change', (changeTime))
}
export default{changeTime, displayTime, minMaxtime, startTimer, time, createTimeInput}