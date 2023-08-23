import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUtensils, faUserTie, faCartPlus, faHeadphonesSimple} from "@fortawesome/free-solid-svg-icons";

import { nunito, heebo } from "@/analytics/font/fonts";



const data = [
    {id:1, title:'Master Chefs', discription:'Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam', icon:faUserTie, time:0.5},
    {id:2, title:'Quality Food', discription:'Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam', icon:faUtensils, time:0.75},
    {id:3, title:'Online Order', discription:'Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam', icon:faCartPlus, time:1},
    {id:4, title:'24/7 Service', discription:'Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam', icon:faHeadphonesSimple, time:1.25},
]

const Service =()=>{
    return(
        <div className='flex flex-wrap justify-center content-center gap-[25px] my-10 md:px-[10px] lg:px-[60px]'>
            {data.map((card) => (
                <div key={card.id} className={`inline-block w-[270px] md:w-[310px] lg:w-[260px] h-[260px] hover:bg-[#fea116] hover:text-[#fff] p-6 shadow-3xl rounded-[2px] animate-[slide-in_1s_ease-in-out_1s]`}>
                    <FontAwesomeIcon icon={card.icon} className="text-[#fea116] text-[48px] mb-5" />
                    <h5 className={`${nunito.className} text-[20px] font-extrabold mb-3`}>{card.title}</h5>
                    <div className="md:w-[270px] lg:w-[190px] ">
                        <p className={`${heebo.className}`}>{card.discription}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Service;