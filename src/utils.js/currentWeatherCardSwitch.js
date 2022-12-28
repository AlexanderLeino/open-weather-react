import clouds from "../images/clouds.jpg";
import cloudsNight from "../images/clouds-night.jpg";
import clearSkies from "../images/clearSky.jpg";
import lighting from "../images/lighting.jpg";
import Boot from "../images/rain-day.jpg";
import clearNightSky2 from "../images/clearnightsky-2.jpg";
import snow from "../images/snow.jpg";
import snowNight from "../images/snow-night.jpg";
import thunderStormDay from "../images/thunderstorm-day.jpg";
import japanNight from "../images/japan.jpg";
const getBackgroundStyling = (weatherType, timeOfDay, setCardStyling) => {

  let weather;
  if (weatherType.includes("snow")) {
    weather = "snow";
  } else if (weatherType.includes("rain")) {
    weather = "rain";
  } else if (weatherType.includes("thunderstorm")) {
    weather = "thunderstorm";
  } else if (weatherType.includes("clear sky")) {
    weather = "clear sky";
  } else {
    weather = "clouds";
  }
  if (timeOfDay === "day") {
    return daySwitch(weather, setCardStyling);
  } else {
    return nightSwitch(weather, setCardStyling);
  }
};

const daySwitch = (weather, setCardStyling) => {
  switch (weather) {
    case "clear sky":
      setCardStyling({
        color: "white",
        img: clearSkies,
      });
      break;
    case "rain":
      setCardStyling({
        color: "white",
        img: Boot,
      });
      break;
    case "thunderstorm":
      setCardStyling({
        color: "white",
        img: thunderStormDay,
      });
      break;
    case "snow":
      setCardStyling({
        color: "black",
        img: snow,
      });
      break;
    default:
      setCardStyling({ color: "white", img: clouds });
      break;
  }
};

const nightSwitch = (weather, setCardStyling) => {
  switch (weather) {
    case "clear sky":
      setCardStyling({
        color: "white",
        img: clearNightSky2,
      });
      break;
    case "rain":
      setCardStyling({
        color: "white",
        img: japanNight,
      });
      break;
    case "thunderstorm":
      setCardStyling({
        color: "white",
        img: lighting,
      });
      break;
    case "snow":
      setCardStyling({
        color: "white",
        img: snowNight,
      });
      break;
    default:
      setCardStyling({
        color: "white",
        img: cloudsNight,
      });
  }
};

export default getBackgroundStyling;
