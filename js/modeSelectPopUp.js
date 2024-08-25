function getPopUp(){
    return `
    <div class="modeSelectPopUp">
        <div class="modeSelectPopUpContent">
            <div style="text-align: center">
            <span class="startTitle">WYBIERZ TRYB</span>
            </div>
            <div id="button-container">
                <div class="flex-col">
                    <span style="margin: 0 auto">KLASA 1</span>
                    <span style="margin: 0 auto">MAPA POLITYCZNA</span>
                </div>
            <div>
        </div>       
    </div>`
}
function showPopUp(){
    document.getElementById('pop-up-place').innerHTML = getPopUp()
}
export default{showPopUp}