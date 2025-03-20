import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

const SearchBar = ({ articles, setFilteredArticles, resetCategory }) => {
  const [query, setQuery] = useState("");

  const handleSearch = (event) => {
    const searchTerm = event.target.value.toLowerCase();
    setQuery(searchTerm);

    if (searchTerm === "") {
      resetCategory(); 
      return;
    }

    const filtered = articles.filter((article) =>
      article.title.toLowerCase().includes(searchTerm)
    );

    setFilteredArticles(filtered);
  };

  const clearSearch = () => {
    setQuery("");
    resetCategory(); 
  };

  return (
    <div className="flex justify-center my-4">
      <TextField
        variant="outlined"
        placeholder="Search articles..."
        value={query}
        onChange={handleSearch}
        sx={{ width: "100%", maxWidth: 600, backgroundColor: "white", borderRadius: "8px" }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
          endAdornment: query && (
            <InputAdornment position="end">
              <IconButton onClick={clearSearch}>
                <CloseIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </div>
  );
};

export default SearchBar;
