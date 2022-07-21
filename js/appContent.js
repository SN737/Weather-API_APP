import { directionOfwWind, fToC } from "./helper.js";
import { capitalizeFirstLetter } from "./helper.js";
//import { fToC } from "./helper.js";

export const createContent = (data) => {
    const main = document.createElement('main');
    const section = document.createElement('section');
    const container = document.createElement('div');
    const inner = document.createElement('div');
    const iconBloc = document.createElement('img');
    const temperature = document.createElement('h2');
    const units = document.createElement('span');
    const description = document.createElement('p');
    const weatherInfo = document.createElement('div');
    const weatherInfoList = document.createElement('ul');
    const tempFeels = document.createElement('div');
    const weatherInfoWind = document.createElement('li');
    const weatherInfoPressure = document.createElement('li');
    const weatherInfoHumidity = document.createElement('li');
    const weatherInfoClouds = document.createElement('li');

    section.classList.add('weather');
    container.classList.add('container', 'weather__container');
    inner.classList.add('weather__inner');
    iconBloc.classList.add('weather__icon');
    temperature.classList.add('weather__temperature');
    units.classList.add('weather__units');
    description.classList.add('weather__description');
    tempFeels.classList.add('temp__feels');
    weatherInfo.classList.add('weather-info');
    weatherInfoList.classList.add('weather-info__list');
    weatherInfoWind.classList.add('weather-info__item');
    weatherInfoHumidity.classList.add('weather-info__item');
    weatherInfoPressure.classList.add('weather-info__item');
    weatherInfoClouds.classList.add('weather-info__item');

    
    temperature.textContent = Math.round(data.main.temp*10)/10;
  
    //tempFeels.textContent = data.main.feels_like;
          
    

     // подумать об нормальном округлении температуры до десятых - done;
    description.textContent = capitalizeFirstLetter(data.weather[0].description);
    //description.textContent = data.weather[0].description;
    iconBloc.src = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    units.textContent = 'o';

    const createWeatherItemTitle = (text) => {
        const span = document.createElement('span');
        span.textContent = text;

        return span;
    };

    const createWeatherItemContent = (text) => {
        const p = document.createElement('p');
        p.textContent = text;

        return p;
    };

  

    tempFeels.append (
        createWeatherItemTitle('Ощущается'),
        createWeatherItemContent(data.main.feels_like + '\u00B0')
    );

    weatherInfoWind.append(
        createWeatherItemTitle('Ветер'),
        createWeatherItemContent(Math.round(data.wind.speed*10)/10 + ' м/с, ' + directionOfwWind(data.wind.deg))
    );

    weatherInfoPressure.append(
        createWeatherItemTitle('Давление'),
        createWeatherItemContent(data.main.pressure + ' мм рт. ст.')
    );

    weatherInfoHumidity.append(
        createWeatherItemTitle('Влажность'),
        createWeatherItemContent(data.main.humidity + ' %')
    );

    weatherInfoClouds.append(
        createWeatherItemTitle('Облачность'),
        createWeatherItemContent(data.clouds.all + ' %')
    );

    main.append(section);
    section.append(container);
    container.append(inner, description, tempFeels, weatherInfo);
    inner.append(iconBloc, temperature, units);
    weatherInfo.append(weatherInfoList);
    weatherInfoList.append(
        weatherInfoWind, 
        weatherInfoPressure, 
        weatherInfoHumidity, 
        weatherInfoClouds
    );

    return main;

};