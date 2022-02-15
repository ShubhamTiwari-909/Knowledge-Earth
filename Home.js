import React from "react";
import {Link} from 'react-router-dom'

function Home() {

  const containerStyles = {
    background:
      "url('https://www.scienceabc.com/wp-content/uploads/2020/09/Astronaut-in-outer-space-over-the-planet-EarthDima-Zels.jpg')",
    height: "100vh",
    backgroundSize: "cover",
    backgroundAttachment: "fixed",
    display: "grid",
    gridTemplateColumns: "70% 30%",
    placeItems: "center",
  };

  const headingStyles = {
    textAlign: "center",
    margin: "6rem 0",
    color: "white",
    fontSize: "3rem",
  };
  return (
    <div style={containerStyles}>
      <div style={{ margin: "0 2rem" }}>
        <h1 style={headingStyles}>Welcome To Knowledge Earth</h1>
        <Link to='/knowledgeearth' className="bg-indigo-500 text-slate-100 ring-2 ring-blue-400 text-centerpx-8 py-4 rounded-md">
          Proceed to Search Page...
        </Link>
      </div>
    </div>
  );
}

export default Home;
