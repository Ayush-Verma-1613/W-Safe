import React from 'react';

const Join = () => {
  return (
    <div className="min-h-screen p-10 bg-gradient-to-br from-purple-50 to-pink-100">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-purple-700 mb-4">🌟 Join the Movement</h1>
        <p className="text-lg text-gray-700 mb-8">
          Be a part of the change. Join us to promote women's safety, raise awareness, and build a stronger community.
        </p>
        <form className="space-y-4 bg-white p-6 rounded-xl shadow-xl">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full p-3 border border-gray-300 rounded-lg"
            required
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 border border-gray-300 rounded-lg"
            required
          />
          <textarea
            placeholder="Why do you want to join?"
            className="w-full p-3 border border-gray-300 rounded-lg"
            rows="4"
            required
          />
          <button
            type="submit"
            className="bg-pink-600 text-white px-6 py-3 rounded-lg hover:bg-pink-700"
          >
            Submit & Join
          </button>
        </form>
      </div>
    </div>
  );
};

export default Join;
