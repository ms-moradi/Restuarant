'use client'

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUtensils, faUserTie, faCartPlus, faHeadphonesSimple} from "@fortawesome/free-solid-svg-icons";

import { nunito, heebo } from "../../analytics/font/fonts";



const data = [
    {id:1, title:'Master Chefs', discription:'Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam', icon:faUserTie, time:0.5 ,status:false},
    {id:2, title:'Quality Food', discription:'Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam', icon:faUtensils, time:0.75, state:false},
    {id:3, title:'Online Order', discription:'Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam', icon:faCartPlus, time:1, state:false},
    {id:4, title:'24/7 Service', discription:'Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam', icon:faHeadphonesSimple, time:1.25, state:false},
]

const Service =()=>{
    const [Hover, setHover] = useState(data)

    const MouseOver=(id)=>{
        setHover(Hover.map(item => id === item.id ? {...item, status:true} : item))
    }
    const MouseOut=(id)=>{
        setHover(Hover.map(item => id === item.id ? {...item, status:false} : item))
    }

    return(
        <div className='flex flex-wrap justify-center content-center gap-[25px] my-10 md:px-[10px] lg:px-[60px]'>
            {Hover.map((card) => (
                <div key={card.id}onMouseOver={()=>MouseOver(card.id)} onMouseOut={()=>MouseOut(card.id)} className={`inline-block w-[270px] md:w-[310px] lg:w-[260px] h-[260px] hover:bg-[#fea116] hover:fill-[#fff] hover:text-[#fff] p-6 shadow-3xl rounded-[2px] animate-[slide-in_1s_ease-in-out_1s]`}>
                    <div >
                        <FontAwesomeIcon icon={card.icon} style={card.status ? {color:'#fff'} : {color:'#fea116'}} className="text-[#fea116] text-[48px] mb-5" />
                    </div>
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