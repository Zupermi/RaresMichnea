import './nav.css';
import { socialIcons, menu } from './nav-constants.js';

const SocialIcon = ({ icon }) => {
  return (
    <li>
      <img src={icon.img} alt={`${icon.alt} icon`} />
    </li>
  );
}

const DropdownItem = ({ item }) => {
    return (
      <div className="dropdown-item">
        <a href={item.link}>{item.name}</a>
      </div>
    );
  }

const Menu = ({ button }) => {
  const { name, link, content } = button;

  return (
    <div className="menu-button">
      <a href={link}>{name}</a>
      {content && (
        <div className="dropdown-content">
          {content.map((item, index) => (
            <DropdownItem key={index} item={item} />
          ))}
        </div>
      )}
    </div>
  );
}

const NavBar = () => {
  return (
    <nav className="nav-wrapper">
      <div className="nav-logo">Rares Michnea Production</div>

      <ul className="icons-wrapper">
        {socialIcons.map((icon, index) => (
          <SocialIcon key={index} icon={icon} />
        ))}
      </ul>

      <div className="menu-wrapper">
        {menu.map((button, index) => (
          <Menu key={index} button={button} />
        ))}
      </div>
    </nav>
  );
}

export default NavBar;