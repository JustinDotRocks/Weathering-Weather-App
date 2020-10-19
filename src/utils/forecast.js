const request = require('request');

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=69dfbfe15193ed851d14424447cf2cf8&query=' + latitude + ',' + longitude + '&units=m';


    request({url, json: true}, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather serveices!', undefined);
        } else if (body.error) {
            callback('Unable to find that location, please try another.', undefined);
        } else { 
            callback(undefined, body.current.weather_descriptions[0] + ' It is currently ' + body.current.temperature + ' degrees out. It feels like it is ' + body.current.feelslike + ' degrees outside.');
        };
    });
};


module.exports = forecast;
