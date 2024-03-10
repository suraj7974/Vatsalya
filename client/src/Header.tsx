import "./Header.css";
import { Link, useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  return (
    <>
      <div className="header">
        <div className="logo">{/* logo here */}</div>
        <div className="header_items">
          <div className="header_lists">
            <Link to="/UploadImages">
              <div className="header_lists_options">Upload Interface</div>
            </Link>
            <Link to="/Results">
              <div className="header_lists_options">Process & Analysis</div>
            </Link>
            <Link to="/Blog">
              <div className="header_lists_options">Blog</div>
            </Link>
            <Link to="/FAQ">
              <div className="header_lists_options">FAQs</div>
            </Link>
          </div>
        </div>
        <button onClick={() => navigate("/AboutUs")} className="contact_btn">
          Contact Us
        </button>
      </div>
    </>
  );
}

export default Header;
