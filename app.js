const { getCity } = require("./place/place");
const { getWeather } = require("./weather/weather");

const argv = require("yargs").options({
    place: {
        alias: "d",
        desc: "Direccion de la ciudad para obtener el tiempo",
    },
}).argv;

const weather = async(place) => {
    try {
        const { name, lat, lon } = await getCity(place);
        const temperature = await getWeather(lat, lon);
        console.log(`The temperature in ${name} is ${temperature} degrees celsius`);
    } catch (err) {
        console.log("Ops there was an error...please try again later...");
    }
};

weather(argv.place);