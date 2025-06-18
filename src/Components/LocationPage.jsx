import React, { useState } from "react";
import { MapPin, LocateFixed } from "lucide-react";
import { motion } from "framer-motion";

export default function LocationPage() {
  const [location, setLocation] = useState(null);
  const [error, setError] = useState("");
  const [zone, setZone] = useState(""); // Safe / Danger

  const handleTrackLocation = () => {
    setError("");
    if (!navigator.geolocation) {
      setError("Geolocation is not supported by your browser.");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setLocation({ latitude, longitude });

        // Define safe zone range
        if (
          latitude >= 28.4 && latitude <= 28.9 &&
          longitude >= 76.9 && longitude <= 77.4
        ) {
          setZone("Safe");
        } else {
          setZone("Danger");
        }
      },
      () => {
        setError("Unable to retrieve your location. Please allow location access.");
      }
    );
  };

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-pink-100 via-pink-200 to-pink-300 flex items-center justify-center px-4 py-10">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-xl w-full bg-white rounded-3xl shadow-2xl p-8 text-center space-y-6"
        >
          <div className="flex justify-center">
            <MapPin className="w-14 h-14 text-pink-700" />
          </div>
          <h1 className="text-4xl font-bold text-pink-700">Live Location Tracker</h1>
          <p className="text-gray-700 text-base">
            Click below to get your live location and check your current zone status for safety!
          </p>

          <motion.button
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.05 }}
            onClick={handleTrackLocation}
            className="flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 text-white font-bold rounded-full shadow-md transition duration-300 mx-auto"
          >
            <LocateFixed className="w-5 h-5" /> Track My Location
          </motion.button>

          {error && <p className="text-red-600 text-sm mt-2">{error}</p>}

          {location && (
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="bg-pink-100 p-4 mt-4 rounded-xl text-sm text-gray-800 shadow-inner space-y-2"
            >
              <p><strong>Latitude:</strong> {location.latitude}</p>
              <p><strong>Longitude:</strong> {location.longitude}</p>

              <a
                href={`https://www.google.com/maps?q=${location.latitude},${location.longitude}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-700 underline block"
              >
                📍 View on Google Maps
              </a>

              <div className={`mt-4 text-lg font-bold ${
                zone === "Safe" ? "text-green-600" : "text-red-600"
              }`}>
                ✅ You are in a {zone} Zone
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>

      <footer className="bg-gradient-to-r from-pink-600 to-red-500 text-white text-center py-5">
        <p className="text-lg font-semibold">&copy; {new Date().getFullYear()} W-Safe</p>
        <p className="text-sm">Empowering women through safety, awareness & real-time support ❤️</p>
      </footer>
    </>
  );
}
