'use client'

import Image from "next/image";
import { nunito, heebo } from "@/analytics/font/fonts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {sociaNletwork } from "@/analytics/data/data";
import team1 from "@/analytics/image/team-1.jpg";

const CardMember =({picture, name ,description})=>{
    return(
        <div className="w-[220px] inline-block shadow-3xl p-6">
            <div className=" flex flex-col items-center gap-6 pb-6">
                <div className="rounded-full overflow-hidden">
                    <Image src={picture} alt="team" className="hover:scale-125"/>
                </div>
                <div className="flex flex-col items-center">
                    <h5 className={`${nunito.className} text-xl font-extrabold`}>{name}</h5>
                    <p className={`${heebo.className} text-[#666565] text-sm font-normal`}>{description}</p>
                </div>
            </div>
            <div>
                {sociaNletwork.map(network =>(
                    <div key={network.id} className="w-[30px] flex justify-center bg-[#fea116] rounded-t-full p-3">
                        <FontAwesomeIcon icon={network.icon} className="text-[#fff] text-lg"/>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default CardMember;