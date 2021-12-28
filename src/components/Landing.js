import '../scss/main.scss';
import { ReactComponent as Logo } from '../assets/caedan-logo.svg';
const Landing = () => {

   return (
      <div id='landing'>
         <div id="landingInner">
            <div id="logo">
               <Logo />
            </div>
            <div className='mainHeading'>
               Hey there, I'm
               <h1>Caedan</h1>
            </div>
            <p>
               A <span className='emp'>Web Developer</span> in <span className="emp">New&nbsp;Zealand</span> with experience in Node and React (MERN). Currently upskilling in Docker, Nginx, and Cypress.
            </p>
            <p>
               I’m always interested in learning new things. Outside of tech, I’m fascinated by science, psychology, and storytelling.
            </p>
            <p>
               Interested in working with me?<br/>Drop me a line below.
               New Zealand
            </p>
         </div>
      </div>
   )
}

export default Landing;