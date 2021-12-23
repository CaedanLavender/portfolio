import '../scss/main.scss';
import { ReactComponent as Logo } from '../assets/caedan-logo.svg';
const Landing = () => {

   return (
      <div id='landing'>
            <div id="logo">
               <Logo />
            </div>
         <div id="landingInner">
            <p>
               Hey there, I'm <br/><h1>Caedan</h1>
            </p>
            <p>
               A <h3>Web Developer</h3>&nbsp;
               in New Zealand with experience in Node and React (MERN). Currently upskilling in Docker, Nginx, and automation testing with Cypress.
            </p>
            <p>
               I’m always interested in learning new things. Outside of tech, I’m fascinated by science, psychology, and storytelling.
            </p>
            <p>
               Interested in working with me? Drop me a line below.
            </p>
         </div>
      </div>
   )
}

export default Landing;