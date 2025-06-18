import React from "react";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";
import Join from "./Join";

export default function About() {

  const navigate = useNavigate();
  return (
    <> 
    
    <div className="min-h-screen bg-pink-50 py-12 px-6">
      <div className="max-w-5xl mx-auto text-center mb-10">
        <h1 className="text-4xl font-bold text-pink-700 mb-4">Explore Us</h1>
        <p className="text-lg text-gray-700">
          W-Safe is more than just a safety app — it’s a movement to empower women with tools that ensure security, awareness, and community support.
        </p>
      </div>

      {/* Mission Section */}
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-3xl shadow-md mb-10">
        <h2 className="text-2xl font-semibold text-pink-600 mb-4">🌸 Our Mission</h2>
        <p className="text-gray-700 leading-relaxed">
          At W-Safe, our mission is to create a world where every woman feels protected and confident in public and private spaces. By combining technology with compassion, we provide instant help, knowledge of legal rights, and a strong community network.
        </p>
      </div>

      {/* How it works */}
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-3xl shadow-md mb-10">
        <h2 className="text-2xl font-semibold text-pink-600 mb-4">⚙️ How W-Safe Works</h2>
        <ul className="text-gray-700 space-y-4 list-disc list-inside">
          <li><strong>Live Location Tracking:</strong> Share your real-time location with trusted contacts during travel or emergencies.</li>
          <li><strong>SOS Alerts:</strong> Send distress signals with one tap, including your GPS location and emergency message.</li>
          <li><strong>Emergency Contacts:</strong> Quick-dial saved contacts during urgent moments.</li>
          <li><strong>Community Support:</strong> Connect with a supportive network of users for tips, assistance, and awareness.</li>
          <li><strong>Legal Info Hub:</strong> Know your rights with easy access to important Indian laws related to women's safety.</li>
        </ul>
      </div>

      {/* Team Vision */}
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-3xl shadow-md mb-10">
        <h2 className="text-2xl font-semibold text-pink-600 mb-4">👩‍💻 Our Vision</h2>
        <p className="text-gray-700 leading-relaxed">
          W-Safe envisions a future where safety is a right, not a privilege. We aim to expand our platform with AI-powered alerts, government support lines, and multilingual features to serve every corner of India and beyond.
        </p>
      </div>

      {/* Call to Action */}
      <div className="text-center mt-12">
        <button 
        onClick={() => navigate('/Join')}
        className="px-8 py-3 bg-pink-600 text-white font-semibold rounded-full shadow hover:bg-pink-700 transition">
          Join the Movement
        </button>
      </div>
    </div> </>
    
  );
}
