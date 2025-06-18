import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const [form, setForm] = useState({ email: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  // Handle input change
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Final fixed login handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { email, password } = form;

      const res = await axios.post("http://localhost:3000/login", {
        email,
        password,
      });

      localStorage.setItem("token", res.data.token); // ✅ Save token
      // alert("Login successful");
      navigate("/home"); // ✅ Navigate to Home
    } catch (err) {
      console.error("Login failed", err);
      alert(err.response?.data?.message || "Login error");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-pink-100 via-white to-purple-100 px-4">
      <div className="bg-white/90 backdrop-blur-xl p-10 rounded-3xl shadow-2xl w-full max-w-md">
        <h2 className="text-4xl font-bold text-center text-pink-700 mb-2">Welcome Back</h2>
        <p className="text-center text-gray-600 mb-8">Login to your W-Safe account</p>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block mb-1 text-sm font-semibold text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400"
              required
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-semibold text-gray-700">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={form.password}
                onChange={handleChange}
                placeholder="Password"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400 pr-12"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-3 text-sm text-gray-500 hover:text-gray-800"
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-pink-600 hover:bg-pink-700 text-white font-bold py-3 rounded-xl shadow-md transition duration-300"
          >
            Login
          </button>
        </form>

        <p className="text-center text-sm mt-6 text-gray-600">
          Don’t have an account?{' '}
          <Link to="/register" className="text-pink-600 font-semibold hover:underline">
            Register here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
