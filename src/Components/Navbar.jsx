import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleLogout = () => {
    localStorage.removeItem("token"); // Clear token
    navigate("/"); // Redirect to login
  };

  const NavLinks = () => (
    <>
      <li><Link to="/home" onClick={toggleMenu}>Home</Link></li>
      <li><Link to="/community" onClick={toggleMenu}>Community</Link></li>
      <li><Link to="/laws" onClick={toggleMenu}>Laws</Link></li>
      <li><Link to="/contacts" onClick={toggleMenu}>Contacts</Link></li>
      <li><Link to="/location" onClick={toggleMenu}>Location</Link></li>
      <li><Link to="/sos" onClick={toggleMenu}>SOS</Link></li>
      <li>
        <button
          onClick={handleLogout}
          className="bg-white text-pink-600 px-3 py-1 rounded hover:bg-pink-100 transition"
        >
          Logout
        </button>
      </li>
    </>
  );

  return (
    <nav className="bg-pink-600 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/home" className="text-2xl font-bold">W-Safe</Link>

        {/* Mobile button */}
        <button className="md:hidden" onClick={toggleMenu}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Desktop menu */}
        <ul className="hidden md:flex space-x-6 text-lg font-medium items-center">
          <NavLinks />
        </ul>
      </div>

      {/* Mobile dropdown */}
      {isOpen && (
        <ul className="md:hidden px-4 pb-4 space-y-3 text-lg font-medium bg-pink-700">
          <NavLinks />
        </ul>
      )}
    </nav>
  );
}
