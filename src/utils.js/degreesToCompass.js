import "./wind.css"

let getDirectionIcon = (direction) => {
 switch(direction) {
    case 'N': 
        return <i className="wi wi-wind wi-towards-n" style={{fontSize: '25px'}}></i>
    case 'NNE': 
        return <i className="wi wi-wind wi-towards-nne" style={{fontSize: '25px'}}></i>
    case 'NE': 
        return <i className="wi wi-wind wi-towards-ne" style={{fontSize: '25px'}}></i>
    case 'ENE': 
        return <i className="wi wi-wind wi-towards-ene" style={{fontSize: '25px'}}></i>
    case 'E':
        return <i className="wi wi-wind wi-towards-e" style={{fontSize: '25px'}}></i>
    case 'ESE': 
        return <i className="wi wi-wind wi-towards-ese" style={{fontSize: '25px'}}></i>
    case 'SE': 
        return <i className="wi wi-wind wi-towards-se" style={{fontSize: '25px'}}></i>
    case 'SSE': 
        return <i className="wi wi-wind wi-towards-sse" style={{fontSize: '25px'}}></i>
    case 'S':
        return <i className="wi wi-wind wi-towards-s" style={{fontSize: '25px'}}></i>
    case 'SSW': 
        return <i className="wi wi-wind wi-towards-ssw" style={{fontSize: '25px'}}></i>
    case 'SW': 
        return <i className="wi wi-wind wi-towards-sw" style={{fontSize: '25px'}}></i>
    case 'WSW': 
        return <i className="wi wi-wind wi-towards-wsw" style={{fontSize: '25px'}}></i>
    case 'W': 
        return <i className="wi wi-wind wi-towards-w" style={{fontSize: '25px'}}></i>
    case 'WNW': 
        return <i className="wi wi-wind wi-towards-wnw" style={{fontSize: '25px'}}></i>
    case 'NW': 
        return <i className="wi wi-wind wi-towards-nw" style={{fontSize: '25px'}}></i>
    case 'NNW': 
        return <i className="wi wi-wind wi-towards-nnw" style={{fontSize: '25px'}}></i>
    default:
        return 
 } 
}
export const degToCompass = (num) => {
    var val = Math.floor((num / 22.5) + 0.5);
    var arr = ["N", "NNE", "NE", "ENE", "E", "ESE", "SE", "SSE", "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW"];
    return getDirectionIcon(arr[(val % 16)]);
}
