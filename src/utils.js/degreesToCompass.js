import "./wind.css"

let getDirectionIcon = (direction) => {
 switch(direction) {
    case'E':
    return <i className="wi wi-wind wi-towards-e"></i>

 } 
}
export const degToCompass = (num) => {
    var val = Math.floor((num / 22.5) + 0.5);
    var arr = ["N", "NNE", "NE", "ENE", "E", "ESE", "SE", "SSE", "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW"];
    return getDirectionIcon(arr[(val % 16)]);
}
