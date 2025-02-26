import React from "react";
import { useNavigate } from "react-router-dom";

const ArticleCard = ({ article }) => {
  const navigate = useNavigate();

  return (
    <div className="bg-transparent rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300">
      <img
        src={article.urlToImage}
        alt={article.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-lg font-semibold  text-white">{article.title}</h2>
        <p className="text-gray-300 text-darkgrey text-sm mt-2 ">{article.description}</p>
        <button
          onClick={() => navigate(`/article/${encodeURIComponent(article.title)}`, { state: { article } })}
          className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
        >
          View Details
        </button>
      </div>
    </div>
  );
};

export default ArticleCard;
