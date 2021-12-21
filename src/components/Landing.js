import { useState, useEffect } from 'react';
import '../scss/main.scss';
const Landing = () => {

   return (
      <div id='landing'>
         <div id="landingInner">
            <h1>Caedan</h1>
            <h3>Developer</h3>
            <article>
               <p>
                  Hey there, I’m Caedan, a web developer in New Zealand with experience in Node and React (MERN). Currently I’m upskilling in Docker, Nginx, and automation testing with Cypress.
               </p>
               <p>
                  I’m always interested in learning new things. Outside of tech, I’m fascinated by science, psychology, and storytelling.
               </p>
               <p>
                  Interested in working with me? Drop me a line below.
               </p>

            </article>
         </div>
      </div>
   )
}

export default Landing;