import "../styles/navbar.css";
import { NavLink } from "react-router-dom";
import Menu from "./Menu";
import { useMediaQuery } from "@uidotdev/usehooks";
export default function Navbar() {
  const isMatch = useMediaQuery("only screen and (max-width : 799px)");

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0; 
}

  return (
    <>
      <div className="about">
        <div className="bg_links logo" id="btnTop" onClick={topFunction}>
          <span className="icon"></span>
        </div>
      </div>

      <nav className="mainNav" id="mainNav">
        <a className="mainNav__logo" href="/">
          Portfolio
        </a>
        {isMatch ? (
          <Menu />
        ) : (
          <div className="mainNav__links">
            <NavLink className={`mainNav__link`} to="/">
              {" "}
              Home
            </NavLink>
            <NavLink className="mainNav__link" to="/about">
              {" "}
              About{" "}
            </NavLink>
            <NavLink className="mainNav__link" to="/contact">
              {" "}
              Contact{" "}
            </NavLink>
            <NavLink className="mainNav__link" to="/projects">
              {" "}
              Projects{" "}
            </NavLink>
          </div>
        )}
      </nav>
    </>
  );
}
