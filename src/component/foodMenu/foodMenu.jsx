'use client'

import { useState } from "react";
import { nunito, heebo } from "../../analytics/font/fonts";
import FoodCard from "../foodCard/foodCard";
import Title from "../title/title";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMugSaucer, faBurger, faUtensils } from "@fortawesome/free-solid-svg-icons";


import { foodMenu } from "../../analytics/data/data"; 

const buttons = [
    {id:0, icon:faMugSaucer, adjective:'Popular', meal:'breakfast', status: false},
    {id:1, icon:faBurger, adjective:'Special', meal:'launch', status: false},
    {id:2, icon:faUtensils, adjective:'Lovely', meal:'dinner', status: false},
]

const FoodMenu =()=>{
    const [meal, setMeal] = useState(null)
    const [active, setActive] = useState(buttons)

    const handelButtonMenu = (button)=>{
        const Filter = buttons.filter(item => button.id === item.id && item.adjective)
        setMeal(Filter[0].meal) 
        setActive(buttons.map(item => button.id === item.id ? {...item, status:!status } : item ))
    }

    return(
        <div className="max-w-full flex flex-col items-center justify-center my-5 md:my-20 mx-0">
            <Title title={'Food Menu'} header={'Most Popular Items'}/>
            <div className="border-b-[2px] flex flex-wrap justify-center gap-[30px] pb-[1px] mt-[50px]">
                {active.map((button , key)=>(
                    <button key={key} style={{borderBottom: button.status ? '2px solid #fea116' : '0px solid #fff'}} className='flex justify-start gap-4 pb-2' onClick={() => handelButtonMenu(button)}>
                        <FontAwesomeIcon icon={button.icon} className="text-[#fea116] text-4xl"/>
                        <div className=''>
                            <p className={`${heebo.className} text-sm text-[#666565] font-normal`}>{button.adjective}</p>
                            <h6 className={`${nunito.className} text-base font-extrabold`}>{button.meal}</h6>
                        </div>
                    </button>
                ))}
            </div>
            <div className="flex shrink flex-wrap justify-center pt-16">
                {foodMenu.filter(food => meal === food.status ).map((food,key )=> (
                    <div key={key} className="px-2">
                        <FoodCard picture={food.picture}/>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default FoodMenu;