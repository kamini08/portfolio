import Navbar from "./../components/Navbar";
import Footer from "../components/Footer";
import "../App.css";
import Skills from "../components/Skills";

export default function About() {
  return (
    <>
      <Navbar />
      <div className="section-bubble2"><h1 className="title">About Me</h1></div>
      <div className="section-bubble1">
        <div className="description">
          
          <span >
            Hi, I'm Kamini Banait, a dedicated web developer with a passion for
            crafting innovative and user-friendly websites.
          </span>

          <span>
            {" "}
            My journey into web development began when I started my college and
            started exploring new fields in technologies. Since then, I've been
            continuously learning and honing my skills to keep up with the
            latest trends and best practices. My enthusiasm for web development
            stems from a desire to create digital experiences that are both
            beautiful and functional.
          </span>

          <span>
            {" "}
            When I'm not coding, you can find me reading books or exploring new
            places. I'm always eager for new challenges and opportunities to
            grow as a developer. If you have a project in mind, let's chat about
            how I can help bring it to life.
          </span>
          
        </div>
      </div>

      <Skills />

      <Footer />
    </>
  );
}
