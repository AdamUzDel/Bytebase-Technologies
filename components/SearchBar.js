const SearchBar = () => {
    return (
      <div className="flex items-center bg-white w-auto rounded-md shadow-md p-o">
        <input
          type="text"
          className="w-auto px-4 py-2 border-none rounded-l-md focus:outline-none"
          placeholder='Search: "Oil Filter"'
        />
        <div className="me-2">Animated text</div>
        <button className="px-4 py-2 bg-blue-500 text-white rounded-r-md m-0 h-full">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.25 4.25-4.25 4.25m5-5H3m0 0v-1.5a.75.75 0 011.5 0v1.5a.75.75 0 01-.75.75H3m0 0h-.75a.75.75 0 01-.75-.75v-1.5a.75.75 0 01.75-.75H3z" />
          </svg>
        </button>
      </div>
    );
  };
  
  export default SearchBar;
  