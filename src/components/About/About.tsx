import { Container } from "./styles";

import cssIcon from "../../assets/css-icon.svg";
import htmlIcon from "../../assets/html-icon.svg";
import jsIcon from "../../assets/js-icon.svg";
import nodeIcon from "../../assets/node-icon.svg";
import reactIcon from "../../assets/react-icon.svg";
import typescriptIcon from "../../assets/typescript-icon.svg";
import vueIcon from "../../assets/vue-icon.svg";
import belahssen from "../../assets/belahssen.jpg";
import ScrollAnimation from "react-animate-on-scroll";

export function About() {
  return (
    <Container id="about">
      <div className="about-text">
        <ScrollAnimation animateIn="fadeInLeft">
          <h2>About me</h2>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.2 * 1000}>
          <p>
            I am a computer engineering student at IT Business School, Nabeul,
            Tunis. I chose this field because I have always been passionate
            about information technologies and how they can be used to solve
            complex problems. I am particularly interested by the fields of
            artificial intelligence, machine learning and business intelligence.
            I look forward to developing my computer skills and putting them
            into practice to create innovative solutions that will have a
            positive impact on my skills and on my career as a computer
            engineer.in
          </p>
        </ScrollAnimation>
        <ScrollAnimation
          animateIn="fadeInLeft"
          delay={0.4 * 1000}
          style={{ marginTop: "2rem", marginBottom: "2rem" }}
        >
          {/* <p> develop websites and applications using ReactJs , VueJs , ExpressJs and Flutter . I am familiar with developing layouts that provide me. I'm always improving myself with each project they put in my hands.</p> */}
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.6 * 1000}>
          <p>
            I am a dedicated person who pursues his dreams, hardworking and
            results oriented, I always seek to achieve my best version.
          </p>
        </ScrollAnimation>
      </div>
      <div className="about-image">
        <ScrollAnimation animateIn="fadeInRight" delay={0.6 * 1000}>
          <img src={belahssen} alt="Imagem de perfil" />
        </ScrollAnimation>
      </div>
    </Container>
  );
}
