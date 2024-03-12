import { Link} from "react-router-dom";

function Navbar() {
  return (
    <nav className="w-full h-15 flex justify-between items-center px-10 p-2">
      <span></span>
      <div className="w-1/2 flex justify-evenly">
        <Link to="/">HOME</Link>
        <Link to="/dashboard">DASHBOARD</Link>
        <Link to="/features">FEATURES</Link>
        <Link to="/about-us">ABOUT US</Link>
      </div>
      <button className="bg-[#5A81FA] text-white p-2 px-3 rounded">Login</button>
    </nav>
  );
}

export default Navbar;
