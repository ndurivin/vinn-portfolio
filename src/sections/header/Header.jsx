import "./header.css";
import data from './data';
import headerpic from '../../assets/headerpic.jpg';



const Header = () => {
  return (
    <header id="header">
      <div className="container header__container">
        <div className="header__profile">
          <img src={headerpic} alt="header" />
        </div>
        <h3>Vinn Nduri</h3>
        <p>
          You are just but a click away from building your next great App. Contact
          me with details of your project for a modern, mobile-responsive, and
          highly performant app today.
        </p>
        <div className="header__cta">
          <a href="#contact" className="btn primary">Let's Talk</a>
          <a href="#portfolio" className="btn light">My Work</a>
        </div>
        <div className="header__socials">
          {
            data.map(item => <a key={item.id} href={item.link} target='_blank' 
            rel="noopener noreferrer">{item.icon}</a>)
          }
        </div>
      </div>
    </header>
  );
};

export default Header;
