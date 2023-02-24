import { Container } from "./styles";
import githubIcon from "../../assets/github-icon.svg"
import externalLinkIcon from "../../assets/external-link-icon.svg"
import ScrollAnimation from "react-animate-on-scroll";


export function Portfolio(){
  return(
    <Container id="portfolio">
      <h2>My Work</h2>

      <div className="projects">

      <ScrollAnimation animateIn="flipInX">
        <div className="project">
          <header>
          <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
          <div className="project-links">
            <a href="https://github.com/belahssen-chater/SteChaterFreres-" target="_blank" rel="noreferrer">
              <img src={githubIcon} alt="GitHub" />
            </a>
          </div>
          </header>
          <div className="body">
            <h3>Ste Chater brothers App</h3>
            <p> you can do in this app is :
Create an Account
,Have idea about Ste Chater brothers 
,Create a command 

            </p>
          </div>
          <footer>
            <ul className="tech-list">
              <li>HTML</li>
              <li>CSS</li>
              {/* <li>Bloc</li>
              <li>FireBase</li> */}
            </ul>
          </footer>
        </div>
      </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
            <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
            <div className="project-links">
              <a href="https://github.com/belahssen-chater/ITMoviesJavaFX.git" target="_blank" rel="noreferrer">
                <img src={githubIcon} alt="GitHub" />
              </a>
              
            </div>
            </header>
            <div className="body">
              <h3>IT MOVIES</h3>
              <p>film management
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>JavaFx</li>
              
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
            <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
            <div className="project-links">
              <a href="https://github.com/belahssen-chater/ITMoviesWinForms.git" target="_blank" rel="noreferrer">
                <img src={externalLinkIcon} alt="Visitar site" />
              </a>
            </div>
            </header>
            <div className="body">
              <h3>IT MOVIES</h3>
              <p>film management
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>c#</li>
              
              </ul>
            </footer>
          </div>
        </ScrollAnimation>
{/* 
        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
            <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
            <div className="project-links">
              <a href="https://github.com/haythembekir20/Mini_Projet_Android" target="_blank" rel="noreferrer">
                <img src={githubIcon} alt="Visitar site" />
              </a>
            </div>
            </header>
            <div className="body">
              <h3>stock management app</h3>
              <p>stock management app that help store owner to manage His Products 
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Android</li>
                <li>FireBase</li>
                <li>Google Map</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
            <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
            <div className="project-links">
              <a href="https://github.com/haythembekir20/Bank_Account-Simulation" target="_blank" rel="noreferrer">
                <img src={githubIcon} alt="Visitar site" />
              </a>
            </div>
            </header>
            <div className="body">
              <h3>Bank Account Simulation</h3>
              <p>This Desktop App is created to help management of client and their bank account for the bank adminstation
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>JavaFx</li>
                <li>Mysql</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
            <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
            <div className="project-links">
              <a href="https://github.com/haythembekir20/e-learning_plateforme" target="_blank" rel="noreferrer">
                <img src={githubIcon} alt="Visitar site" />
              </a>
              
            </div>
            </header>
            <div className="body">
              <h3>e-learning plateforme</h3>
              <p>Landing Page
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Html</li>
                <li>Css</li>
                <li>JavaSript</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation> */}



      </div>
    </Container>
  );
}