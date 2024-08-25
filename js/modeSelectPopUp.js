function getPopUp(){
    return `
    <div class="modeSelectPopUp">
        <div class="modeSelectPopUpContent">
            <div style="text-align: center">
            <span class="startTitle">WYBIERZ TRYB</span>
            </div>
            <div id="button-container" class="button-container flex-col">
                <div id="KL1FIZ" class="selected">
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
function showPopUp(){
    document.getElementById('pop-up-place').innerHTML = getPopUp()
    document.getElementById('button-container').addEventListener('click', function(e){
        console.log('I am clicking', e.target.parentNode)
        console.log('id:', e.target.id)
        /* lang = e.target.id
        console.log('lang', lang) */
        if(e.target.id === 'button-container'){
            return
        } else {
            if(e.target.id === ''){
            document.querySelector('div.selected').classList.remove('selected')
            document.getElementById(`${e.target.parentNode.id}`).classList.add('selected')
            }
            else{
            document.querySelector('div.selected').classList.remove('selected')
            document.getElementById(`${e.target.id}`).classList.add('selected')
            }
        }
        })
}
export default{showPopUp}