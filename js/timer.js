var time = 10
function changeTime(e){
    time = e.target.value*60
    console.log('e target', e.target)
    if(time > 3599){time = 3599}
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
    

    this.time = document.getElementById('timer').value
    if(this.time === undefined || this.time <= 0){
        this.time = 10
    }
    var interval = setInterval(() => {
        displayTime(this.time);
        this.time -= 1;
        console.log(this.time)
        if (this.time < 0) {
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
            endFunction()
        }
    }, 1000);
}
export default{changeTime, displayTime, minMaxtime, startTimer, time}