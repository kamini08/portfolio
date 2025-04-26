import Navbar from "./../components/Navbar";
import Footer from "../components/Footer";
import Card from "../components/Card";
import "../styles/project.css";




export default function Projects() {
  const projects = [{
    "id": 1,
    "title": "Swasthika",
    "tags": ["FastAPI","Gemini API", "ChromaDB","Hugging Face","Langchain", "NextJS","TypeScript" ],
    "link": "https://rehab-deploy-two.vercel.app",
    "backgroundImage": "url('swasthika.png')",
  },
  {
    "id": 2,
    "title": "Khetideals",
    "tags": ["NextJS", "TypeScript", "Tailwind CSS", "MongoDB"],
    "link": "https://sih2024new.vercel.app/",
    "backgroundImage": "url('https://sih2024new.vercel.app/images/slide2.jpg')",
  },

  {
      "id": 3,
    "title": "SurakshaSanchay",
    "tags": ["NextJS", "TypeScript", "Tailwind CSS", "Python", "Prisma"],
    "link": "https://sanchay-rho.vercel.app/",
    "backgroundImage": "url('sanchay.png')",
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
  {
    "id": 6,
    "title": "Simon Game",
    "tags": ["HTML", "CSS", "JavaScript"],
    "link": "https://kamini08.github.io/Simon-game",
    "backgroundImage": "url('simon-game.png')",
  },
  {
    "id": 7,
    "title": "Personal Blog",
    "tags": ["NextJS", "Tailwind", "TypeScript"],
    "link": "https://github.com/kamini08/personal-blog",
    "backgroundImage": "url('personalBlog.png')",
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
