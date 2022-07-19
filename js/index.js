import { getWeatherData } from "./api.js";
import { createHeader } from "./appHeader.js";
import { createContent } from "./appContent.js";
import { handleWeatherByGeolacation } from "./geo.js";



const app = async () => {
    const weather = await getWeatherData (JSON.parse(localStorage.getItem('city')) || `Сочи`);
    
    const header = createHeader(weather.name);
    const content = createContent(weather);
    console.log(weather);
    document.body.append(header, content);
    //document.body.append(main);

};

app();