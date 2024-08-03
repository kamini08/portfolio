import "../styles/skills.css";

export default function Skills() {
  
  return (
    <div className="about-section">
      <h2 className="skill-title">Skills</h2>

      <ul className="skill-section">
        <li>
          <div class="icon">
            <i class="fa-brands fa-html5"></i>
          </div>
          <div class="skill">HTML</div>
        </li>
        <li>
          <div class="icon">
            <i class="fa-brands fa-css3"></i>
          </div>
          <div class="skill">CSS</div>
        </li>
        <li>
          <div class="icon">
            <i class="fa-brands fa-js"></i>
          </div>
          <div class="skill">Javascript</div>
        </li>
        <li>
          <div class="icon">
            <i class="fa-brands fa-react"></i>
          </div>
          <div class="skill">React JS</div>
        </li>
        <li>
          <div class="icon">
            <i class="fa-brands fa-n"></i>
          </div>
          <div class="skill">Next JS</div>
        </li>
        <li>
          <div class="icon">
            <i class="fa-brands fa-node"></i>
          </div>
          <div class="skill">Node JS</div>
        </li>
        <li>
          <div class="icon">
            <i class="fa-solid fa-database"></i>
          </div>
          <div class="skill">MongoDB</div>
        </li>
       
            <li>
          <div class="icon">
            <i class="fa-solid fa-database"></i>
          </div>
          <div class="skill">MySQL</div>
        </li>
        <li>
          <div class="icon">
            <i class="fa-brands fa-git"></i>
          </div>
          <div class="skill">Git</div>
        </li>
        <li>
          <div class="icon">
            <i class="fa-brands fa-github"></i>
          </div>
          <div class="skill">Github</div>
        </li>
      </ul>

      <h2 className="skill-title">Socials</h2>
      <ul class="social-icons">
        <li className="social-link"><a href="https://github.com/kamini08"><i class="fa fa-github"></i></a></li>
        <li className="social-link"><a href="https://linkedin.com/kaminibanait"><i class="fa fa-linkedin"></i></a></li>
        <li className="social-link"><a href="mailto:kaminibanait03@gmail.com"><i class="fa fa-envelope"></i></a></li>
    </ul>
        
    </div>
  );
}
