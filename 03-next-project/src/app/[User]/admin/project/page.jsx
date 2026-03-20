"use client";
import { useEffect, useState } from "react";

export default function Page() {
  const [joke, setJoke] = useState(null);
  const [show, setShow] = useState(false);

  const getJoke = async () => {
    const res = await fetch(
      "https://official-joke-api.appspot.com/random_joke"
    );
    const data = await res.json();
    setJoke(data);
    setShow(false); // hide punchline for new joke
  };

  useEffect(() => {
    getJoke();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-500 via-pink-500 to-red-500 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold text-white mb-2">😂 Joke Generator</h1>
          <p className="text-white text-lg opacity-90">Get a laugh with random jokes!</p>
        </div>

        {/* Joke Card */}
        {joke && (
          <div className="bg-white rounded-3xl shadow-2xl p-8 mb-8">
            {/* Setup */}
            <div className="mb-6">
              <div className="text-gray-700 text-xl font-semibold leading-relaxed p-6 bg-gray-50 rounded-2xl border-l-4 border-purple-500">
                {joke.setup}
              </div>
            </div>

            {/* Punchline */}
            {show && (
              <div className="mb-6 animate-fadeIn">
                <div className="text-white text-2xl font-bold leading-relaxed p-6 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl shadow-lg transform transition hover:scale-105">
                  🎉 {joke.punchline}
                </div>
              </div>
            )}

            {/* Buttons */}
            <div className="flex gap-4 flex-wrap justify-center">
              {!show ? (
                <button
                  onClick={() => setShow(true)}
                  className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-full hover:shadow-lg transform transition hover:scale-105 active:scale-95"
                >
                  Reveal Punchline 🎪
                </button>
              ) : (
                <button
                  onClick={() => setShow(false)}
                  className="px-8 py-3 bg-gradient-to-r from-gray-600 to-gray-700 text-white font-bold rounded-full hover:shadow-lg transform transition hover:scale-105 active:scale-95"
                >
                  Hide Punchline 🙈
                </button>
              )}

              <button
                onClick={getJoke}
                className="px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold rounded-full hover:shadow-lg transform transition hover:scale-105 active:scale-95"
              >
                Next Joke ➜
              </button>
            </div>
          </div>
        )}

        {/* Loading State */}
        {!joke && (
          <div className="text-center text-white text-lg">
            Loading your joke... ⏳
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }
      `}</style>
    </div>
  );
}