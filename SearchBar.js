import React from "react";
import { BsGlobe2 } from "react-icons/bs";
import { FaSearchengin } from "react-icons/fa";

function SearchBar(props) {
  const buttonStyling = `flex space-x-3 mr-2 font-semibold bg-gradient-to-r from-blue-500 via-indigo-700 to-indigo-900 
                        text-gray-100 rounded-sm ring-2 ring-blue-200 px-6 py-2 
                        hover:bg-white  hover:text-white hover:ring-slate-300 mx-8 inline`;
  return (
    <div>
      <form
        className="h-48 mb-5 grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 place-items-center"
        onSubmit={props.searchData}
      >
        <div className="lg:justify-self-end md:justify-self-end sm:justify-self-center">
          <BsGlobe2 size="2rem" color="slateblue" />
        </div>

        <input
          type="text"
          name="query"
          className="ring-2 ring-gray-dark px-3 rounded-lg py-2 outline-none hover:scale-110 hover:ring-green-400
                        transition-all duration-700 ease-in-out"
          placeholder="search..."
          value={props.query}
          onChange={props.handleQuery}
        />

        <div className="lg:justify-self-start md:justify-self-start sm:justify-self-start">
          <button type="submit" className={buttonStyling}>
            <p>Search</p>
            <FaSearchengin size="1.5rem" />
          </button>
        </div>
      </form>
    </div>
  );
}

export default SearchBar;
