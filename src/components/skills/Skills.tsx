import { Container } from "./styles";
import githubIcon from "../../assets/github-icon.svg"
import BootstrapIcon from "../../assets/bootstrap.svg";
import cssIcon from "../../assets/css-icon.svg";
import htmlIcon from "../../assets/html-icon.svg";
import jsIcon from "../../assets/js-icon.svg";
import nodeIcon from "../../assets/node-icon.svg";
import reactIcon from "../../assets/react-icon.svg";
import darticon from "../../assets/dart.png";
import denoicon from "../../assets/deno.png";
import springicon from "../../assets/spring.svg";
import vueIcon from "../../assets/vue-icon.svg"; 
import sqliteIcon from "../../assets/sqlite.svg";
import vscodeIcon from "../../assets/visualstudio.svg";
import gitIcon from "../../assets/git.svg";
import winIcon from "../../assets/windows.svg";
import notionIcon from "../../assets/notion.svg";
import proIcon from "../../assets/pro.svg";




import externalLinkIcon from "../../assets/external-link-icon.svg"
import ScrollAnimation from "react-animate-on-scroll";


export function Skills(){
  return(
    <Container id="skills">
      <h2>Skills</h2>

      <div className="projects">

      <ScrollAnimation animateIn="flipInX">
       
      <div className="skills-container">
      <div className="skill">
          <header>
            <h1> &lt;Languages/&gt;</h1>
          </header>
              <div className="skill-group">
                <div className="technology">
                  <img src="https://i.ibb.co/JvqGwXV/Sans-titre-25.png" width="50" height="60"/>
                  <div>C</div>
                </div>
                <div className="technology">
                  <img src="https://i.ibb.co/9tXgZJs/Sans-titre-43.png" width="50" height="60" />
                  <div> Java</div>
                </div>
                <div className="technology">
                  <img src={jsIcon} width="50" height="60"/>
                  <div>JavaScript</div>
                </div>
                <div className="technology">
                  <img src="https://i.ibb.co/BZzyYqN/Sans-titre-24.png" width="50" height="60" />
                  <div>Python</div>
                </div>
                <div className="technology">
                  <img src="https://i.ibb.co/6FyMVKx/Sans-titre-29.png" width="50" height="60" />
                  <div>PHP</div>
                </div>
                {/* <div className="technology">
                  <img src={darticon} width="50" height="60" />
                  <div>Dart</div>
                </div> */}
                
              </div>
            

            </div>
          <div className="skill">
          <header>
            <h1> &lt;Frontend/&gt;</h1>
          </header>
              <div className="skill-group">
                <div className="technology">
                  <img src={htmlIcon} width="50" height="70"/>
                  <div>HTML</div>
                </div>
                <div className="technology">
                  <img src={cssIcon} width="50" height="70" />
                  <div> CSS</div>
                </div>
                {/* <div className="technology">
                  <img src={reactIcon} width="50" height="70" />
                  <div>React</div>
                </div>
                <div className="technology">
                  <img src={vueIcon} width="50" height="70" />
                  <div>VueJS</div>
                </div> */}
                {/* <div className="technology"  >
                  <img src="https://i.ibb.co/Jt3MwVw/Sans-titre-44.png" width="50" height="70" />
                  <div>Tailwind CSS</div>
                </div> */}
                <div className="technology"  >
                  <img src={BootstrapIcon} width="50" height="70" />
                  <div>Bootstrap</div>
                </div>
              </div>
            

            </div>


            {/* <div className="skill">
          <header>
            <h1> &lt;Backend/&gt;</h1>
          </header>
              <div className="skill-group">
                <div className="technology">
                  <img src={nodeIcon} width="50" height="60"/>
                  <div>NodeJS</div>
                </div>
                <div className="technology">
                  <img src="https://i.ibb.co/mvx57F6/Sans-titre-27.png" width="50" height="60" />
                  <div>ExpressJS</div>
                </div>
                <div className="technology">
                  <img src="https://i.ibb.co/zJk1dXq/Sans-titre-30.png" width="50" height="60" />
                  <div>Symfony</div>
                </div>
                <div className="technology">
                  <img src={springicon} width="50" height="60" />
                  <div>SpringBoot</div>
                </div>
                <div className="technology"  >
                  <img src={denoicon} width="50" height="60" />
                  <div>Deno</div>
                </div>
                
              </div> */}
            
{/* 
            </div> */}

            {/* <div className="skill">
          <header>
            <h1> &lt;Mobile/&gt;</h1>
          </header>
              <div className="skill-group">
                <div className="technology">
                  <img src="https://i.ibb.co/Bj2MmYL/Sans-titre-39.png" width="50" height="60"/>
                  <div>Flutter</div>
                </div>
                <div className="technology">
                  <img src="https://i.ibb.co/vXjyywW/Sans-titre-35.png" width="50" height="60" />
                  <div>Android Studio</div>
                </div>
                
                
                
              </div>
            

            </div> */}

            <div className="skill">
          <header>
            <h1> &lt;DataBase/&gt;</h1>
          </header>
              <div className="skill-group">
                {/* <div className="technology">
                  <img src="https://i.ibb.co/TwSxTWw/Sans-titre-32.png" width="50" height="60"/>
                  <div>MongoDB</div>
                </div> */}
                <div className="technology">
                  <img src="https://i.ibb.co/WK1WFMs/Sans-titre-31.png" width="50" height="60" />
                  <div>MYSQL</div>
                </div>
                <div className="technology">
                  <img src="https://i.ibb.co/mFFPDL0/Sans-titre-33.png" width="50" height="60" />
                  <div>OracleDB</div>
                </div>
                <div className="technology">
                  <img src={sqliteIcon} width="50" height="60" />
                  <div>SQLite</div>
                </div>
                {/* <div className="technology">
                  <img src="https://i.ibb.co/tpdyhR0/Sans-titre-34.png" width="50" height="60" />
                  <div>FireBase</div>
                </div> */}
                
                
                
                
              </div>
            

            </div>


            <div className="skill">
          <header>
            <h1> &lt;Others/&gt;</h1>
          </header>
              <div className="skill-group">
                <div className="technology">
                  <img src={vscodeIcon} width="50" height="60"/>
                  <div>VScode</div>
                </div>
                <div className="technology">
                  <img src={notionIcon} width="50" height="60" />
                  <div>Notion</div>
                </div>
                <div className="technology">
                  <img src={gitIcon} width="50" height="60" />
                  <div>Git</div>
                </div>
                <div className="technology">
                  <img src={winIcon} width="50" height="60" />
                  <div>Windows</div>
                </div>
                <div className="technology">
                  <img src={proIcon} width="50" height="60" />
                  <div>Premiere Pro</div>
                </div>
                
                
                
                
              </div>
            

            </div>



            
            </div>
        
      </ScrollAnimation>

        

        



      </div>
    </Container>
  );
}