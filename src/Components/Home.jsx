import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { motion } from 'framer-motion';

const Home = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await axios.get("http://localhost:3000/profile", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUser(res.data.user);
      } catch (err) {
        console.error("Error fetching user profile:", err);
      }
    };

    fetchProfile();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-200 to-yellow-100 p-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-7xl mx-auto text-center py-12"
      >
        <h1 className="text-6xl md:text-7xl font-extrabold text-pink-700 mb-6 animate-pulse">
          Welcome to <span className="text-purple-700">W-Safe</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-800 mb-4 font-medium">
          Empowering Women with Safety Tools, Community Support, and Awareness
        </p>
        {user && (
          <p className="text-lg font-semibold text-gray-900 mb-6">
            WELCOME {user.name} 
          </p>
        )}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate('/explore')}
          className="px-10 py-4 bg-gradient-to-r from-pink-600 via-red-500 to-yellow-500 hover:from-pink-700 text-white text-lg rounded-full shadow-xl transition-all"
        >
          Explore Now
        </motion.button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1.5 }}
        className="mt-20 grid gap-10 md:grid-cols-2 lg:grid-cols-3 px-4 max-w-7xl mx-auto"
      >
        {[
          {
            title: 'Live Location Tracking',
            desc: 'Let your trusted contacts follow your real-time location during unsafe situations.',
            color: 'from-red-100 to-red-200'
          },
          {
            title: 'SOS Emergency Alerts',
            desc: 'One-click SOS button sends help requests to pre-selected emergency contacts instantly.',
            color: 'from-rose-100 to-red-200'
          },
          {
            title: 'Community Support',
            desc: 'Connect with local women’s support groups, share alerts, and help others stay safe.',
            color: 'from-pink-100 to-pink-200'
          },
          {
            title: 'Legal Help & Laws',
            desc: 'Understand your legal rights, report incidents and access legal aid and helplines.',
            color: 'from-violet-100 to-pink-200'
          },
          {
            title: 'Safe & Danger Zones',
            desc: 'Real-time data about which areas are safe or unsafe based on community alerts.',
            color: 'from-green-100 to-red-100'
          },
          {
            title: 'Emergency Directory',
            desc: 'Quick access to local police, hospitals, helplines and your emergency contacts.',
            color: 'from-blue-100 to-pink-200'
          }
        ].map((card, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.03 }}
            className={`bg-gradient-to-br ${card.color} p-6 rounded-2xl shadow-2xl border-l-8 border-pink-500`}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-3">{card.title}</h3>
            <p className="text-gray-800 text-md leading-relaxed">{card.desc}</p>
          </motion.div>
        ))}
      </motion.div>

      <footer className="bg-pink-600 text-white mt-20">
        <div className="bg-pink-700 text-center py-4 text-sm">
          &copy; {new Date().getFullYear()} W-Safe. All rights reserved. | Made with ❤️ to promote women’s safety.
        </div>
      </footer>
    </div>
  );
};

export default Home;
