export default function WeatherCard({ forecast, unit = "metric" }) {
    if (!forecast || forecast.length === 0) return null;
  
    const unitSymbol = unit === "imperial" ? "°F" : "°C";
  
    return (
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mt-4">
        {forecast.map((day) => {
          const dateObj = new Date(day.date);
          const weekday = dateObj.toLocaleDateString("en-US", { weekday: "short" });
          const dateStr = dateObj.toLocaleDateString("en-US", { month: "short", day: "numeric" });
  
          return (
            <div
              key={day.date}
              className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-md text-center space-y-2"
            >
              <h3 className="font-semibold text-sm">
                {weekday}, {dateStr}
              </h3>
              <img
                src={`https://openweathermap.org/img/wn/${day.icon}@2x.png`}
                alt={day.desc}
                className="mx-auto w-12 h-12"
              />
              <p className="text-lg font-bold">{Math.round(day.temp)}{unitSymbol}</p>
              <p className="capitalize text-sm text-gray-600 dark:text-gray-400">{day.desc}</p>
            </div>
          );
        })}
      </div>
    );
  }
  