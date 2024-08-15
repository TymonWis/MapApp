import guide from "./guide.js"
import timer from "./timer.js"
function screenModel(){
    return `
    <div id="start-screen" class="startScreen">
        <div id="startScreenContent" class="startScreenContent">
            <span class="startTitle">SYMULATOR MAPKI</span>
            <div style="margin: 0 auto;">${guide.getGuide()}</div>
        </div>       
    </div>`
}
function showModal() {
    let place = document.getElementById('startAppScreenPlace')
    place.innerHTML = screenModel()
    document.getElementById('minutes').addEventListener('change', timer.minMaxtime)
}


export default {showModal}