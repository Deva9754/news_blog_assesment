import React from 'react'

const ShimmerCard = () => {
    return (
      <div className="border p-4 rounded-lg shadow-md animate-pulse">
      <div className="w-full h-40 bg-gray-300 rounded-md mb-2"></div>
      <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
      <div className="h-3 bg-gray-300 rounded w-full mb-2"></div>
      <div className="h-3 bg-gray-300 rounded w-5/6"></div>
    </div>
      );
  };
  
export default ShimmerCard;