const request = require("request");

const forecast = (lat, lng, callback) => {
  const url = `https://api.darksky.net/forecast/0ff358a542223e444e35c3932248d689/${lat},${lng}?units=si`;

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to weather services!", undefined);
    } else if (body.error) {
      callback("Unable to find location");
    } else {
      const data = body.currently;
      const result = `${body.daily.data[0].summary} It is currently ${
        data.temperature
      } degrees out. There is ${data.precipProbability}% chance of rain.`;
      callback(undefined, result);
    }
  });
};

module.exports = forecast;
