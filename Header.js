import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

function Header(props) {
  return (
    <div className="header">
      <h1 className="logo">Knowledge Earth</h1>
      <Link to="contact" onClick={props.display}
      className="bg-gradient-to-r from-indigo-500 via-indigo-600 to-indigo-700 ring-2 ring-indigo-300 rounded-md px-4 py-2 text-white font-semibold"
      style={{textShadow:"1px 1px 3px black"}}>
        Contact
      </Link>
      <Link to="/" onClick={props.display}
      className="bg-gradient-to-r from-indigo-500 via-indigo-600 to-indigo-700 ring-2 ring-indigo-300 rounded-md px-4 py-2 text-white font-semibold"
      style={{textShadow:"1px 1px 3px black"}}>
        Home
      </Link>
    </div>
  );
}

export default Header;
