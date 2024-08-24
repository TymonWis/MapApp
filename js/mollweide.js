const sqrt2 = Math.sqrt(2)
function solveNR(lat){
    let epsilon=1e-6
    if(Math.abs(lat) == Math.PI/2){
        return lat
    }
    let theta = lat
    let nexttheta = 0
    while(true){
        nexttheta = theta - (
            (2 * theta + Math.sin(2 * theta) - Math.PI * Math.sin(lat)) /
            (2 + 2 * Math.cos(2 * theta))
        )
        if (Math.abs(theta - nexttheta) < epsilon){
            break;
        }
        theta = nexttheta
    }

    return theta
}
function mollweide(lat, lon){
    var lon_0=0
    var R=375/sqrt2
    lat = lat * Math.PI / 180
    lon = lon * Math.PI / 180
    lon_0 = lon_0 * Math.PI / 180
    var theta = solveNR(lat)

    var geo_cords = {
        x: R * 2 * sqrt2 * (lon - lon_0) * Math.cos(theta) / Math.PI + 770,
        y: -1*R * sqrt2 * Math.sin(theta)+345
    }
    //console.log('x: ', R * 2 * sqrt2 * (lon - lon_0) * Math.cos(theta) / Math.PI + 750, "y: ", -1*R * sqrt2 * Math.sin(theta)+375)
    /* return (R * 2 * sqrt2 * (lon - lon_0) * Math.cos(theta) / Math.pi + 750,
            -1*R * sqrt2 * Math.sin(theta)+375) */
           return geo_cords
}
export default {mollweide}