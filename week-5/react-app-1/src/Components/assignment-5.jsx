import React from "react";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-start p-10 space-y-16">
      
      {/* Diagram Section */}
      <div className="flex flex-col items-center">
        <div className="bg-gradient-to-b from-indigo-200 to-blue-800 text-white w-20 h-20 rounded-full flex items-center justify-center shadow-lg">
          App
        </div>

        <div className="flex gap-10 mt-12 relative">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="flex flex-col items-center">
              {/* Line */}
              <div className="w-px h-10 bg-black"></div>

              {/* Product Node */}
              <div className="bg-gradient-to-b from-pink-200 to-red-700 text-white w-20 h-20 rounded-full flex items-center justify-center shadow-md">
                Product
              </div>
            </div>
          ))}
        </div>
      </div>
);
}