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
function startTimer(){
    var time2 = document.getElementById('timer').value
    if(time2 === undefined || time2 <= 0){
        time2 = 10
    }

    var interval = setInterval(() => {
        displayTime(time2);
        time2 -= 1;

        if (time2 < 0) {
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
        }
    }, 1000);
}
export default{changeTime, displayTime, minMaxtime, startTimer}