import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUtensils, faUserTie, faCartPlus, faHeadphonesSimple} from "@fortawesome/free-solid-svg-icons";

import { nunito, heebo } from "@/analytics/font/fonts";



const data = [
    {id:1, title:'Master Chefs', discription:'Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam', icon:faUserTie},
    {id:2, title:'Quality Food', discription:'Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam', icon:faUtensils},
    {id:3, title:'Online Order', discription:'Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam', icon:faCartPlus},
    {id:4, title:'24/7 Service', discription:'Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam', icon:faHeadphonesSimple},
]

const Service =()=>{
    return(
        <div className='flex justify-center content-center gap-[25px] my-[80px] px-[60px]'>
            {data.map((card) => (
                <div key={card.id} className="inline-block w-[260px] h-[260px] hover:bg-[#fea116] hover:text-[#fff] p-6 shadow-3xl rounded-[2px] animate-fade-in-up">
                    <FontAwesomeIcon icon={card.icon} className="text-[#fea116] text-[48px] mb-5" />
                    <h5 className={`${nunito.className} text-[20px] font-extrabold mb-3`}>{card.title}</h5>
                    <div className="w-[190px]">
                        <p className={`${heebo.className}`}>{card.discription}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Service;