export default function UnitToggle({ unit, onToggle }) {
    return (
      <div className="flex justify-center gap-2 items-center mb-4">
        <span className={`${unit === 'metric' ? 'font-bold' : 'text-gray-500'}`}>°C</span>
        <button
          onClick={onToggle}
          className="bg-gray-200 dark:bg-gray-600 rounded-full px-3 py-1 text-sm"
        >
          Switch
        </button>
        <span className={`${unit === 'imperial' ? 'font-bold' : 'text-gray-500'}`}>°F</span>
      </div>
    );
  }
  