import React from "react";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <div className="header_lists">
        <div className="header_lists_options">Home</div>
        <div className="header_lists_options">Contacts</div>
        <div className="header_lists_options">About</div>
      </div>
    </div>
  );
}

export default Header;
