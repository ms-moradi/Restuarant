'use client'

import { useState } from "react";
import Image from "next/image";
import { nunito, heebo } from "../../analytics/font/fonts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {sociaNletwork } from "../../analytics/data/data";


const CardMember =({picture, name ,description})=>{
    const[display, setDisplay] = useState(false);

    const handelOnMouseEnter=()=>{
        setDisplay(true)
    }

    const handleMOuseLeave =()=>{
        setDisplay(false)
    }

    return(
        <div className="w-[260px] inline-block shadow-3xl" onMouseEnter={handelOnMouseEnter} onMouseLeave={handleMOuseLeave}>
            <div className=" flex flex-col items-center gap-6 p-3 lg:p-6">
                <div className="w-[230px] lg:w-[200px] rounded-full overflow-hidden ">
                    <Image src={picture} alt="team" className='hover:scale-115'/>
                </div>
                <div className="flex flex-col items-center">
                    <h5 className={`${nunito.className} text-xl font-extrabold`}>{name}</h5>
                    <p className={`${heebo.className} text-[#666565] text-sm font-normal`}>{description}</p>
                </div>
            </div>
            <div className={display ? 'flex justify-center gap-2' : 'hidden'}>
                {sociaNletwork.map(network =>(
                    <div key={network.id} className="w-[30px] flex justify-center bg-[#fea116] rounded-t-full p-2 ">
                        <FontAwesomeIcon icon={network.icon} className="text-[#fff] text-lg"/>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default CardMember;