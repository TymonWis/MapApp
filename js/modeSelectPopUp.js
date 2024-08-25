function getPopUp(){
    return `
    <div class="modeSelectPopUp">
        <div class="modeSelectPopUpContent">
            <div style="text-align: center">
            <span class="startTitle">WYBIERZ TRYB</span>
            </div>
            <div id="button-container" class="button-container flex-col">
                <div class="selected">
                    <span>KLASA 1</span>
                    <span>MAPA FIZYCZNA</span>
                </div>
                <div>
                    <span>KLASA 2</span>
                    <span>MAPA FIZYCZNA</span>
                </div>
                <div>
                    <span>KLASA 2</span>
                    <span>MAPA POLITYCZNA</span>
                </div>
                <div>
                    <span>KLASA 3</span>
                    <span>MAPA FIZYCZNA</span>
                </div>
                <div>
                    <span>KLASA 3</span>
                    <span>MAPA POLITYCZNA</span>
                </div>
            </div>
        </div>       
    </div>`
}
function showPopUp(){
    document.getElementById('pop-up-place').innerHTML = getPopUp()
  //  document.querySelector('button-container')
}
export default{showPopUp}