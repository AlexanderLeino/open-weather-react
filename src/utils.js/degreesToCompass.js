import "./wind.css"

let getDirectionIcon = (direction) => {
 switch(direction) {
    case 'N': 
        return <i className="wi wi-wind wi-towards-n"></i>
    case 'NNE': 
        return <i className="wi wi-wind wi-towards-nne"></i>
    case 'NE': 
        return <i className="wi wi-wind wi-towards-ne"></i>
    case 'ENE': 
        return <i className="wi wi-wind wi-towards-ene"></i>
    case 'E':
        return <i className="wi wi-wind wi-towards-e"></i>
    case 'ESE': 
        return <i className="wi wi-wind wi-towards-ese"></i>
    case 'SE': 
        return <i className="wi wi-wind wi-towards-se"></i>
    case 'SSE': 
        return <i className="wi wi-wind wi-towards-sse"></i>
    case 'S':
        return <i className="wi wi-wind wi-towards-s"></i>
    case 'SSW': 
        return <i className="wi wi-wind wi-towards-ssw"></i>
    case 'SW': 
        return <i className="wi wi-wind wi-towards-sw"></i>
    case 'WSW': 
        return <i className="wi wi-wind wi-towards-wsw"></i>
    case 'W': 
        return <i className="wi wi-wind wi-towards-w"></i>
    case 'WNW': 
        return <i className="wi wi-wind wi-towards-wnw"></i>
    case 'NW': 
        return <i className="wi wi-wind wi-towards-nw"></i>
    case 'NNW': 
        return <i className="wi wi-wind wi-towards-nnw"></i>
    default:
        return 
 } 
}
export const degToCompass = (num) => {
    var val = Math.floor((num / 22.5) + 0.5);
    var arr = ["N", "NNE", "NE", "ENE", "E", "ESE", "SE", "SSE", "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW"];
    return getDirectionIcon(arr[(val % 16)]);
}
