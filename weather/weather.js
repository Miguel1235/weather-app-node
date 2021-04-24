const axios = require("axios").default;
const getWeather = async(lat, lon) => {
    try {
        const response = await axios.get(
            `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=cacc84848d04590c6eab2b5df4f2f162&units=metric`
        );
        return response.data.main.temp;
    } catch (err) {
        console.log(err);
    }
};

module.exports = { getWeather };