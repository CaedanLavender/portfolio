import { useState, useEffect } from 'react';
import Landing from './components/Landing';
import Header from './components/Header';
import Body from './components/Body';
import './scss/main.scss';

function App() {
   const [atTop, setAtTop] = useState(true);

   const handleScroll = () => {
      const navPosition = document.getElementById('header').getBoundingClientRect().top;

      // Sets atTop state to true when navPosition is falsey (zero).
      setAtTop(!navPosition)
   }

   useEffect(() => {
      window.addEventListener('scroll', handleScroll, {passive: true});
      return () => {
         window.removeEventListener('scroll', handleScroll)
      }
   }, [])

   return (
      <div className="App">
         <div id='landing'></div>
         <Header atTop={atTop} />
         <Body />
      </div>
   );
}

export default App;
