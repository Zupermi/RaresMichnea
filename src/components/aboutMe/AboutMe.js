import "./about.css";
import aboutImg from "../../assets/photos/about_section.jpg";

const AboutMe = () => {
    return (
        <div className="about-wrapper">
            <img src={aboutImg} alt="About Me" />
            <div>
                <div className="headings">
                    <h2>Misiunea mea</h2>
                    <h2>Despre mine</h2>
                </div>
                <p>Sunt videograf si activez de mai bine de 5 ani in domeniu.
Absolvind o facultate in domeniul Imaginii de film, am obtinut o diplomä recunoscut de Universitatea Babes-Bolyai din Cluj-Napoca. Aventura mea in lumea video-ului nu s-a oprit aici, am completat o serie de cursuri ce m-au transformat intr-un videograf versatil.
Am avut privilegiul sã lucrez la o varietate de proiecte captivante. De la productii pentru music video-uri care transformã versurile in imagini vibrante si pline de emotie, până la prezentãri corporate si animatii ce comunica mesaje puternice si memorabile, fiecare proiect reprezinta o poveste ce prinde viatã pe ecran.
n lumea mea, fiecare cadru, fiecare sunet si fiecare nuant conteaza.
Perfectionismul meu mã indeamna sã pun un accent deosebit pe detalii, pentru ca rezultatele sã fie mereu de cea mai inalt calitate. Colaborarea cu clientii mei este o bucurie, dearece imi ofer ocazia sã transform ideile lor in realitate si sã duc viziunea lor la nivelul următor.
Sunt o persoană deschis, mereu in cutarea colaborarilor care sã aduca idei
noi si provocãri interesante. Perfectionismul este o trăsătur esentiala pentru mine - pun mare pret pe detalii si mã asigur că fiecare cadru, fiecare sunet si fiecare nuant reflect perfectinea pe care o cautăm.</p>
            </div>
        </div>
    )
}
 
export default AboutMe;