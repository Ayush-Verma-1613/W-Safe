import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send, AlertTriangle } from "lucide-react";

function Community() {
  const [newPost, setNewPost] = useState("");
  const [posts, setPosts] = useState([
    "🚨 Just saw a suspicious person near the metro station. Stay alert!",
    "✅ Safe zone reported near City Park. Many women walking comfortably.",
    "🚨 There were no street lights on the 4th Street last night."
  ]);

  const handlePostSubmit = (e) => {
    e.preventDefault();
    if (newPost.trim()) {
      setPosts([newPost, ...posts]);
      setNewPost("");
    } else {
      alert("⚠️ Please enter a message before posting.");
    }
  };

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-100 to-red-100 px-4 py-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto bg-white rounded-3xl shadow-xl p-8 space-y-10"
        >
          <div className="text-center">
            <h2 className="text-4xl font-bold text-purple-700 mb-2">🤝 Community Support for Women's Safety</h2>
            <p className="text-gray-600 text-lg">
              A supportive space to share, care, and be aware together.
            </p>
          </div>

          {/* Quick Help */}
          <section className="bg-purple-50 p-6 rounded-xl shadow-md">
            <h3 className="text-2xl font-semibold text-purple-600 mb-3">🚨 Quick Emergency Help</h3>
            <ul className="grid sm:grid-cols-2 gap-3 text-gray-700">
              <li><strong>112:</strong> National Emergency Number</li>
              <li><strong>100:</strong> Police Helpline</li>
              <li><strong>1091:</strong> Women’s Helpline</li>
              <li><strong>1098:</strong> Child Helpline</li>
              <li><strong>9152987821:</strong> iCall Mental Health Support</li>
            </ul>
          </section>

          {/* Post Alert */}
          <section className="bg-pink-50 p-6 rounded-xl shadow-md">
            <h3 className="text-2xl font-semibold text-pink-600 mb-2">💬 Post a Safety Alert</h3>
            <form onSubmit={handlePostSubmit} className="flex flex-col space-y-4">
              <textarea
                value={newPost}
                onChange={(e) => setNewPost(e.target.value)}
                placeholder="Write a safety update or warning..."
                className="border border-gray-300 rounded-md p-3 h-28 resize-none"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="flex items-center justify-center gap-2 bg-gradient-to-r from-pink-500 to-red-500 text-white font-bold py-2 px-6 rounded-full"
              >
                <Send size={18} /> Post Alert
              </motion.button>
            </form>
          </section>

          {/* Live Community Posts */}
          <section className="bg-white p-6 rounded-xl border shadow-sm">
            <h3 className="text-2xl font-semibold text-purple-600 mb-4">📢 Live Community Updates</h3>
            {posts.length === 0 ? (
              <p className="text-gray-600 italic">No posts yet. Be the first to share something!</p>
            ) : (
              <ul className="space-y-3">
                {posts.map((post, idx) => (
                  <li
                    key={idx}
                    className="bg-pink-100 p-3 rounded-lg shadow text-gray-800 flex items-start gap-2"
                  >
                    <AlertTriangle className="text-red-500 mt-1" size={20} />
                    <span>{post}</span>
                  </li>
                ))}
              </ul>
            )}
          </section>

          {/* Safety Tips */}
          <section>
            <h3 className="text-2xl font-semibold text-purple-600 mb-3">💡 Safety & Empowerment Tips</h3>
            <ul className="list-disc pl-5 text-gray-700 space-y-2">
              <li>Share your location with trusted contacts when traveling alone.</li>
              <li>Keep safety apps like <strong>W-Safe</strong>, <strong>Raksha</strong>, or <strong>bSafe</strong>.</li>
              <li>Save emergency numbers and make them easily accessible.</li>
              <li>Don't stay silent. Report unsafe incidents to authorities.</li>
              <li>Follow safety communities for real-time tips and alerts.</li>
            </ul>
          </section>

          {/* Community Values */}
          <section>
            <h3 className="text-2xl font-semibold text-purple-600 mb-3">🧍 Our Community Values</h3>
            <ul className="list-disc pl-5 text-gray-700 space-y-2">
              <li><strong>Respect:</strong> Every voice matters. Kindness first.</li>
              <li><strong>Support:</strong> We rise by lifting others.</li>
              <li><strong>Privacy:</strong> Share only what you're comfortable with.</li>
              <li><strong>Zero Tolerance:</strong> No hate, trolling, or harassment allowed.</li>
            </ul>
          </section>

          <p className="text-center text-sm text-gray-500 italic mt-10">
            “Empowered women empower others. Together, we are stronger.” 💜
          </p>
        </motion.div>
      </div>

      <footer className="bg-gradient-to-r from-pink-600 to-red-500 text-white text-center py-5">
        <p className="text-lg font-semibold">&copy; {new Date().getFullYear()} W-Safe</p>
        <p className="text-sm">Empowering women through safety, support, and shared strength ❤️</p>
      </footer>
    </>
  );
}

export default Community;
