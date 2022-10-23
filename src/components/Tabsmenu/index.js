import React from "react";
import { Link } from "react-router-dom";
import "./tabsmenu.scss"

const index = ({ active }) => {
  return (
    <div className="cont-inputpost">
      {" "}
      <div className={active == 1 ? "tabs active" : "tabs"}>
        <Link to="/" className="linkStyle">
          Best
        </Link>
      </div>
      <div className={active == 2 ? "tabs active" : "tabs"}>
        <Link to="/hots" className="linkStyle">
          Hot
        </Link>
      </div>
      <div className={active == 3 ? "tabs active" : "tabs"}>
        <Link to="/news" className="linkStyle">
          New
        </Link>
      </div>
      <div className={active == 4 ? "tabs active" : "tabs"}>
        <Link to="/risings" className="linkStyle">
          Rising
        </Link>
      </div>
    </div>
  );
};

export default index;
