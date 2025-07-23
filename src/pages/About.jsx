// src/pages/About.jsx
import Waves from '../backgrounds/Waves/Waves';
import BackButton from "../components/BackButton";
import Footer from "../components/Footer"; 
import { motion } from "framer-motion";
import LDSWeatherLogo from "../components/LDSWeatherLogo";

export default function About() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-sky-100 to-blue-300 dark:from-gray-800 dark:to-gray-900 text-gray-900 dark:text-white p-6 overflow-hidden">

      {/* Background Waves - full screen */}
      <div className="absolute inset-0 z-10 h-full w-full pointer-events-none" >
  <Waves
    lineColor="#ffffff"
    backgroundColor="rgba(255, 255, 255, 0.05)"
    waveSpeedX={0.02}
    waveSpeedY={0.01}
    waveAmpX={40}
    waveAmpY={20}
    tension={0.008}
    xGap={12}
    yGap={36}
    style={{
        width: "100%",
        height: "100%",
        position: "absolute",
        inset: 0,
      }}
  />
</div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="pt-4 text-center">
          <BackButton />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4"
        >
            <header className="flex items-center p-4"><LDSWeatherLogo /> </header>
          <h1 className="text-3xl font-bold flex justify-center items-center gap-2">
          
            About LDS Weather
          </h1>
          <p className="text-lg leading-relaxed">
            LDS Weather is your trusted source for up-to-date weather forecasts,
            powered by OpenWeather and crafted for elegance and ease of use.
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Built with ❤️ using React, Tailwind CSS, and the OpenWeather API.
          </p>
        </motion.div>
      </div>

      <Footer />
    </div>
  );
}
