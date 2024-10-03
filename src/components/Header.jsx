import { Link } from "react-router-dom";
import { BsList } from "react-icons/bs";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(null);
  const handleResize = (e) => {
    const screenWidth = e.target.innerWidth;
    if (screenWidth >= 630 || screenWidth < 630) {
      setIsOpen(null);
    }
  };
  window.addEventListener("resize", handleResize);

  return (
    <header className="header">
      <div className="container flex">
        <Link to={"/"}>
          <figure className="logo">
            <img src="../../public/assets/hamburgerlogo.png" />
          </figure>
        </Link>

        <nav
          className={`navbar flex ${
            isOpen === null ? "" : isOpen ? "active" : "disabled"
          }`}
          onClick={() => setIsOpen(false)}
        >
          <Link to={"/"} className="special-link left">
            Home
          </Link>
          <Link to={"/menu"} className="special-link right">
            Menu
          </Link>
          <Link to={"/about"} className="special-link left">
            About
          </Link>
          <Link to={"/contact"} className="special-link right">
            Contact
          </Link>
        </nav>

        <button
          className="hamburger-menu-btn"
          onClick={() => setIsOpen(!isOpen)}
        >
          <BsList />
        </button>
      </div>
    </header>
  );
};

export default Header;
