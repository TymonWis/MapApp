const mapEZero = 14.07,
    mapNZero = 54.90,
    mapEFull = 24.27,
    mapNFull = 49.00 

    const degN = 700/Math.abs(mapNZero - mapNFull),
    degE = 740/Math.abs(mapEZero - mapEFull);
function translate(N, E){
    var obj = {
    x: Math.round((Math.abs(E - mapEZero) * degE)*100)/100 + 417,
    y: Math.round((Math.abs(N - mapNZero) * degN)*100)/100 +12
    }
    return obj
}

export default {translate}
    