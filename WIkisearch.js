import React, { useState } from "react";
import axios from "axios";
import SearchBar from "./SearchBar";
import DataVIew from "./DataVIew";
import Header from "./Header";
import { Routes, Route } from "react-router-dom";
import Contact from "./Contact";


function Wikisearch() {
  const [searchList, setSearchList] = useState([]);
  const [query, setQuery] = useState("");
  const [display, setDisplay] = useState(true);
  const handleQuery = (e) => {
    setQuery(e.target.value);
  };

  const handleDisplay = () => {
    setDisplay(!display);
  };

  const searchData = (e) => {
    e.preventDefault();
    axios
      .get(
        `https://en.wikipedia.org//w/api.php?origin=*&action=query&format=json&list=search&utf8=1&srsearch=${query}`
      )
      .then((response) => {
        setSearchList(response.data.query.search);
        console.log(response.data.query.search);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="bg-slate-200">
      <div>
        <Header display={handleDisplay} />
      </div>
      <div style={{ display: display ? "block" : "none" }}>
        <div>
          <SearchBar
            searchData={searchData}
            query={query}
            handleQuery={handleQuery}
          />
        </div>

        <div>
          <DataVIew searchList={searchList} />
        </div>
      </div>
      <div style={{ display: display ? "none" : "block" }}>
        <Routes>
          <Route exact path="contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
}

export default Wikisearch;
