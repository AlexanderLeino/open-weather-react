import UVIndex1 from '../asset/weather-icons-master/production/fill/all/uv-index-1.svg'
import UVIndex2 from '../asset/weather-icons-master/production/fill/all/uv-index-2.svg'
import UVIndex3 from '../asset/weather-icons-master/production/fill/all/uv-index-3.svg'
import UVIndex4 from '../asset/weather-icons-master/production/fill/all/uv-index-4.svg'
import UVIndex5 from '../asset/weather-icons-master/production/fill/all/uv-index-5.svg'
import UVIndex6 from '../asset/weather-icons-master/production/fill/all/uv-index-6.svg'
import UVIndex7 from '../asset/weather-icons-master/production/fill/all/uv-index-7.svg'
import UVIndex8 from '../asset/weather-icons-master/production/fill/all/uv-index-8.svg'
import UVIndex9 from '../asset/weather-icons-master/production/fill/all/uv-index-9.svg'
import UVIndex10 from '../asset/weather-icons-master/production/fill/all/uv-index-10.svg'
import UVIndex11 from '../asset/weather-icons-master/production/fill/all/uv-index-11.svg'
import UVIndex from '../asset/weather-icons-master/production/fill/all/uv-index.svg'

const getUVIndex = (value) => {
    let floorValue = Math.floor(value)
    switch (floorValue) {
        case 1:
            return <img src={UVIndex1} alt='A sun with a the number 1 indicating the scale of the UV Index' height='45px' />
        case 2:
            return <img src={UVIndex2} alt='A sun with a the number 2 indicating the scale of the UV Index' height='45px' />
        case 3:
            return <img src={UVIndex3} alt='A sun with a the number 3 indicating the scale of the UV Index' height='45px' />
        case 4:
            return <img src={UVIndex4} alt='A sun with a the number 4 indicating the scale of the UV Index' height='45px' />
        case 5:
            return <img src={UVIndex5} alt='A sun with a the number 5 indicating the scale of the UV Index' height='45px' />
        case 6:
            return <img src={UVIndex6} alt='A sun with a the number 6 indicating the scale of the UV Index' height='45px' />
        case 7:
            return <img src={UVIndex7} alt='A sun with a the number 7 indicating the scale of the UV Index' height='45px' />
        case 8:
            return <img src={UVIndex8} alt='A sun with a the number 8 indicating the scale of the UV Index' height='45px' />
        case 9:
            return <img src={UVIndex9} alt='A sun with a the number 9 indicating the scale of the UV Index' height='45px' />
        case 10:
            return <img src={UVIndex10} alt='A sun with a the number 10 indicating the scale of the UV Index' height='45px' />
        case 11:
            return <img src={UVIndex11} alt='A sun with a the number 11 indicating the scale of the UV Index' height='45px' />
        default:
            return <img src={UVIndex} alt='A sun with with the word UV next to it' height='45px' />

    }
}

export default getUVIndex