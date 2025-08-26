function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-indigo-200 via-purple-200 to-pink-200 gap-6 p-8">
      <p className="text-2xl font-bold text-white bg-gradient-to-r from-purple-500 to-pink-500 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
        Gradient Background + Hover Scale
      </p>

      <button className="px-6 py-3 bg-blue-500 text-white font-medium rounded-full shadow-md hover:bg-blue-600 active:scale-95 transition-all duration-200">
        Hover & Active Button
      </button>

      <div className="w-32 h-32 bg-green-400 rounded-full animate-bounce shadow-xl"></div>

      <div className="w-32 h-32 bg-yellow-400 rounded-lg shadow-lg hover:rotate-6 transition-transform duration-500"></div>

      <div className="text-lg text-gray-700 animate-pulse">
        Pulsing Text Animation
      </div>
    </div>
  );
}

export default App;
