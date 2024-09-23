import phoneImg from "../../assets/photos/Telefon.png";
import mailImg from "../../assets/photos/mail.png";
import locationImg from "../../assets/photos/Locatie.png";
import whatsappImg from "../../assets/photos/whatsapp.png";
import gmailImg from "../../assets/photos/gmail.png";
import linkedInImg from "../../assets/photos/linkedIn.png";

const contactInfo = [
    {
        text: "0782354238",
        icon: phoneImg,
        altText: "phone icon"
    },
    {
        text: "rares.michnea@gmail.com",
        icon: mailImg,
        altText: "mail icon"
    },
    {
        text: "Cluj-Napoca, Romania",
        icon: locationImg,
        altText: "location icon"
    }
]

const contactIcons = [
    {
        src: whatsappImg,
        alt: "whatsapp icon"
    },
    {
        src: gmailImg,
        alt: "gmail icon"
    },
    {
        src: linkedInImg,
        alt: "linkedIn icon"
    }
];

export {contactInfo, contactIcons};
