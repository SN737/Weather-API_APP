import { getWeatherData } from "./api.js";
import { resetWeatherContent } from "./helper.js";

export const handleWeatherByGeolacation = () => {
    const options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
    };
    const success = async (pos) => {
        const crd = pos.coords;

        const response = await  fetch(
            `https://api.geoapify.com/v1/geocode/reverse?lat=${crd.latitude}&lon=${crd.longitude}&apiKey=fe606fa92cc54af29de7fbb5635ed907`
        );

        const result = await response.json();

        const weather = await getWeatherData(result.features[0].properties.city);
       


        console.log('получилось',result.features[0].properties.city,  result);
        resetWeatherContent(result.features[0].properties.city, weather);

       /* .then( response => response.json())
        .then(result => {
          if (result.features.length) {
            console.log(result.features[0].properties.formatted);
          } else {
            console.log("No address found");
          }
          console.log (result);
        });
*/

        
    };
    const error = (err) => {
        console.log (err.code + ' !ашипке вышел ' + err.message);
    };
    navigator.geolocation.getCurrentPosition(success, error, options);

    
};