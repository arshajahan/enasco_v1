
import { FiSend } from 'react-icons/fi';
import { BsCardChecklist } from 'react-icons/bs';
import { GiHospitalCross } from 'react-icons/gi';
import { AiOutlineFileDone } from 'react-icons/ai';
import { FaMediumM, FaWhatsapp, FaLinkedinIn, FaInstagram, FaFacebookF, FaTwitter } from 'react-icons/fa';
import { MdPhone, MdEmail, MdPhoneCallback} from 'react-icons/md';

export const socialicons = [
    {
        'icon': FaTwitter,
        'link': 'https://twitter.com/treat_at',
        'color': 'text-blue-500',
        'label': 'twitter'
    },
    {
        'icon': FaFacebookF,
        'link': 'https://www.facebook.com/TeamTreatAt',
        'color': 'text-blue-900',
        'label': 'facebook'
    },
    {
        'icon': FaInstagram,
        'link': 'https://www.instagram.com/treatatindia/',
        'color': 'text-yellow-900',
        'label': 'instagram'
    },
    {
        'icon': FaLinkedinIn,
        'link': 'https://www.linkedin.com/company/treatat',
        'color': 'text-blue-700',
        'label': 'linkedin'
    },
    {
        'icon': FaWhatsapp,
        'link': 'https://api.whatsapp.com/send?phone=+916238880208&text=Hello%20TreatAt',
        'color': 'text-green-600',
        'label': 'whatsapp'
    },
    {
        'icon': FaMediumM,
        'link': 'https://medium.com/@treatat',
        'color': 'text-black',
        'label': 'medium'
    }
    
]


export const services = [
    {
      id: 1,
      question: "petroleum services",
      answer: [
        "Harbour Towage",
        "Offshore & Terminal Towage",
        "Chartering & Salvage",
        "Inland Shipping",
      ],
    },
    {
      id: 2,
      question: "human resource",
      answer: [
        "SPM Operations & Maintenance",
        "Asset Integrity Management",
      ],
    },
    {
      id: 3,
      question: "equipment",
      answer: [
        "OptiPort",
        "Analytics & Reporting",
        "Drone Line Transfer",
      ],
    },
    {
      id: 4,
      question: "general trading",
      answer: [
        "Training",
        "Consultancy",
        "Towmaster Services",
      ],
    },
    {
      id: 5,
      question: "ICT",
      answer: [
        "Ship Management",
        "Innovations",
        "Projects & New Building",
        "Fast Crew Transportation",
      ],
    },
  ];
  



export const hows = [
    {
        'step': '1. Submit your request',
        'icon': FiSend,
        'detail': 'Let us know what treatment you require and upload the relevant reports for us to assist you better.'
         
    },
    {
        'step': '2. Get Medical Guidance',
        'icon': BsCardChecklist,
        'detail': 'Ask for guidance from our team of specialist doctors in choosing your treatment and hospital'

    },
    {
        'step': '3. Choose Hospital',
        'icon': GiHospitalCross,
        'detail': 'Choose a hospital that suits your needs the best. Get your treatment plan and cost estimate from them.'

    },
    {
        'step': '4. Make Reservations',
        'icon': AiOutlineFileDone,
        'detail': 'Confirm your treatment plan and make all the necessary bookings before going to the hospital.'

    }
]

export const whys = [
    {
        'main': 'Accredited Hospitals Only',
        'sub': 'JCI, NABL, NABH'
    },
    {
        'main': 'Guaranteed Response',
        'sub': 'Typically Responds In 4Hrs'
    },
    {
        'main': 'Faster Process',
        'sub': 'For TreatAt Patients'
    },
    {
        'main': 'Dedicated Patient Manager',
        'sub': 'End to End support'
    },
    {
        'main': '20% Cost Savings',
        'sub': 'Highest quality care and results'
    }
]

export const reviews = [
    {
        'name': 'Rajib Baidya',
        'rating': '★★★★★',
        'from': 'from India',
        'img': 'https://firebasestorage.googleapis.com/v0/b/treatat-project-1721e.appspot.com/o/reviews%2FRajib%20baidya.png?alt=media&token=7da5b90b-d897-482a-b7b6-3fb011562e82',
        'content': 'The Team TreatAt is very friendly to all my queries and their reply according to all my question are very frequent that I get very pleased. Thanks everybody and I wish all the best to Team TreatAt.'
    },
    {
        'name': 'Tanver Hossain',
        'rating': '★★★★★',
        'from': 'from Bangladesh',
        'img': 'https://firebasestorage.googleapis.com/v0/b/treatat-project-1721e.appspot.com/o/reviews%2FTanvir%20Hossain.png?alt=media&token=230a2203-7527-4b7c-bf7f-1afdb657f53b',
        'content': `Best service provided by them specially Mrs. Moushumi Mahesh. She did excellent job. I wish great success of her as well as the TreatAt.`
    },
    {
        'name': 'Nil Sarkar',
        'rating': '★★★★★',
        'from': 'from Bangladesh',
        'img': 'https://firebasestorage.googleapis.com/v0/b/treatat-project-1721e.appspot.com/o/reviews%2FNil%20Sarkar.png?alt=media&token=35f39abd-d1fa-4065-a179-a8a067aaf4c0',
        'content': `(Translated by Google) Very good service. I am fully satisfied with your service. Thank you so much seasonally for providing such wonderful service.
                    (Original)
                    খুব ভালো পরিষেবা। আমি পুরোপুরি সন্তুষ্ট আপানাদের পরিষেবায়। মৌসুমি আপনাকে অনেক অনেক ধন্যবাদ এত সুন্দর পরিষেবা দেয়ার জন্য।`
    },
    {
        'name': 'Ts t',
        'rating': '★★★★★',
        'from' : 'from India',
        'img': 'https://firebasestorage.googleapis.com/v0/b/treatat-project-1721e.appspot.com/o/reviews%2FTs%20t.png?alt=media&token=b887251d-6af5-4859-8d65-8c6519771444',
        'content': 'TreatAt service is very quick.They are understand patient needs and they are very helpful. Specially Moushumi she was guide us right path.'
    },
    {
        'name': 'Mita begum',
        'rating': '★★★★★',
        'from': 'from Bangladesh',
        'img': 'https://firebasestorage.googleapis.com/v0/b/treatat-project-1721e.appspot.com/o/reviews%2FMita%20Begum.png?alt=media&token=cefaaf05-d8b9-486e-b0d5-d4cb364e5bb6',
        'content': `(Translated by Google) Thank you very much for the seasonal Apu I love your processing and usage
                    (Original)
                    আপনাদে প্রসেসিং ও ব্যাবহার আমার কাছে অনেক ভাল লেগেছে  মৌসুমি আপুকে অনেক ধন্যবাদ`
    },
    {
        'name': 'Rina Nasrin',
        'rating': '★★★★★',
        'from': 'from India',
        'img': 'https://firebasestorage.googleapis.com/v0/b/treatat-project-1721e.appspot.com/o/reviews%2FRina%20nasrin.png?alt=media&token=a0d9b259-762b-4593-8835-e2f31bdc60eb',
        'content': 'Quick and friendly service provider.'
    },
    {
        'name': 'Juher Choudhury',
        'rating': '★★★★★',
        'from': 'from Bangladesh',
        'img': 'https://firebasestorage.googleapis.com/v0/b/treatat-project-1721e.appspot.com/o/reviews%2FJuher%20Chaudri.png?alt=media&token=af8328cb-1382-4f0b-a2bb-aaec74bcfa3c',
        'content': 'Thank you TreatAt Team I get doctors Appointment easily by TreatAt # Good service. # Good Commitment Helpfully Team'
    },
    {
        'name': 'Mariyamath Ramseena',
        'rating': '★★★★★',
        'from': 'from India',
        'img': 'https://firebasestorage.googleapis.com/v0/b/treatat-project-1721e.appspot.com/o/reviews%2FMaryamath%20Ramseena.png?alt=media&token=8667b180-8293-4207-a4ec-8ddf26787e68',
        'content': 'Thanks a lot for your assistance - I was very impressed with your site and shall recommend it to others........'
    },
    {
        'name': 'Golam Moula',
        'rating': '★★★★★',
        'from': 'from Bangladesh',
        'img': 'https://firebasestorage.googleapis.com/v0/b/treatat-project-1721e.appspot.com/o/reviews%2FGulam%20moula.png?alt=media&token=ec3eb3c9-3c58-48eb-8b83-9f9449408b31',
        'content': 'Your Service is excellent. Carry on Pl.'
    },
    {
        'name': 'Misbah Uddin',
        'rating': '★★★★★',
        'from': 'from India',
        'img': 'https://firebasestorage.googleapis.com/v0/b/treatat-project-1721e.appspot.com/o/reviews%2FMisbah%20Uddin.png?alt=media&token=be481867-37c1-4fc0-a0bc-2d72f84b9b70',
        'content': 'Excellent Service provider. Trustable services.'
    },
    
    {
        'name': 'Priyo Mon',
        'rating': '★★★★★',
        'from': 'from India',
        'img': 'https://firebasestorage.googleapis.com/v0/b/treatat-project-1721e.appspot.com/o/reviews%2FPriyo%20mon.png?alt=media&token=87d5af27-f84e-404f-8372-be1c31043343',
        'content': 'I got excellent service from Mousumi. She is very punctual and helpful.'
    },
    {
        'name': 'MESBAH UDDIN FOYSAL',
        'rating': '★★★★★',
        'from': 'from India',
        'img': 'https://firebasestorage.googleapis.com/v0/b/treatat-project-1721e.appspot.com/o/reviews%2FMisbah%20Uddin%20Foysal.png?alt=media&token=72b87869-3378-49cc-a1de-15cb1b236d70',
        'content': `Great and Quick service.`
    },

]

export const says = [
    {
        'name': 'Abdullah Saleh Nasser Al Thahri',
        'visit': 'Visited in January, 2018',
        'from': 'From Saudi Arabia',
        'say': `I found out about TreatAt online as I was looking for management of my post stroke conditions. 
                I needed advice on my future lifestyle choices and medical management. TreatAt helped me get connected to one 
                of the best doctor for my treatment. Their medical team was pleasant and supportive. Really happy with the services`
    },
    {
        'name': 'Kalumba John',
        'visit': 'Visited in January, 2018',
        'from': 'Uganda',
        'say': `Truly reliable medical support from TreatAt. They have all the things you need for treatment.`
    },
    {
        'name': 'Mohammed Iqbal Hossain',
        'visit': 'Visited in Feb, 2018',
        'from': 'From Bangladesh',
        'say': `looking for management of my post stroke conditions. 
                I needed advice on my future lifestyle choices and medical management. TreatAt helped me get connected to one 
                of the best doctor for my treatment. Their medical team was pleasant and supportive. Really happy with the services`
    },
    {
        'name': 'Ben Twine',
        'visit': 'Visited in April, 2018',
        'from': 'From Uganda',
        'say': `I found out about TreatAt online as I was looking for management of my post stroke conditions. 
                I lifestyle choices and medical management. TreatAt helped me get connected to one 
                of the best doctor for my treatment. Their medical team was pleasant and supportive. Really happy with the services`
    },
    {
        'name': 'Gerald Adinde',
        'visit': 'Visited in March, 2018',
        'from': 'From Nigeria',
        'say': `I found out about s I was looking for management of my post stroke conditions. 
                I lifestyle choices and medical management. TreatAt helped me get connected to one 
                of the best doctor for my treatment. Their medical team was pleasant and supportive. Really happy with the services`
    },
    {
        'name': 'Shameem',
        'visit': 'Visited in jan, 2017',
        'from': 'From Bangladesh',
        'say': `g for management of my post stroke conditions. 
                I lifestyle choices and medical management. TreatAt helped me get connected to one 
                of the best doctor for my treatment. Their medical team was pleasant and supportive. Really happy with the services`
    }

]


export const footers = [
    {
        'contact': [
            {
                'type': 'Phone:',
                'data': '(+91) 623 886 1334',
                'link': 'tel:+91 623 886 1334',
                'icon': MdPhone
            },
            {
                'type': 'Email:',
                'data': ' care@treatat.com',
                'link': 'mailto:care@treatat.com',
                'icon': MdEmail
            },
            {
                'type': 'Chat:',
                'data': '(+91) 623 888 0208',
                'link': 'https://api.whatsapp.com/send?phone=+916238880208&text=Hello%20TreatAt',
                'icon': FaWhatsapp
            },
            {
                'type': 'Get a call back',
                'data': '',
                'link': 'https://treatat.com/contact',
                'icon': MdPhoneCallback
            }
            
        ],

        'more': [
            {
                'to' : 'About',
                'link': '/about'
            },
            {
                'to' : 'Contact',
                'link': '/contact'
            },
            {
                'to' : 'Disclaimer',
                'link': '/disclaimer'
            },
            {
                'to' : 'Terms & Conditions',
                'link': '/tc'
            },
            {
                'to' : 'Privacy & Statement',
                'link': '/privacy-policy'
            }
        ],

        'forpatients': [
            {
                'to' : 'TreatAt Assist',
                'link': '/help'
            },
            {
                'to' : 'Steps For Medical Treatment in India',
                'link': '/steps-for-medical-treatment-in-india'
            },
            {
                'to' : 'Medical Visa',
                'link': '/visa-process'
            },
            {
                'to' : 'FAQs',
                'link': '/faqs'
            },
            {
                'to' : 'Refund policy',
                'link': '/refund'
            }
        ]

    }
]