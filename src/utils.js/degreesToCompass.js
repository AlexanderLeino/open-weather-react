import compass from  '../asset/weather-icons-master/production/fill/all/compass.svg'

export const degToCompass = (num) => {
    return <img src={compass} alt='A compass point in the direction the wind is going' style={{transform: `rotate(${num}deg)`, height:'40px', position: 'relative', left: '7px'}} />
   
}
