'use client'

import { useState } from "react";
import { pacifico, nunito, heebo } from "@/analytics/font/fonts";
import FoodCard from "../foodCard/foodCard";


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMugSaucer, faBurger, faUtensils } from "@fortawesome/free-solid-svg-icons";


import { foodMenu } from "@/analytics/data/data"; 

const buttons = [
    {id:1, icon:faMugSaucer, adjective:'Popular', meal:'Breakfast'},
    {id:2, icon:faBurger, adjective:'Special', meal:'Launch'},
    {id:3, icon:faUtensils, adjective:'Lovely', meal:'Dinner'},
]



const FoodMenu =()=>{
    const [meal, setMeal] = useState('breakfast')

    const handelButtonMenu = (key)=>{

        setMeal( )
        console.log(key ,meal)
    }
    return(
        <div className="flex flex-col items-center my-[150px]">
            <div className="flex justify-start items-center gap-2 pb-3">
                <div className="w-[40px] h-[2px] bg-[#fea116]"></div>
                <h5 className={`${pacifico.className} text-[#fea116] text-xl`}>Food Menu</h5>
                <div className="w-[40px] h-[2px] bg-[#fea116]"></div>
            </div>
            <div className="mb-[50px]">
                <h1 className={`${nunito.className} text-[40px] font-extrabold`}>Most Popular Items</h1>
            </div>
            <div className="border-b-[2px] flex justify-center gap-[30px] pb-2">
                {buttons.map((button , key)=>(
                    <button key={key} className="flex justify-start gap-4" onClick={event => handelButtonMenu(key)}>
                        <FontAwesomeIcon icon={button.icon} className="text-[#fea116] text-4xl"/>
                        <div>
                            <p className={`${heebo.className} text-sm text-[#666565] font-normal`}>{button.adjective}</p>
                            <h6 className={`${nunito.className} text-base font-extrabold`}>{button.meal}</h6>
                        </div>
                    </button>
                ))}
            </div>
            <div className="w-[1300px] flex shrink flex-wrap justify-center pt-16">
                {foodMenu.map((food,key )=> (
                    <div key={key} className="px-2">
                        <FoodCard picture={food.picture}/>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default FoodMenu;