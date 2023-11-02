import brokenClouds from "./assets/img/weather-icons/broken-clouds.png";
import clearSky from "./assets/img/weather-icons/clear-sky.png";
import fewClouds from "./assets/img/weather-icons/few-clouds.png";
import mist from "./assets/img/weather-icons/mist.png";
import rain from "./assets/img/weather-icons/rain.png";
import scatteredClouds from "./assets/img/weather-icons/scattered-clouds.png";
import showerRain from "./assets/img/weather-icons/shower-rain.png";
import snow from "./assets/img/weather-icons/snow.png";
import thunderstorm from "./assets/img/weather-icons/thunderstorm.png";

const iconMap = new Map();

iconMap.set("clear sky", clearSky);
iconMap.set("few clouds", fewClouds);
iconMap.set("scattered clouds", scatteredClouds);
iconMap.set("broken clouds", brokenClouds);
iconMap.set("shower rain", showerRain);
iconMap.set("rain", rain);
iconMap.set("thunderstorm", thunderstorm);
iconMap.set("snow", snow);
iconMap.set("mist", mist);

export default iconMap;