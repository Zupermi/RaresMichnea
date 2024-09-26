import whatsappImg from '../../assets/photos/whatsapp.png';
import mailImg from '../../assets/photos/mail.png';
import linkedInImg from '../../assets/photos/linkedIn.png';

const socialIcons = [
    { img: whatsappImg, alt: 'WhatsApp' },
    { img: mailImg, alt: 'Email' },
    { img: linkedInImg, alt: 'LinkedIn' },
  ];

const menu =[
    {
        'name':'Acasa',
        'link':'#home'
    },
    {
        'name':'Despre mine',
        'link':'#about'
    },
    {
        'name':'Servicii',
        'link':'#',
        'content':[
            {
                'name':'Videoclipuri Muzicale',
                'link':'#'
            },
            {
                'name':'Prezentari Video',
                'link':'#'
            },
            {
                'name':'Reclame',
                'link':'#'
            },
            {
                'name':'Motion Graphic',
                'link':'#'
            },
            {
                'name':'Diverse',
                'link':'#'
            }
        ]
    },
    {
        'name':'Portofoliu',
        'link':'#'
    },
    {
        'name':'Contact',
        'link':'#'
    }
]

export { socialIcons, menu };