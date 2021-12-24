import '../scss/main.scss';
import { toSentenceCase } from '../utils';

const Projects = () => {
   const projectList = [
      {
         name: 'Contact form',
         type: 'class assignment',
         description: [
            'A class assignment. This app presents the user with a contact form that, when submitted, adds the data to a MongoDB Atlas database.',
            "Clicking the 'Login' button will take you to a mock 'admin panel' where you can review all entries that are 'unresolved'.",
            "The app is dockerised and deploys using Github Actions and Render"
         ],
         stack: [
            'NodeJS',
            "ReactJS",
            "MongoDB",
            "Docker"
         ]
      },
      {
         name: 'Contact form',
         type: 'class assignment',
         description: [
            'A class assignment. This app presents the user with a contact form that, when submitted, adds the data to a MongoDB Atlas database.',
            "Clicking the 'Login' button will take you to a mock 'admin panel' where you can review all entries that are 'unresolved'.",
            "The app is dockerised and deploys using Github Actions and Render"
         ],
         stack: [
            'NodeJS',
            "ReactJS",
            "MongoDB",
            "Docker"
         ]
      },
   ]

   return (
      <div className='cardList'>
         {
            projectList.map((project) => (
               <article className='card'>

                  <div className='card-part'>
                     <h3>{project.name}</h3>
                     <div className='typeContainer'>
                        <small>{toSentenceCase(project.type)}</small>
                     </div>
                     <div className='descriptionContainer'>
                        {
                           project.description.map((paragraph) => (
                              <p>{paragraph}</p>
                           ))
                        }
                     </div>
                     <div className='stackContainer text_small'>
                        <ul>

                           {
                              project.stack.map((item) => (
                                 <li>{item}</li>
                              ))
                           }
                        </ul>
                     </div>
                  </div>
                  <div className='card-part'>
                     Image goes here
                  </div>
               </article>
            ))
         }
      </div>
   )
}

export default Projects;