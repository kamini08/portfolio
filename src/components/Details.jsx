import "../styles/navbar.css";
import { Link } from "react-router-dom";
export default function Details() {
  return (
<>
<header className="mainHeading">
   <div className="mainHeading__content">
      <article className="mainHeading__text">
         <p className="mainHeading__preTitle">Hi!</p>
         <h2 className="mainHeading__title">I'm Kamini Banait.</h2>
         <p className="mainHeading__description">
         Passionate Web Developer specializing in modern web applications
         </p>
         <Link to="/contact"><button className="cta">Available for hire</button></Link>
      </article>

      <figure className="mainHeading__image">
         <img src="/photo1.jpg" alt="" />
      </figure>
   </div>
</header>
</>
  );
}
