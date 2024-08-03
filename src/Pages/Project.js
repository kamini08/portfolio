import Navbar from "./../components/Navbar";
import Footer from "../components/Footer";
import Card from "../components/Card";
import "../styles/project.css";




export default function Projects() {
  const projects = [{
    "id": 1,
    "title": "Spotify Clone",
    "tags": ["HTML", "CSS", "JavaScript"],
    "link": "https://kamini08.github.io/Spotify-clone",
    "backgroundImage": "url('Spotify.png')",
  },
  {
    "id": 2,
    "title": "TextUtils",
    "tags": ["HTML", "CSS", "JavaScript", "React Js"],
    "link": "https://kamini08.github.io/TextUtil",
    "backgroundImage": "url('TextUtil.png')",
  },

  {
      "id": 3,
    "title": "Rock Paper Scissors",
    "tags": ["HTML", "CSS", "JavaScript"],
    "link": "https://kamini08.github.io/rock-papaer-scissors",
    "backgroundImage": "url('RockPaperScissor.png')",
  },
  {
    "id": 4,
    "title": "Portfolio",
    "tags": ["HTML", "CSS", "JavaScript", "React Js"],
    "link": "/",
    "backgroundImage": "url('Portfolio.png')",
  },
  {
    "id": 5,
    "title": "Etch-a-Sketch",
    "tags": ["HTML", "CSS", "JavaScript"],
    "link": "https://kamini08.github.io/Etch-a-sketch",
    "backgroundImage": "url('EtchASketch.png')",
  },
];

  return (
    <>
      <Navbar />
      <h1 className="title">My Projects</h1>

      <div className="card-wrapper">
        {projects.map((project) => (
          <Card
            key={project.id}
            backgroundImage={project.backgroundImage}
            link={project.link}
            tags={project.tags}
            title={project.title}
          />
        ))}
 
      </div>
      <Footer />
    </>
  );
}
