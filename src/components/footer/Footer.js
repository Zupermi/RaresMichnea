import "./footer.css";
import { contactInfo, contactIcons } from "./content";

const Footer = () => {
    const contactComponent = contactInfo.map((info, index) => <li key={index}>
        <img src={info.icon} alt={info.altText} />
        <p>{info.text}</p>
    </li>)
    const contactIconsComponent = contactIcons.map((icon, index) => <li key={index}><a href="#"><img src={icon.src} alt={icon.alt} /></a></li>)

    return (
     <footer>
        <div className="contact-container">
            <ul className="contact-icons">{contactIconsComponent}</ul>
            <ul className="info-wrapper">
                {contactComponent}
            </ul>
        </div>
        <div className="copyright">Copyright &copy; 2024</div>
     </footer>
    )
}
 
export default Footer;