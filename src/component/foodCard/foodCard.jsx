
import Image from "next/image";

import { nunito, heebo } from "@/analytics/font/fonts";

const FoodCard =({picture})=>{
    return(
        <div className="w-[290px] md:w-[600px] lg:w-[550px] flex gap-6 p-2">
            <Image src={picture} alt='foods menu'  className="w-[110px] lg:w-[90px]"/>
            <div className="w-[290px] md:w-[600px] lg:w-[500px]">
                <div className="border-b-[1px] border-slate-200 pb-2">
                    <h5 className={`${nunito.className} text-base md:text-xl font-extrabold flex justify-start gap-5 md:justify-between items-center`}>
                        <span>Chicken Burger</span>
                        <span className="text-[#fea116]">$115</span>
                    </h5>
                </div>
                <div className="pt-2">
                    <p className={`${heebo.className} text-sm text-[#666565] font-normal`}>Ipsum ipsum clita erat amet dolor justo diam</p>
                </div>
            </div>
        </div>
    )
}

export default FoodCard;