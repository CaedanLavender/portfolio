import { useState, useEffect } from 'react';
import '../scss/main.scss';
const Header = ({ atTop }) => {

   return (
      <header id='header' className={atTop && 'headerShadow'}>
         <nav>
            <ul>
               <li>Projects</li>
               <li>About</li>
               <li>Contact</li>
            </ul>
         </nav>
      </header>
   )
}

export default Header;