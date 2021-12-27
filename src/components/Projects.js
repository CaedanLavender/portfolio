import React from 'react';
import '../scss/main.scss';
import { toSentenceCase, delimitArray } from '../utils';

const Projects = () => {
   const projectList = [
      {
         identifier: "datacom",
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
         ],
         links: [
            {
               name: "GitHub",
               link: "https://github.com/CaedanLavender/datacom"
            },
            {
               name: "Demo",
               link: "https://datacom.onrender.com"
            }
         ]
      }
   ]

   return (
      <div className='cardList'>
         {
            projectList.map((project) => (
               <article className='card'>

                  <div className='card-part'>
                     <div className='listContainer project__stack text_small'>
                        <ul>
                           {
                              project.stack.map((item, i) => (
                                 <>
                                    {!!i && <li>+</li>}
                                    <li>{item}</li>
                                 </>
                              ))
                           }
                        </ul>
                     </div>
                     <h3>{project.name}</h3>
                     <div className='project__type'>
                        <small>{toSentenceCase(project.type)}</small>
                     </div>
                     <div className="listContainer project__links">
                        <ul>
                           {
                              project.links?.map((each) => <li><a href={each.link} rel='noreferrer' target='_blank'>{each.name}</a></li>)
                           }
                        </ul>
                     </div>
                     <div className='project__description'>
                        {
                           project.description.map((paragraph) => <p>{paragraph}</p>)
                        }
                        {/* <span className='text_small'>less</span> */}
                     </div>
                  </div>
                  <div className='card-part'>
                     <img src={`images/project--${project?.identifier}--01.png`} alt={project.identifier} />
                  </div>
               </article>
            ))
         }
      </div>
   )
}

export default Projects;