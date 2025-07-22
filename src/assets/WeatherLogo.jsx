// src/assets/WeatherLogo.jsx (new file)
export default function WeatherLogo({ size = 32 }) {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="currentColor"
        className="text-blue-500"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M6 14a4 4 0 010-8 5.5 5.5 0 0110.93 1.04A5 5 0 1116 19H6a3 3 0 010-6h1" />
      </svg>
      
    );
  }