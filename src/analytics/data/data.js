import { faFacebookF, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
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
    {id:1, picture:menu1, status:0},
    {id:2, picture:menu2, status:1},
    {id:3, picture:menu3, status:2},
    {id:4, picture:menu4, status:0},
    {id:5, picture:menu5, status:1},
    {id:6, picture:menu6, status:2},
    {id:7, picture:menu7, status:3},
    {id:8, picture:menu8, status:4},
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