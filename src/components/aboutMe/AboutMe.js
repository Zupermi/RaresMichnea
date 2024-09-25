import "./about.css";
import {aboutMeParagrafs, misouneaMeaParagrafs} from "./content.js";
import aboutImg from "../../assets/photos/about_section.jpg";
import instagram from "../../assets/photos/instagram.png";
import mail from "../../assets/photos/mail.png";
import youtube from "../../assets/photos/youtube.png";
import linkedIn from "../../assets/photos/linkedIn.png";
import { useState } from "react";


const AboutMe = () => {
    const [showHeading, setShowHeading] = useState(true);
    const aboutMeElements = aboutMeParagrafs.map((info)=>{return(<p className="text-paragraf" >{info.text}</p>)});
    const misiuneaMeaElements = misouneaMeaParagrafs.map((info)=>{return(<p className="text-paragraf" >{info.text}</p>)});
    const showAboutMeElements =(() => {
        setShowHeading(true);
    });
    const showMisiuneaMeaElements =(() => {
        setShowHeading(false);
    });
    return (
        <div className="about-wrapper">
            <img src={aboutImg} alt="About Me" />
            <div className="content-wrapper">
                <div>
                    <div className="headings">
                        <h2 className="heading" onClick={showMisiuneaMeaElements}>Misiunea mea</h2>
                        <h2 className="heading" onClick={showAboutMeElements}>Despre mine</h2>
                    </div>
                    { showHeading ? <div>{aboutMeElements}</div> : <div>{misiuneaMeaElements}</div>}
                </div>
                <div className="icons-wrapper">
                    <img className="icons-wrapper-img" src={instagram} alt="instagram"></img>
                    <img className="icons-wrapper-img" src={mail} alt="mail"></img>
                    <img className="icons-wrapper-img" src={youtube} alt="youtube"></img>
                    <img className="icons-wrapper-img" src={linkedIn} alt="LinkedIn"></img>
                </div>
            </div>
        </div>
    )
}
 
export default AboutMe;