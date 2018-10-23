const axios = require('axios');



const getClima = async(lat, lng) => {

    let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&units=metric&appid=aba256f73dc9b43a30651d1103074781`);

    return resp.data.main.temp;
}

module.exports = {
    getClima
}