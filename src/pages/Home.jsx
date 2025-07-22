import React, { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";
import WeatherCard from "../components/WeatherCard";
import ToggleButtons from "../components/ToggleButtons";
import ForecastCard from "../components/ForecastCard";
import Footer from "../components/Footer"; 
import axios from "axios";

export default function Home() {
  const [forecast, setForecast] = useState([]);
  const [city, setCity] = useState("");
  const [unit, setUnit] = useState("metric"); // Fixed

  const toggleUnit = () => {
    setUnit((prev) => (prev === "metric" ? "imperial" : "metric"));
  };

  const toggleTheme = () => {
    document.documentElement.classList.toggle("dark");
  };
  // Group 3-hour forecasts into daily summaries
  function groupForecastByDay(list) {
    const days = {};

    list.forEach((entry) => {
      const date = entry.dt_txt.split(" ")[0];
      if (!days[date]) days[date] = [];
      days[date].push(entry);
    });

    return Object.entries(days)
      .slice(0, 5)
      .map(([date, entries]) => {
        const midDay =
          entries.find((e) => e.dt_txt.includes("12:00:00")) || entries[0];
        return {
          date,
          temp: midDay.main.temp,
          icon: midDay.weather[0].icon,
          desc: midDay.weather[0].description,
        };
      });
  }

  const handleSearch = async (query) => {
    if (!query) return;
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${query}&units=${unit}&appid=${import.meta.env.VITE_WEATHER_API_KEY}`
      );
      const data = await res.json();

      if (data.cod !== "200") {
        alert("City no found!");
        return;
      }

      const grouped = groupForecastByDay(data.list);
      setForecast(grouped);
      setCity(`${data.city.name}, ${data.city.country}`);
    } catch (err) {
      console.error("Search error:", err);
    }
  };

  useEffect(() => {
    const fetchByGeo = async (lat, lon) => {
      try {
        const res = await axios.get(
          `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=${unit}&appid=${import.meta.env.VITE_WEATHER_API_KEY}`
        );
        const data = res.data;
        const grouped = groupForecastByDay(data.list);
        setForecast(grouped);
        setCity(`${data.city.name}, ${data.city.country}`);
      } catch (error) {
        console.error("Geolocation weather error:", error);
      }
    };

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          const { latitude, longitude } = pos.coords;
          fetchByGeo(latitude, longitude);
        },
        (err) => {
          console.warn("Geolocation denied:", err.message);
        }
      );
    }
  }, [unit]); // Re-run if unit changes

  return (
    
    <div id="top" className="min-h-screen bg-gradient-to-br from-sky-100 to-blue-300 dark:from-gray-800 dark:to-gray-900 text-gray-900 dark:text-white p-4">
      <div className="max-w-4xl mx-auto space-y-6">
        
            <h1 className="text-3xl font-bold text-center">🌤 Weather App</h1>
            <ToggleButtons onToggleUnit={toggleUnit} unit={unit}  onToggleTheme={toggleTheme} />
            <SearchBar onSearch={handleSearch} />
            {city && <h2 className="text-center text-xl font-medium">{city}</h2>}
            <WeatherCard forecast={forecast} unit={unit} />
            {/* <ForecastCard daily={forecast} unit={unit} /> */}
            <Footer />
      </div>
    </div>
  );
}
