export const getWeatherData = async (city) => {
    // 288b8dabde2a345f9c785a4eb2c54fc2
    try {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=288b8dabde2a345f9c785a4eb2c54fc2&lang=ru&units=metric`
            );
return await response.json();
    } catch (error) {
        console.error(error);
    }

};
