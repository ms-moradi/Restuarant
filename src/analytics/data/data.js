import { faFacebookF, faInstagram, faTwitter, faYoutube, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faLocationDot, faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";

import menu1 from "@/analytics/image/menu-1.jpg";
import menu2 from "@/analytics/image/menu-2.jpg";
import menu3 from "@/analytics/image/menu-3.jpg";
import menu4 from "@/analytics/image/menu-4.jpg";
import menu5 from "@/analytics/image/menu-5.jpg";
import menu6 from "@/analytics/image/menu-6.jpg";
import menu7 from "@/analytics/image/menu-7.jpg";
import menu8 from "@/analytics/image/menu-8.jpg";
import team1 from "@/analytics/image/team-1.jpg";
import team2 from "@/analytics/image/team-2.jpg";
import team3 from "@/analytics/image/team-3.jpg";
import team4 from "@/analytics/image/team-4.jpg";
import testimonial1 from "@/analytics/image/testimonial-1.jpg";
import testimonial2 from "@/analytics/image/testimonial-2.jpg";
import testimonial3 from "@/analytics/image/testimonial-3.jpg";
import testimonial4 from "@/analytics/image/testimonial-4.jpg";

export const foodMenu = [
    {id:1, picture:menu1, status:'breakfast'},
    {id:2, picture:menu2, status:'breakfast'},
    {id:3, picture:menu3, status:'breakfast'},
    {id:4, picture:menu4, status:'breakfast'},
    {id:5, picture:menu5, status:'breakfast'},
    {id:6, picture:menu6, status:'breakfast'},
    {id:7, picture:menu7, status:'breakfast'},
    {id:8, picture:menu8, status:'breakfast'},
    {id:9, picture:menu1, status:'launch'},
    {id:10, picture:menu2, status:'launch'},
    {id:11, picture:menu3, status:'launch'},
    {id:12, picture:menu4, status:'launch'},
    {id:13, picture:menu5, status:'launch'},
    {id:14, picture:menu6, status:'launch'},
    {id:15, picture:menu7, status:'launch'},
    {id:16, picture:menu8, status:'launch'},
    {id:17, picture:menu1, status:'dinner'},
    {id:18, picture:menu2, status:'dinner'},
    {id:19, picture:menu3, status:'dinner'},
    {id:20, picture:menu4, status:'dinner'},
    {id:21, picture:menu5, status:'dinner'},
    {id:22, picture:menu6, status:'dinner'},
    {id:23, picture:menu7, status:'dinner'},
    {id:24, picture:menu8, status:'dinner'},
]

export const sociaNletwork = [
    {id:1, icon:faFacebookF},
    {id:2, icon:faTwitter},
    {id:3, icon: faInstagram},
]

export const members = [
    {id:1, name:'FullName', description:'Designation', image:team1},
    {id:2, name:'FullName', description:'Designation', image:team2},
    {id:3, name:'FullName', description:'Designation', image:team3},
    {id:4, name:'FullName', description:'Designation', image:team4},
]


export const commentUser = [
    {id:1, name:'Client Name', profession:'Profession', comment:'Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam', image:testimonial1},
    {id:2, name:'Client Name', profession:'Profession', comment:'Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam', image:testimonial2},
    {id:3, name:'Client Name', profession:'Profession', comment:'Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam', image:testimonial3},
    {id:4, name:'Client Name', profession:'Profession', comment:'Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam', image:testimonial4},
    {id:5, name:'Client Name', profession:'Profession', comment:'Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam', image:testimonial1},
    {id:6, name:'Client Name', profession:'Profession', comment:'Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam', image:testimonial2},
]

export const companyFooter = [
    {id:1, title:'About Us', link:'/About'},
    {id:2, title:'Contact Us', link:'/Contact'},
    {id:3, title:'Reservation', link:'/Booking'},
    {id:4, title:'Privacy Policy', link:'/'},
    {id:5, title:'Terms & Condition', link:'/'},
]

export const contactFooter = [
    {id:1, title:'123 Street, New York, USA', icon:faLocationDot},
    {id:2, title:'+012 345 67890', icon:faPhone},
    {id:3, title:'info@example.com', icon:faEnvelope},
]

export const IconFooter = [
    {id:1, icon:faTwitter},
    {id:2, icon:faFacebookF},
    {id:3, icon:faYoutube},
    {id:4, icon:faLinkedinIn},
]

export const contact = [
    {id:1, title:'Booking' , email:'book@example.com'},
    {id:2, title:'General' , email:'book@example.com'},
    {id:3, title:'Technical' , email:'book@example.com'},
]