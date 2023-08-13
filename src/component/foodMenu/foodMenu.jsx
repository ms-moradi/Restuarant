
import { pacifico, nunito, heebo } from "@/analytics/font/fonts";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMugSaucer, faBurger, faUtensils } from "@fortawesome/free-solid-svg-icons";

const buttons = [
    {id:1, icon:faMugSaucer, adjective:'Popular', meal:'Breakfast'},
    {id:2, icon:faBurger, adjective:'Special', meal:'Launch'},
    {id:3, icon:faUtensils, adjective:'Lovely', meal:'Dinner'},
]

const FoodMenu =()=>{
    return(
        <div className="flex flex-col items-center my-[200px]">
            <div className="flex justify-start items-center gap-2 pb-3">
                <div className="w-[40px] h-[2px] bg-[#fea116]"></div>
                <h5 className={`${pacifico.className} text-[#fea116] text-xl`}>Food Menu</h5>
                <div className="w-[40px] h-[2px] bg-[#fea116]"></div>
            </div>
            <div className="mb-[50px]">
                <h1 className={`${nunito.className} text-[40px] font-extrabold`}>Most Popular Items</h1>
            </div>
            <div className="border-b-[2px] flex justify-center gap-[30px] pb-2">
                {buttons.map(button =>(
                    <div key={button.id} className="flex justify-start gap-4" onClick={handelButtonMenu}>
                        <FontAwesomeIcon icon={button.icon} className="text-[#fea116] text-4xl"/>
                        <div>
                            <p className={`${heebo.className} text-sm text-[#666565] font-normal`}>{button.adjective}</p>
                            <h6 className={`${nunito.className} text-base font-extrabold`}>{button.meal}</h6>
                        </div>
                    </div>
                ))}
            </div>
            
            
        
        </div>
    )
}

export default FoodMenu;