
import Image from "next/image";

import { nunito, heebo } from "@/analytics/font/fonts";
import food from "@/analytics/image/menu-1.jpg"

const FoodCard =()=>{
    return(
        <div className="w-[700px] flex justify-start items-center gap-8 p-2">
            <Image src={food} alt='foods menu' />
            <div>
                <div className="border-b-[1px] border-slate-200 pb-2">
                    <h5 className={`${nunito.className} text-[#fea116] text-xl font-extrabold flex justify-between items-center`}>
                        <span>Chicken Burger</span>
                        <span>$115</span>
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