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
      window.addEventListener('scroll', handleScroll, { passive: true });
      return () => {
         window.removeEventListener('scroll', handleScroll)
      }
   }, [])

   // let options = {
   //    // threshold: 0.8,
   //    rootMargin: '-250px'
   // }

   // const observerCandidates = document.querySelectorAll('section');

   // const observer = new IntersectionObserver(entries => {
   //    entries.forEach(entry => {
   //       entry.target.classList.toggle("show", entry.isIntersecting)
   //       // if (entry.isIntersecting) observer.unobserve(entry.target)
   //    })
   // }, options)

   // observerCandidates.forEach(each => {
   //    observer.observe(each)
   // })

   return (
      <div className='App'>
         <Landing />
         <Header navAtTop={navAtTop} />
         <Body navAtTop={navAtTop} />
      </div>
   );
}

export default App;
