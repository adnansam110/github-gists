import React, { useState } from "react";

const SearchBox = ({ getSearchedUserGists }) => {
  const [searchedText, setSearchedText] = useState("");
  return (
    <div className="flex items-center">
      <input
        value={searchedText}
        type={"text"}
        className="rounded-lg p-2 border-0 h-[45px] w-[300px] outline-none focus:outline-none"
        onChange={(e) => setSearchedText(e.target.value)}
      />
      <div
        onClick={() => getSearchedUserGists(searchedText)}
        className="bg-black rounded-lg w-[100px] h-[45px] text-gray-300 flex justify-center items-center cursor-pointer hover:bg-gray-900 transition duration-[200ms] ml-5"
      >
        Search
      </div>
    </div>
  );
};

export default SearchBox;
