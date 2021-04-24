const axios = require("axios").default;
const getCity = async(place = "Mendoza") => {
    try {
        const response = await axios.get(
            `https://api.troposphere.io/place/name/${encodeURI(
        place
      )}?token=549fa3dccb6c9af1be95d9210d551241f024d3a222026b0a26`
        );

        const data = response.data.data[0];
        if (!data) {
            throw new Error(
                "There are no results for, please try again with another city..."
            );
        } else {
            return {
                name: data.name,
                lat: data.latitude,
                lon: data.longitude,
            };
        }
    } catch (error) {
        console.log(
            "Ops there was an error while trying to find the selected city, please try another..."
        );
    }
};

module.exports = { getCity };