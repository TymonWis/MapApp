import guide from "./guide.js"
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
    document.getElementById('startAppScreenPlace').innerHTML = screenModel()
}


export default {showModal}