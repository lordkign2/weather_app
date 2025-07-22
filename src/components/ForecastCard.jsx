export default function ForecastCard({ daily, unit = "metric" }) {
    if (!daily || daily.length === 0) return null;
  
    const unitSymbol = unit === "imperial" ? "°F" : "°C";
  
    return (
      <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-7 gap-2 mt-4">
        {daily.map((day, index) => {
          const date = new Date(day.date);
          const weekday = date.toLocaleDateString("en-US", { weekday: "short" });
  
          return (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 p-3 rounded-lg shadow text-center text-sm"
            >
              <p className="font-medium mb-1">{weekday}</p>
              <img
                src={`http://openweathermap.org/img/wn/${day.icon}@2x.png`}
                alt={day.desc}
                className="mx-auto w-10 h-10"
              />
              <p className="mt-1 font-semibold">{Math.round(day.temp)}{unitSymbol}</p>
            </div>
          );
        })}
      </div>
    );
  }
  