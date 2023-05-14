import React from "react";
import { Link } from "react-router-dom";

import SearchBar from "../SearchBar/SearchBar";
import NavTool from "../NavTool/NavTool";
import { StoreLogo } from "../../assets/Icon/icons";
import "./styles.css";

const AppBar = () => {
  return (
    <div className="bar">
      <Link to="/">
        <StoreLogo />
      </Link>

      <SearchBar />
      <NavTool />
    </div>
  );
};

export default AppBar;
