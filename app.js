var express = require("express");
var app = express();
require("dotenv").config();
var axios = require("axios");
var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static("public"));


app.get("/", function(req, res) {
    res.render("home", { WEATHER_API_KEY: process.env.WEATHER_API_KEY});
});
app.get("/weather", function(req, res) {
    res.render("weather", {weather:null, forecast:null, error:null});
});

app.post("/weather/new", async (req, res) => {
    var searchCity = req.body.city
    var searchURL = "https://api.openweathermap.org/data/2.5/weather?q=" + searchCity + "&units=metric&appid=ae01b42d69cbfa8f4dd0f6b61427222b";
    var forecastURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + searchCity + "&units=metric&appid=ae01b42d69cbfa8f4dd0f6b61427222b";
    
    try {
        var currentResponse = await axios.get(searchURL);
        var forecastResponse = await axios.get(forecastURL);
        var weather = currentResponse.data;
        var forecast = forecastResponse.data;

        res.render("weather", {
            
            weather: {
                city: weather.name,
                coord: "Lon: " +  weather.coord.lon + ", Lat: " + weather.coord.lat,
                country: weather.sys.country,
                temperature: weather.main.temp,
                description: weather.weather[0].description,
                icon: "https://openweathermap.org/img/wn/" + weather.weather[0].icon + "@2x.png",
            },
            forecast: {
                date:[
                    forecast.list[0].dt_txt,
                    forecast.list[1].dt_txt,
                    forecast.list[2].dt_txt,
                    forecast.list[3].dt_txt,
                    forecast.list[4].dt_txt,
                    forecast.list[5].dt_txt,
                    forecast.list[6].dt_txt,
                    forecast.list[7].dt_txt,
                    forecast.list[8].dt_txt,
                    forecast.list[9].dt_txt,
                ],
                icon: [
                    "https://openweathermap.org/img/wn/" + forecast.list[0].weather[0].icon + "@2x.png",
                    "https://openweathermap.org/img/wn/" + forecast.list[1].weather[0].icon + "@2x.png",
                    "https://openweathermap.org/img/wn/" + forecast.list[2].weather[0].icon + "@2x.png",
                    "https://openweathermap.org/img/wn/" + forecast.list[3].weather[0].icon + "@2x.png",
                    "https://openweathermap.org/img/wn/" + forecast.list[4].weather[0].icon + "@2x.png",
                    "https://openweathermap.org/img/wn/" + forecast.list[5].weather[0].icon + "@2x.png",
                    "https://openweathermap.org/img/wn/" + forecast.list[6].weather[0].icon + "@2x.png",
                    "https://openweathermap.org/img/wn/" + forecast.list[7].weather[0].icon + "@2x.png",
                    "https://openweathermap.org/img/wn/" + forecast.list[8].weather[0].icon + "@2x.png",
                    "https://openweathermap.org/img/wn/" + forecast.list[9].weather[0].icon + "@2x.png",
                ],
                description: [
                    forecast.list[0].weather[0].description,
                    forecast.list[1].weather[0].description,
                    forecast.list[2].weather[0].description,
                    forecast.list[3].weather[0].description,
                    forecast.list[4].weather[0].description,
                    forecast.list[5].weather[0].description,
                    forecast.list[6].weather[0].description,
                    forecast.list[7].weather[0].description,
                    forecast.list[8].weather[0].description,
                    forecast.list[9].weather[0].description,
                ],
                temperature: [
                    forecast.list[0].main.temp,
                    forecast.list[1].main.temp,
                    forecast.list[2].main.temp,
                    forecast.list[3].main.temp,
                    forecast.list[4].main.temp,
                    forecast.list[5].main.temp,
                    forecast.list[6].main.temp,
                    forecast.list[7].main.temp,
                    forecast.list[8].main.temp,
                    forecast.list[9].main.temp,
                ],
            },
            error: null
        })
    } catch (error) {
        res.render("weather", {weather: null, forecast:null, error: "city not found"});
    }
     
});


app.listen(PORT, function() {
    console.log("server started on port:" + PORT);
});