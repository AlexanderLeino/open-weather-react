const axios = require("axios");
require("dotenv").config();

module.exports = {
  getGeoCoordinates: async (req, res) => {
    console.log("City Name", req.body.cityName, process.env.APIKey)
    try {
      const options = {
        method: "GET",
        url: "https://api.openweathermap.org/geo/1.0/direct",
        params: {
          appid: process.env.APIKey,
          q: req.body.cityName,
          limit: 5,
        },
      };
      let response = await axios.request(options);

      res.send(response.data).status(200);
    } catch (e) {
        res.send({ error: e }).status(400);
        console.log("ERROR", e)
        
    }
  },

  getWeatherData: async (req, res) => {
    try {
      const options = {
        method: "GET",
        url: "https://api.openweathermap.org/data/3.0/onecall",
        params: {
          appid: process.env.APIKey,
          lat: req.body.lat,
          lon: req.body.lon,
          units: "imperial",
        },
      };

      let response = await axios.request(options);
     
      res.send(response.data).status(200);
    } catch (e) {

      res.send({ e }).status(400);
    }
  },
  getHistoricalData: async (req, res) => {
 
    try {
      const options = {
        method: "GET",
        url: "https://api.openweathermap.org/data/3.0/onecall/timemachine",
        params: {
          appid: process.env.APIKey,
          lat: req.body.lat,
          lon: req.body.lon,
          units: "imperial",
          dt: req.body.dt,
        },
      };
      let response = await axios.request(options);
      
      res.send(response.data).status(200);
    } catch (e) {
      res.send({ e }).status(400);
      console.log(e)
    }
  },
};
