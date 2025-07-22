export default function ToggleButtons({ unit, onToggleUnit, onToggleTheme }) {
    return (
      <div className="flex justify-end gap-2">
        <button
          onClick={onToggleUnit}
          className="bg-white dark:bg-gray-700 border rounded-full px-4 py-1 shadow-sm text-sm font-medium"
        >
          {unit === "metric" ? "°C" : "°F"}
        </button>
  
        <button
          onClick={onToggleTheme}
          className="bg-white dark:bg-gray-700 border rounded-full px-4 py-1 shadow-sm text-sm font-medium"
        >
          🌙 / ☀️
        </button>
      </div>
    );
  }
  