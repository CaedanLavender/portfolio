import { useState, useEffect } from 'react';
import smoothscroll from 'smoothscroll-polyfill';
import Landing from './components/Landing';
import Header from './components/Header';
import Body from './components/Body';
import './scss/main.scss';

function App() {
   smoothscroll.polyfill();
   const [navAtTop, setNavAtTop] = useState(false);

   const handleScroll = () => {
      const landingPosition = document.getElementById('landing').getBoundingClientRect().bottom;

      // Sets atTop state to true when navPosition is less than zero.
      setNavAtTop(landingPosition <= 0)
   }

   useEffect(() => {
      window.addEventListener('scroll', handleScroll, {passive: true});
      return () => {
         window.removeEventListener('scroll', handleScroll)
      }
   }, [])

   return (
      <div className="App">
         {/* <div id='landing'></div> */}
         <Landing />
         <Header navAtTop={navAtTop} />
         <Body />
      </div>
   );
}

export default App;
