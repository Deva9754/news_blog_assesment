

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import Navbar from "../components/Navbar";
// import ArticleCard from "../components/ArticleCard";
// import Shimmer from "../shimmer/Shimmer";
// import Carousel from "../components/Carousel";
// import SearchBar from "../components/SearchBar"; // Import SearchBar

// const Home = () => {
//   const [articles, setArticles] = useState([]);
//   const [filteredArticles, setFilteredArticles] = useState([]);
//   const [category, setCategory] = useState("general");
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchArticles = async () => {
//       setLoading(true);
//       setError(null);
//       try {
//         const response = await axios.get(
//           `https://saurav.tech/NewsAPI/top-headlines/category/${category}/in.json`
//         );
//         if (response.data.articles) {
//           setArticles(response.data.articles);
//           setFilteredArticles(response.data.articles); // Set both original and filtered articles
//         } else {
//           setArticles([]);
//           setFilteredArticles([]);
//         }
//       } catch (err) {
//         setError("Failed to fetch articles. Please try again later.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchArticles();
//   }, [category]);

//   return (
//     <div className="bg-gradient-to-r from-[#020024] to-[#00D4FF]">
//       <Navbar setCategory={setCategory} />
//       <SearchBar
//         articles={articles}
//         setFilteredArticles={setFilteredArticles}
//         resetCategory={() => setFilteredArticles(articles)} // Reset when search is cleared
//       />
//       <Carousel />

//       <div className="p-4 grid grid-cols-1 md:grid-cols-3 gap-6">
//         {filteredArticles.length > 2 && (
//           <div className="md:col-span-2 flex flex-col space-y-6">
//             {[filteredArticles[0], filteredArticles[1], filteredArticles[2]].map((article, index) => (
//               <div key={index} className="bg-transparent shadow-lg rounded-lg overflow-hidden flex ">
//                 <div className="p-6 flex flex-col justify-between w-1/2">
//                   <h2 className="text-2xl font-bold mb-4 text-white">{article.title}</h2>
//                   <p className="text-gray-300 mb-4">{article.description}</p>
//                   <a href={article.url} className="text-blue-500 font-semibold" target="_blank" rel="noopener noreferrer">Read More</a>
//                 </div>
//                 <img
//                   src={article.urlToImage}
//                   alt={article.title}
//                   className="w-1/2 h-96 object-cover"
//                 />
//               </div>
//             ))}
//           </div>
//         )}

//         <div className="flex flex-col gap-4">
//           {filteredArticles.slice(3, 7).map((article, index) => (
//             <div key={index} className="bg-transparent shadow-lg rounded-lg overflow-hidden flex flex-row ">
//               <div className="p-6 flex flex-col justify-between w-2/3">
//                 <h2 className="text-xl font-bold mb-2 text-gray-100">{article.title}</h2>
//                 <p className="text-gray-300 mb-2">{article.description}</p>
//                 <a href={article.url} className="text-blue-100 font-semibold" target="_blank" rel="noopener noreferrer">Read More</a>
//               </div>
//               <img
//                 src={article.urlToImage}
//                 alt={article.title}
//                 className="w-1/3 h-48 object-cover"
//               />
//             </div>
//           ))}
//         </div>
//       </div>

//       <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
//         {loading && (
//           <>
//             {Array(6).fill().map((_, index) => (
//               <Shimmer key={index} />
//             ))}
//           </>
//         )}
//         {error && <p className="text-center text-red-500 col-span-3">{error}</p>}
//         {!loading && !error &&
//           filteredArticles.slice(7).map((article, index) => (
//             <ArticleCard key={index} article={article} />
//           ))}
//       </div>
//     </div>
//   );
// };

// export default Home;


import React, { useState, useEffect, useCallback, useMemo, lazy, Suspense } from "react";
import axios from "axios";

// Lazy load components
const Navbar = lazy(() => import("../components/Navbar"));
const ArticleCard = lazy(() => import("../components/ArticleCard"));
const Shimmer = lazy(() => import("../shimmer/Shimmer"));
const Carousel = lazy(() => import("../components/Carousel"));
const SearchBar = lazy(() => import("../components/SearchBar"));

const Home = () => {
  const [articles, setArticles] = useState([]);
  const [filteredArticles, setFilteredArticles] = useState([]);
  const [category, setCategory] = useState("general");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    const fetchArticles = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await axios.get(
          `https://saurav.tech/NewsAPI/top-headlines/category/${category}/in.json`,
          { signal: controller.signal }
        );
        if (response.data.articles) {
          setArticles(response.data.articles);
          setFilteredArticles(response.data.articles);
        } else {
          setArticles([]);
          setFilteredArticles([]);
        }
      } catch (err) {
        if (err.name !== "AbortError") {
          setError("Failed to fetch articles. Please try again later.");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
    return () => controller.abort();
  }, [category]);

  const handleCategoryChange = useCallback((newCategory) => {
    setCategory(newCategory);
  }, []);

  const displayedArticles = useMemo(() => filteredArticles.slice(7), [filteredArticles]);

  return (
    <div className="bg-gradient-to-r from-[#020024] to-[#00D4FF]">
      <Suspense fallback={<div>Loading Navbar...</div>}>
        <Navbar setCategory={handleCategoryChange} />
      </Suspense>
      
      <Suspense fallback={<div>Loading SearchBar...</div>}>
        <SearchBar
          articles={articles}
          setFilteredArticles={setFilteredArticles}
          resetCategory={() => setFilteredArticles(articles)}
        />
      </Suspense>

      <Suspense fallback={<div>Loading Carousel...</div>}>
        <Carousel />
      </Suspense>

      <div className="p-4 grid grid-cols-1 md:grid-cols-3 gap-6">
        {filteredArticles.length > 2 && (
          <div className="md:col-span-2 flex flex-col space-y-6">
            {[filteredArticles[0], filteredArticles[1], filteredArticles[2]].map((article, index) => (
              <div key={index} className="bg-transparent shadow-lg rounded-lg overflow-hidden flex">
                <div className="p-6 flex flex-col justify-between w-1/2">
                  <h2 className="text-2xl font-bold mb-4 text-white">{article.title}</h2>
                  <p className="text-gray-300 mb-4">{article.description}</p>
                  <a href={article.url} className="text-blue-500 font-semibold" target="_blank" rel="noopener noreferrer">
                    Read More
                  </a>
                </div>
                <img
                  src={article.urlToImage || "/fallback-image.jpg"}
                  alt={article.title}
                  className="w-1/2 h-96 object-cover"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        )}

        <div className="flex flex-col gap-4">
          {filteredArticles.slice(3, 7).map((article, index) => (
            <div key={index} className="bg-transparent shadow-lg rounded-lg overflow-hidden flex flex-row">
              <div className="p-6 flex flex-col justify-between w-2/3">
                <h2 className="text-xl font-bold mb-2 text-gray-100">{article.title}</h2>
                <p className="text-gray-300 mb-2">{article.description}</p>
                <a href={article.url} className="text-blue-100 font-semibold" target="_blank" rel="noopener noreferrer">
                  Read More
                </a>
              </div>
              <img
                src={article.urlToImage || "/fallback-image.jpg"}
                alt={article.title}
                className="w-1/3 h-48 object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
        {loading && (
          <Suspense fallback={<div>Loading Shimmer...</div>}>
            {Array(6).fill().map((_, index) => (
              <Shimmer key={index} />
            ))}
          </Suspense>
        )}
        {error && <p className="text-center text-red-500 col-span-3">{error}</p>}
        {!loading && !error && displayedArticles.map((article, index) => (
          <Suspense key={index} fallback={<div>Loading Article...</div>}>
            <ArticleCard key={index} article={article} />
          </Suspense>
        ))}
      </div>
    </div>
  );
};

export default Home;
