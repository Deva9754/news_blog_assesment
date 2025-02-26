import React from "react";

const ShimmerList = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 animate-pulse">
      {Array(6).fill("").map((_, index) => (
        <div key={index} className="border p-4 rounded-lg shadow-md bg-gray-200">
          <div className="w-full h-40 bg-gray-300 rounded-md mb-2"></div>
          <div className="h-6 bg-gray-300 w-3/4 mb-2"></div>
          <div className="h-4 bg-gray-300 w-full mb-2"></div>
          <div className="h-4 bg-gray-300 w-5/6"></div>
        </div>
      ))}
    </div>
  );
};

export default ShimmerList;
