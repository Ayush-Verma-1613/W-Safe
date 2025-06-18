import React, { useState, useEffect } from 'react';

const SosButton = () => {
  const [location, setLocation] = useState(null);
  const [contacts, setContacts] = useState([]);
  const [newContact, setNewContact] = useState('');

  useEffect(() => {
    // Load saved contacts from localStorage on mount
    const savedContacts = JSON.parse(localStorage.getItem("sosContacts")) || [];
    setContacts(savedContacts);
  }, []);

  useEffect(() => {
    // Save contacts to localStorage on change
    localStorage.setItem("sosContacts", JSON.stringify(contacts));
  }, [contacts]);

  const handleSOS = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const userLocation = {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          };
          setLocation(userLocation);
          alert(`🚨 SOS Sent!\nLocation: ${userLocation.latitude}, ${userLocation.longitude}`);
        },
        (error) => {
          console.error("Geolocation error:", error);
          alert("Could not access location. Please enable location services.");
        }
      );
    } else {
      alert("Geolocation not supported by your browser.");
    }
  };

  const handleAddContact = () => {
    if (newContact && !contacts.includes(newContact)) {
      setContacts([...contacts, newContact]);
      setNewContact('');
    }
  };

  const handleDeleteContact = (index) => {
    const updated = [...contacts];
    updated.splice(index, 1);
    setContacts(updated);
  };

  const helplineNumber = "112";

  return (
    <>
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-red-700 via-pink-600 to-purple-800 text-white px-6 py-10">
        <div className="text-center space-y-6 max-w-2xl">
          <h1 className="text-6xl font-extrabold animate-pulse">🚨 SOS</h1>
          <p className="text-lg md:text-xl font-medium">
            Tap the button below to send an emergency SOS alert with your live location to your emergency contacts.
          </p>

          {/* SOS Button */}
          <button
            onClick={handleSOS}
            className="mt-6 px-10 py-5 bg-white text-red-700 text-2xl font-bold rounded-2xl shadow-xl hover:bg-red-100 transition transform hover:scale-105 animate-bounce"
          >
            SEND SOS
          </button>

          {/* Location & Helpline Links */}
          <div className="mt-8 flex flex-col md:flex-row justify-center gap-4">
            {location && (
              <a
                href={`https://www.google.com/maps?q=${location.latitude},${location.longitude}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-white text-purple-700 font-semibold rounded-xl hover:bg-purple-100 transition"
              >
                📍 Share Location
              </a>
            )}
            <a
              href={`tel:${helplineNumber}`}
              className="px-6 py-3 bg-white text-red-600 font-semibold rounded-xl hover:bg-red-100 transition"
            >
              📞 Call Helpline
            </a>
          </div>

          {/* Add Contact Input */}
          <div className="mt-10 w-full max-w-lg mx-auto">
            <h3 className="text-xl font-semibold mb-2">Add Emergency Contact:</h3>
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="text"
                placeholder="Enter mobile number"
                value={newContact}
                onChange={(e) => setNewContact(e.target.value)}
                className="w-full px-4 py-2 rounded-lg text-black bg-white placeholder-pink-700"
              />
              <button
                onClick={handleAddContact}
                className="bg-white text-pink-700 px-4 py-2 rounded-lg font-semibold hover:bg-pink-100 transition"
              >
                ➕ Add
              </button>
            </div>
          </div>

          {/* Contact List */}
          {contacts.length > 0 && (
            <div className="mt-6 bg-white text-black p-4 rounded-xl shadow-xl w-full max-w-lg text-left">
              <h4 className="font-semibold text-pink-600 mb-2">Saved Contacts:</h4>
              <ul className="space-y-2">
                {contacts.map((num, index) => (
                  <li
                    key={index}
                    className="flex flex-col sm:flex-row justify-between sm:items-center bg-pink-100 p-3 rounded-lg"
                  >
                    <span className="text-lg">{num}</span>
                    <div className="flex gap-2 mt-2 sm:mt-0">
                      {/* 📞 Call Contact */}
                      <a
                        href={`tel:${num}`}
                        className="px-3 py-1 bg-green-500 text-white rounded-md hover:bg-green-600"
                      >
                        📞 Call
                      </a>

                      {/* 📍 Send Location via SMS */}
                      {location && (
                        <a
                          href={`sms:${num}?body=SOS! I need help. My location: https://www.google.com/maps?q=${location.latitude},${location.longitude}`}
                          className="px-3 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                        >
                          📍 Send Location
                        </a>
                      )}

                      {/* 🗑️ Delete Contact */}
                      <button
                        onClick={() => handleDeleteContact(index)}
                        className="px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600"
                      >
                        🗑️
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-pink-500 text-white text-center py-4 mt-10">
        <p>&copy; {new Date().getFullYear()} W-Safe | Empowering Women’s Safety</p>
        <p className="text-sm">Made with ❤️ to promote awareness and legal protection</p>
      </footer>
    </>
  );
};

export default SosButton;
