import { useState, useEffect } from 'react';
import Landing from './components/Landing';
import Header from './components/Header';
import Body from './components/Body';
import './scss/main.scss';

function App() {
   const [atTop, setAtTop] = useState(false);

   const handleScroll = () => {
      const navPosition = document.getElementById('header').getBoundingClientRect().top;
      const landingPosition = document.getElementById('landing').getBoundingClientRect().bottom;

      // Sets atTop state to true when navPosition is less than zero.
      setAtTop(landingPosition <= 0)
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
         <Header atTop={atTop} />
         <Body />
      </div>
   );
}

export default App;
