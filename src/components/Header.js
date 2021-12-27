import '../scss/main.scss';
const Header = ({ navAtTop }) => {

   const scrollToSection = (element) => {
      document.getElementById(element).scrollIntoView({ behavior: 'smooth' });
   }

   return (
      <header id='header' className={navAtTop && 'headerShadow'}>
         <nav>
            <ul className={navAtTop && 'ul-post-landing'}>
               <li onClick={() => scrollToSection('about')}>About</li>
               <li onClick={() => scrollToSection('projects')}>Projects</li>
               <li onClick={() => scrollToSection('contact')}>Contact</li>
            </ul>
         </nav>
      </header>
   )
}

export default Header;