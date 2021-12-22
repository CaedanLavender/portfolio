import '../scss/main.scss';
const Header = ({ navAtTop }) => {

   return (
      <header id='header' className={navAtTop && 'headerShadow'}>
         <nav>
            <ul className={navAtTop && 'ul-post-landing'}>
               <li>Projects</li>
               <li>About</li>
               <li>Contact</li>
            </ul>
         </nav>
      </header>
   )
}

export default Header;