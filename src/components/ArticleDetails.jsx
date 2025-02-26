
import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { FaThumbsUp } from "react-icons/fa";

const ArticleDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { article } = location.state || {};
  const { t } = useTranslation();

  // State for comments and likes
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [likes, setLikes] = useState(0);

  useEffect(() => {
    if (typeof window !== "undefined" && typeof window.scrollTo === "function") {
      window.scrollTo(0, 0);
    }
  }, []);
  
  // Load comments and likes from localStorage when component mounts
  useEffect(() => {
    if (article) {
      const savedComments = JSON.parse(localStorage.getItem(`comments-${article.title}`)) || [];
      setComments(savedComments);

      const savedLikes = JSON.parse(localStorage.getItem(`likes-${article.title}`)) || 0;
      setLikes(savedLikes);
    }
  }, [article]);

  // Save likes to localStorage
  const handleLike = () => {
    const updatedLikes = likes + 1;
    setLikes(updatedLikes);
    localStorage.setItem(`likes-${article.title}`, JSON.stringify(updatedLikes));
  };

  // Add a new comment and store it in localStorage
  const handleAddComment = () => {
    if (newComment.trim() === "") return;

    const updatedComments = [...comments, { text: newComment, likes: 0 }];
    setComments(updatedComments);
    localStorage.setItem(`comments-${article.title}`, JSON.stringify(updatedComments));

    setNewComment("");
  };

  if (!article) return <p className="text-center mt-10">{t("article.noArticle")}</p>;

  return (
    <div className="min-h-screen flex justify-center items-center bg-[#192236] dark:bg-gray-900 p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl w-full p-6 bg-[#192236] dark:bg-gray-800 shadow-2xl rounded-2xl backdrop-blur-lg"
      >
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="mb-4 text-blue-500 dark:text-blue-400 hover:underline transition-all"
        >
          ← {t("article.back")}
        </button>

        {/* Title */}
        <motion.h1
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-gray-100 dark:text-gray-200"
        >
          {article.title}
        </motion.h1>

        <p className="text-gray-200 dark:text-gray-400 text-sm mt-1">
          {t("article.by")} {article.author || t("article.unknown")} | {new Date(article.publishedAt).toDateString()} | {article.source.name}
        </p>

        {/* Image */}
        <motion.img
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          src={article.urlToImage}
          alt={article.title}
          className="w-full h-64 object-cover mt-4 rounded-md shadow-md"
        />

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-gray-300 dark:text-gray-300 mt-4"
        >
          {article.description}
        </motion.p>

        {/* Full Content */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-gray-300 dark:text-gray-200 mt-4 leading-relaxed"
        >
          {article.content}
        </motion.p>

        {/* Like & Comment Section */}
        <div className="flex justify-between items-center mt-6">
          <button onClick={handleLike} className="flex items-center gap-2 text-blue-500 hover:text-blue-600">
            <FaThumbsUp /> {likes}
          </button>
        </div>

        {/* Comment Section */}
        <div className="mt-6">
          <h2 className="text-xl font-semibold text-gray-100 dark:text-gray-200 mb-2">{t("Comments")}</h2>

          {/* Comments List */}
          <div className="mt-2 space-y-2">
            {comments.length > 0 ? (
              comments.map((comment, index) => (
                <div key={index} className="p-2 border rounded-lg bg-gray-50 dark:bg-gray-100 dark:text-gray-200">
                  {comment.text}
                </div>
              ))
            ) : (
              <p className="text-gray-500 dark:text-gray-400">{t("No Comments Yet")}</p>
            )}
          </div>

          {/* Input Field */}
          <div className="flex gap-2 mt-3">
            <input
              type="text"
              placeholder={t("Enter Your Comments")}
              className="w-full p-2 border rounded-lg bg-gray-50 dark:bg-gray-700 dark:text-gray-200"
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
            />
            <button
              onClick={handleAddComment}
              className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
            >
              {t("Post")}
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ArticleDetails;
