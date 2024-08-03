import "../styles/menu.css";
import { Link } from "react-router-dom";
export default function Menu() {
  return (
    <>
      <input type="checkbox" id="active"></input>
      <label htmlFor="active" className="menu-btn">
        <span></span>
      </label>
      <label htmlFor="active" className="close"></label>
      <div className="wrapper">
        <ul className="menu-list">
          <li>
            <Link className="a" to="/">Home</Link>
          </li>
          <li>
            <Link className="a" to="/about">About</Link>
          </li>
          <li>
            <Link className="a" to="/contact">Contact</Link>
          </li>
          <li>
            <Link className="a" to="/projects">Projects</Link>
          </li>
        </ul>
      </div>
    </>
  );
}
