// src/pages/PrivacyPolicy.jsx
import Waves from '../backgrounds/Waves/Waves';
import BackButton from "../components/BackButton";
import Footer from "../components/Footer";
import { motion } from "framer-motion"; 
import LDSWeatherLogo from "../components/LDSWeatherLogo";
export default function PrivacyPolicy() {
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
          <h1 className="text-3xl font-bold text-center">Privacy Policy</h1>
          <p>
            Your privacy is important to us. This privacy policy explains what
            information we collect, how we use it, and your rights regarding your
            data.
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Information Collection:</strong> We may collect non-personal
              data such as location (with your permission) to provide accurate
              weather forecasts.
            </li>
            <li>
              <strong>Third-Party Services:</strong> We use OpenWeather API to fetch
              weather data. Their privacy practices apply as well.
            </li>
            <li>
              <strong>Cookies:</strong> We may use cookies to remember your
              preferences such as temperature units or theme mode.
            </li>
            <li>
              <strong>Newsletter:</strong> If you subscribe, your email is used
              solely for sending updates. You can opt out at any time.
            </li>
          </ul>
          <p>
            By using this app, you agree to this privacy policy. We may update this
            page occasionally, so please review it regularly.
          </p>
          </motion.div>
        </div>
        <Footer />
        
      </div>
    );
  }
  