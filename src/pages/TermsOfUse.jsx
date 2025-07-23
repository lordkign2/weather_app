// src/pages/TermsOfUse.jsx
import Waves from '../backgrounds/Waves/Waves';
import BackButton from "../components/BackButton";
import Footer from "../components/Footer"; 
import { motion } from "framer-motion";
import LDSWeatherLogo from "../components/LDSWeatherLogo";
export default function TermsOfUse() {
    return (
      <div className="relative min-h-screen bg-gradient-to-br from-sky-100 to-blue-300 dark:from-gray-800 dark:to-gray-900 text-gray-900 dark:text-white p-6">
          {/* 🌊 Background Waves - full screen */}
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
          <h1 className="text-3xl font-bold text-center">Terms of Use</h1>
          <p>
            By using LDS Weather, you agree to the following terms and conditions.
            Please read them carefully.
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Service:</strong> LDS Weather provides weather forecasts using
              third-party data from OpenWeather. We do not guarantee 100% accuracy.
            </li>
            <li>
              <strong>Use of Data:</strong> Weather data is for informational
              purposes only. Do not use it for safety-critical decisions.
            </li>
            <li>
              <strong>Accountability:</strong> We are not liable for any decisions
              made based on the forecast data displayed in this app.
            </li>
            <li>
              <strong>Changes:</strong> We may update these terms at any time. Your
              continued use of the app implies acceptance of any updates.
            </li>
          </ul>
          <p>
            If you do not agree with these terms, please do not use the LDS Weather
            app.
          </p>
          </motion.div>
        </div>
        <Footer />
      </div>
    );
  }
  