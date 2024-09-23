import './nav.css';
import whatsappImg from '../../assets/photos/whatsapp.png';
import mailImg from '../../assets/photos/mail.png';
import linkedInImg from '../../assets/photos/linkedIn.png';
import {dropDown} from './nav-constants.js';

const socialIcons =[whatsappImg, mailImg, linkedInImg];

function NavBar() {

    const dropDownMenue = dropDown.map(dropdownButton => { 
        return ( 
            <div className='dropdown-button'>
                <a href={dropdownButton.link}>{dropdownButton.name}</a>
                {dropdownButton.content != null && <div className='dropdown-content'>
                    {dropdownButton.content.map(dropdownItem => 
                        <div className='dropdown-item'><a href={dropdownItem.link}>{dropdownItem.name}</a></div>)}
                    </div>}
    </div>)});
    return (<nav className='nav-wrapper container row'>
        <div className='nav-logo'>Rares Michnea Production</div>
        <ul className='icons-wrapper'>
        {socialIcons.map(socialIcon => <li><img src={socialIcon} alt='social media icon'/></li>)}
        </ul>
        <div className=''></div>
        <div className='dropdown-wrapper'>
            {dropDownMenue}
        </div>
    </nav>);
}
 
export default NavBar;