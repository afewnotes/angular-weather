'use strict';

angular.module('mockedWeathers', [])
  .value('jsonWeather', {
    "cod": "200",
    "message": 0.1845,
    "city": {
      "id": 1791247,
      "name": "Wuhan",
      "coord": {"lon": 114.26667, "lat": 30.58333},
      "country": "CN",
      "population": 0,
      "sys": {"population": 0}
    },
    "cnt": 7,
    "list": [{
      "dt": 1421899200,
      "temp": {"day": 52.47, "min": 34.02, "max": 57.13, "night": 34.02, "eve": 55.09, "morn": 52.47},
      "pressure": 1031.69,
      "humidity": 46,
      "weather": [{"id": 800, "main": "Clear", "description": "sky is clear", "icon": "01d"}],
      "speed": 4.47,
      "deg": 79,
      "clouds": 0
    }, {
      "dt": 1421985600,
      "temp": {"day": 53.74, "min": 37.58, "max": 55.62, "night": 37.58, "eve": 53.67, "morn": 39.06},
      "pressure": 1024.97,
      "humidity": 52,
      "weather": [{"id": 803, "main": "Clouds", "description": "broken clouds", "icon": "04d"}],
      "speed": 7.06,
      "deg": 145,
      "clouds": 56
    }, {
      "dt": 1422072000,
      "temp": {"day": 59.14, "min": 37.35, "max": 66.11, "night": 51.17, "eve": 64.38, "morn": 37.35},
      "pressure": 1023.2,
      "humidity": 53,
      "weather": [{"id": 801, "main": "Clouds", "description": "few clouds", "icon": "02d"}],
      "speed": 8.34,
      "deg": 135,
      "clouds": 20
    }, {
      "dt": 1422158400,
      "temp": {"day": 48, "min": 43.2, "max": 50.32, "night": 43.2, "eve": 48.7, "morn": 46.31},
      "pressure": 1025.53,
      "humidity": 95,
      "weather": [{"id": 501, "main": "Rain", "description": "moderate rain", "icon": "10d"}],
      "speed": 6.5,
      "deg": 26,
      "clouds": 92,
      "rain": 6
    }, {
      "dt": 1422244800,
      "temp": {"day": 60.15, "min": 45.16, "max": 60.15, "night": 45.16, "eve": 52.12, "morn": 52.36},
      "pressure": 1028.41,
      "humidity": 0,
      "weather": [{"id": 501, "main": "Rain", "description": "moderate rain", "icon": "10d"}],
      "speed": 10.15,
      "deg": 26,
      "clouds": 86,
      "rain": 6.46
    }, {
      "dt": 1422331200,
      "temp": {"day": 43.45, "min": 35.8, "max": 43.45, "night": 35.8, "eve": 39.13, "morn": 38.3},
      "pressure": 1038.64,
      "humidity": 0,
      "weather": [{"id": 600, "main": "Snow", "description": "light snow", "icon": "13d"}],
      "speed": 16.01,
      "deg": 45,
      "clouds": 51,
      "rain": 2.15,
      "snow": 0.07
    }, {
      "dt": 1422417600,
      "temp": {"day": 35.87, "min": 30.47, "max": 35.87, "night": 30.47, "eve": 34.09, "morn": 34.16},
      "pressure": 1030.44,
      "humidity": 0,
      "weather": [{"id": 600, "main": "Snow", "description": "light snow", "icon": "13d"}],
      "speed": 7.04,
      "deg": 57,
      "clouds": 100,
      "rain": 4.38,
      "snow": 0.23
    }]
  });
