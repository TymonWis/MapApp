var mode = document.getElementById('mode-selector').value
function getPopUp(){
    return `
    <div class="modeSelectPopUp" id="modeSelectPopUp">
        <div class="modeSelectPopUpContent">
            <div style="text-align: center">
            <span class="startTitle">WYBIERZ TRYB</span>
            </div>
            <div id="button-container" class="button-container flex-col">
                <div id="KL1FIZ">
                    <span>KLASA 1</span>
                    <span>MAPA FIZYCZNA</span>
                </div>
                <div id="KL2FIZ">
                    <span>KLASA 2</span>
                    <span>MAPA FIZYCZNA</span>
                </div>
                <div id="KL2POL">
                    <span>KLASA 2</span>
                    <span>MAPA POLITYCZNA</span>
                </div>
                <div id="KL3FIZ">
                    <span>KLASA 3</span>
                    <span>MAPA FIZYCZNA</span>
                </div>
                <div id="KL3POL">
                    <span>KLASA 3</span>
                    <span>MAPA POLITYCZNA</span>
                </div>
            </div>
        </div>       
    </div>`
}

function getMode(){
    /* console.log('mode: ', mode)
    if(mode == 2){return 'KL2FIZ'}
    else {
        if(mode == 3){return'KL2POL'}
        else {
            if(mode == 4){return'KL3FIZ'}
            else {
                if(mode == 5){return'KL3POL'}
                else{
                    return'KL1FIZ'
                }
            }
        }
    } */
   if(mode === undefined){
    return 'KL1FIZ'
   }
   return mode
}
function showPopUp(){
    document.getElementById('pop-up-place').innerHTML = getPopUp()
    console.log('getmode', getMode())
    document.getElementById(`${getMode()}`).classList.add('selected')
    document.getElementById('button-container').addEventListener('click', function(e){
        console.log('aaaaa')
        if(e.target.id === 'button-container'){
            return
        } else {
            if(e.target.id === ''){
            //document.querySelector('div.selected').classList.remove('selected')
            //document.getElementById(`${e.target.parentNode.id}`).classList.add('selected')
            mode = e.target.parentNode.id
            }
            else{
            //document.querySelector('div.selected').classList.remove('selected')
            //document.getElementById(`${e.target.id}`).classList.add('selected')
            mode = e.target.id
            }
            document.getElementById('modeSelectPopUp').remove()
        }
        })
}
export default{showPopUp, getMode}