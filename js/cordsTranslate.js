const mapEZero = 14.07, //X-axis
    mapNZero = 54.90, //Y-axis
    mapEFull = 24.27,//X-axis
    mapNFull = 49.00 //Y-axis

    const degN = 710/Math.abs(mapNZero - mapNFull),
    degE = 750/Math.abs(mapEZero - mapEFull);
function translate(N, E){
    var obj = {
    x: Math.round((Math.abs(E - mapEZero) * degE)*100)/100 + 417,
    y: Math.round((Math.abs(N - mapNZero) * degN)*100)/100 +12
    }
    console.log('PLobj: ', obj)
    return obj
}

export default {translate}
    