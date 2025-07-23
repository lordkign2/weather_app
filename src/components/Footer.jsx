import { useEffect, useState } from "react";
import { FaGithub, FaTwitter, FaLinkedin, FaEnvelope, FaArrowUp  } from "react-icons/fa";

export default function Footer() {
    const [email, setEmail] = useState("");

    const [visible, setVisible] = useState(true);

    useEffect(() => {
      const toggleVisibility = () => {
        setVisible(window.scrollY > 300);
      };
      window.addEventListener("scroll", toggleVisibility);
      return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);
  
    const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    };
  
   // if (!visible) return null

    useEffect(() => {
        const btn = document.getElementById("backToTop");
        const scrollHandler = () => {
          btn.style.display = window.scrollY > 300 ? "block" : "none";
        };
        window.addEventListener("scroll", scrollHandler);
        return () => window.removeEventListener("scroll", scrollHandler);
    }, []);

    const currentYear = new Date().getFullYear();


    const handleSubscribe = (e) => {
      e.preventDefault();
      const email = document.getElementById("email")
      if (email.value ==='') {email.placeholder = "Input your email"; return}
      else {alert(`Subscribed: ${email.value}`); email.placeholder = `Welcome ${email.value}`}
      email.value = "";
    };

  return (
    <footer className="mt-12 bg-white dark:bg-gray-800 text-gray-800 dark:text-white rounded-xl shadow-inner px-4 py-8">
      <div className="max-w-5xl mx-auto grid md:grid-cols-4 sm:grid-cols-2 gap-6 items-start">
         {/* Logo + Name */}
         <div className="flex flex-col items-start">
          <div className="flex items-center gap-2">
            <img
                src="/images/weather-loga.png"
                alt="WeatherApp Logo"
                className="w-8 h-8 object-contain animate-bounce"
            />
            <h2 className="font-bold text-xl">Weatherify.LDS</h2>
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
            Powered by <a href="https://openweathermap.org/" target="_blank" className="underline hover:text-blue-600 dark:hover:text-blue-400">OpenWeather</a>
          </p>
          <p className="text-sm">Simple, accurate forecasts at your fingertips.</p>
        </div>

        {/* Links */}
        <div>
          <h3 className="font-semibold mb-2">Links</h3>
          <ul className="space-y-1 text-sm">
          <li><a href="/" className="hover:text-blue-600">Home</a></li>
            <li><a href="/about" className="hover:text-blue-600">About</a></li>
            <li><a href="/privacy-policy" className="hover:text-blue-600">Privacy Policy</a></li>
            <li><a href="/terms-of-use" className="hover:text-blue-600">Terms of Use</a></li>
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h3 className="font-semibold mb-2">Connect</h3>
          <div className="flex gap-3 text-lg">
            <a
                href="https://github.com/lordkign2"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-600 dark:hover:text-blue-400 transition"
            >
                <FaGithub />
            </a>
            <a
                href="https://twitter.com/@Lordkign"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-600 dark:hover:text-blue-400 transition"
            >
                <FaTwitter />
            </a>
            <a
                href="www.linkedin.com/in/umeh-kingsley-43a322369"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-600 dark:hover:text-blue-400 transition"
            >
                <FaLinkedin />
            </a>
            <a
                href="mailto:lordkign1@gmail.com"
                className="hover:text-blue-600 dark:hover:text-blue-400 transition"
            >
                <FaEnvelope />
            </a>
          </div>
        </div>


        <div>
          <h3 className="font-semibold mb-2">Newsletter</h3>
          <form onSubmit={handleSubscribe} className="flex flex-col gap-2">
            <input
              type="email"
              id="email"
              placeholder="you@example.com"
              className="px-3 py-2 rounded-md bg-gray-100 dark:bg-gray-700 border dark:border-gray-600 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="text-sm bg-blue-500 hover:bg-blue-600 text-white px-3 py-2 rounded-md transition"
            >
              Subscribe
            </button>
          </form>
        </div>
    </div>
    {/* Footer Bottom */}
    <div className="text-center text-xs mt-6 text-gray-500 dark:text-gray-400 relative">
        <p>&copy; {currentYear} WeatherApp. All rights reserved.</p>

        <button
        id="backToTop"
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 z-50 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition-all"
      aria-label="Back to top"
    >
      <FaArrowUp />
    </button>
      </div>
      
    </footer>
  );
}
