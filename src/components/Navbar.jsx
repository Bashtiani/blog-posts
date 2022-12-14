import { UserCircleIcon } from "@heroicons/react/24/outline";
import React from "react";
import SearchInput from "./Search";
import "../css/navbar.scss";

function Navbar() {
  return (
    <div className="navbarWrapper">
      <h1 className="title">Blogs Posted</h1>
      <div style={{ display: "flex" }}>
        <SearchInput />
        <button type="button" className="subscribeButton">
          <UserCircleIcon className="icon" />
          <p>Subscribe</p>
        </button>
      </div>
    </div>
  );
}

export default Navbar;
