import "./hero.css";
import introVideo from "../../assets/videos/intro.mp4"

const HeroZone = () => {
    return (
        <video id="home" muted loop>
            <source src={introVideo} type="video/mp4"/>
        </video>
    )
}
 
export default HeroZone;