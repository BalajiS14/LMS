import React, { useState } from 'react';
import { assets } from '../../assets/assets';
import { useNavigate } from 'react-router-dom';

const SearchBar = ({data}) => {
  const navigate = useNavigate();
  const [input, setInput] = useState(data ? data:'');

  const onSearchHandler = (e) => {
    e.preventDefault();
    if (input.trim()) {
      navigate('/course-list/' + input);
    }
  };

  return (
    <div className="w-full flex justify-center">
      <form 
        onSubmit={onSearchHandler} 
        className="max-w-xl w-full flex items-center bg-white border border-gray-300 rounded-lg shadow-md p-2"
      >
        {/* Test with a placeholder if the icon is missing */}
        <img 
          src={assets.search_icon} 
          alt="search_icon" 
          className="w-5 h-5 ml-3 opacity-60" 
        />
        <input
          type="text"
          placeholder="Search for courses"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="w-full px-4 py-2 border-none outline-none text-gray-700 placeholder-gray-400"
        />
        <button 
          type="submit" 
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-5 py-2 rounded-lg"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
