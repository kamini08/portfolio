import "../styles/slides.css";
import { Link } from "react-router-dom";
export default function Slides() {
  return (
    <div class="gallery">
  <Link class="card" to="/projects">
    <span class="icon">
    <i class="fa-solid fa-briefcase"></i>
    </span>
    <h4 className="skill-title">Projects</h4>
    <p className="description">
      Check my projects here!
    </p>
    <div class="shine"></div>
    <div class="background">
      <div class="tiles">
        <div class="tile tile-1"></div>
        <div class="tile tile-2"></div>
        <div class="tile tile-3"></div>
        <div class="tile tile-4"></div>

        <div class="tile tile-5"></div>
        <div class="tile tile-6"></div>
        <div class="tile tile-7"></div>
        <div class="tile tile-8"></div>

        <div class="tile tile-9"></div>
        <div class="tile tile-10"></div>
      </div>

      <div class="line line-1"></div>
      <div class="line line-2"></div>
      <div class="line line-3"></div>
    </div>
  </Link>
  <Link class="card" to="/about">
    <span class="icon">
    <i class="fa-solid fa-user"></i>
    </span>
    <h4 className="skill-title">About</h4>
    <p className="description">
      Know more about me here!
    </p>
    <div class="shine"></div>
    <div class="background">
      <div class="tiles">
        <div class="tile tile-1"></div>
        <div class="tile tile-2"></div>
        <div class="tile tile-3"></div>
        <div class="tile tile-4"></div>

        <div class="tile tile-5"></div>
        <div class="tile tile-6"></div>
        <div class="tile tile-7"></div>
        <div class="tile tile-8"></div>

        <div class="tile tile-9"></div>
        <div class="tile tile-10"></div>
      </div>

      <div class="line line-1"></div>
      <div class="line line-2"></div>
      <div class="line line-3"></div>
    </div>
  </Link>
  <Link class="card" to="/contact">
    <span class="icon">
    <i class="fa-solid fa-envelope"></i>
    </span>
    <h4 className="skill-title">Contact</h4>
    <p className="description">
      Get in Touch!
    </p>
    <div class="shine"></div>
    <div class="background">
      <div class="tiles">
        <div class="tile tile-1"></div>
        <div class="tile tile-2"></div>
        <div class="tile tile-3"></div>
        <div class="tile tile-4"></div>

        <div class="tile tile-5"></div>
        <div class="tile tile-6"></div>
        <div class="tile tile-7"></div>
        <div class="tile tile-8"></div>

        <div class="tile tile-9"></div>
        <div class="tile tile-10"></div>
      </div>

      <div class="line line-1"></div>
      <div class="line line-2"></div>
      <div class="line line-3"></div>
    </div>
  </Link>
</div>
  );
}