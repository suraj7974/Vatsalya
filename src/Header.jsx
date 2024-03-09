import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <div className="header_lists">
       <Link to='/'>
       <div className="header_lists_options">Home</div>
       </Link> 
        <div className="header_lists_options">Contacts</div>
        <div className="header_lists_options">About</div>
      </div>
    </div>
  );
}

export default Header;
