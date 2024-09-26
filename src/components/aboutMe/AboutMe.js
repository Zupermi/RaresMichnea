import "./about.css";
import {aboutMeParagrafs, misouneaMeaParagrafs} from "./content.js";
import aboutImg from "../../assets/photos/about_section.jpg";
import instagram from "../../assets/photos/instagram.png";
import mail from "../../assets/photos/mail.png";
import youtube from "../../assets/photos/youtube.png";
import linkedIn from "../../assets/photos/linkedIn.png";
import { useState } from "react";

const socialIcons = [
    { img: instagram, alt: 'Instagram icon' },
    { img: mail, alt: 'Email icon' },
    { img: linkedIn, alt: 'LinkedIn icon' },
    { img: youtube, alt: 'Youtube icon' }
  ];


const AboutMe = () => {
    const [showHeading, setShowHeading] = useState(true);
    const aboutMeElements = aboutMeParagrafs.map((info, index) => <p key={index} className="text-paragraf" >{info.text}</p>);
    const misiuneaMeaElements = misouneaMeaParagrafs.map((info, index) => <p key={index} className="text-paragraf" >{info.text}</p>);

    const icons = socialIcons.map((icon, index) => <img key={index} className="icons-wrapper-img" src={icon.img} alt={icon.alt} />);

    const showAboutMeElements =(() => {
        setShowHeading(true);
    });
    const showMisiuneaMeaElements =(() => {
        setShowHeading(false);
    });

    return (
        <div id="about" className="about-wrapper">
            <img src={aboutImg} alt="About Me" />
            <div className="content-wrapper">
                <div>
                    <div className="headings">
                        <h2 key="heading1" className="heading" onClick={showMisiuneaMeaElements}>Misiunea mea</h2>
                        <h2 key="heading2" className="heading" onClick={showAboutMeElements}>Despre mine</h2>
                    </div>
                    { showHeading ? aboutMeElements : misiuneaMeaElements }
                </div>
                <div className="icons-wrapper">{icons}</div>
            </div>
        </div>
    )
}
 
export default AboutMe;