var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=1d47984d24064a2783333bdd93cfbc19&units=metric';

// 1d47984d24064a2783333bdd93cfbc19

module.exports = {
    getTemp: function (location) {
        var encodedLocation = encodeURIComponent(location);
        console.log(encodedLocation);
        var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

        return axios.get(requestUrl).then(function (res) {
            if (res.data.cod && res.data.message) {
                throw new Error(res.data.message);
            }
            else {
                return res.data.main.temp;
            }

        }, function (res) {
            throw new Error(res.data.message);
        });
    }
}