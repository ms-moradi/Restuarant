import Image from "next/image";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faUtensils} from "@fortawesome/free-solid-svg-icons";

import { pacifico, nunito, heebo } from "@/analytics/font/fonts";
import about1 from "@/analytics/image/about1.jpg";
import about2 from "@/analytics/image/about2.jpg";
import about3 from "@/analytics/image/about3.jpg";
import about4 from "@/analytics/image/about4.jpg";
import Button from "../button/button";


const items = [
    {id:1, number:15, title:'Years of', header:'EXPERIENCE'},
    {id:2, number:50, title:'Popular', header:'MASTER CHEFS'}
]

const Welcome =()=>{
    return(
        <div className="height-auto mb-40 px-[40px]">
            <div className="flex justify-center gap-[50px] ">
                <div className="w-[550px] h-[400px]  relative">
                    <Image src={about1} alt="image about" width={270} className="absolute top-[20px] left-[0px]"/>
                    <Image src={about3} alt="image about" width={200} className="absolute top-[305px] left-[70px]"/>
                    <Image src={about2} alt="image about" width={200} className="absolute top-[90px] right-[65px]"/>
                    <Image src={about4} alt="image about" width={270} className="absolute top-[305px] right-[-5px]"/>
                </div>
                <div className="mt-[80px]">
                    <div className="flex juatify-start items-center gap-1 pb-2">
                        <h5 className={`${pacifico.className} text-[#fea116] text-xl`}>Aboute Us </h5>
                        <div className="w-[40px] h-[2px] bg-[#fea116]"></div>
                    </div>
                    <h1 className={`${nunito.className} text-4xl lg:text-[38px] font-extrabold not-italic mb-6`}>Welcome to <FontAwesomeIcon icon={faUtensils} className="text-[#fea116] font-[45px]"/> Restuarant</h1>
                    <div className="w-[500px]">
                        <p className="text-[#666565] mb-6">
                            Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos erat ipsum et lorem et sit, sed stet lorem sit.
                        </p>
                        <p className="text-[#666565] mb-6">
                            Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet
                        </p>
                    </div>
                    <div className="flex justify-between ga-3 mb-10">
                        {items.map(item=>(
                            <div key={item.id} className="flex flex-start items-center gap-4">
                                <div className="w-[5px] h-[60px] bg-[#fea116]"></div>
                                <h1 className={`${nunito.className} text-[#fea116] text-5xl font-extrabold`}>{item.number}</h1>
                                <div className="pl-2">
                                    <p className={`${heebo.className} text-[#666565] text-base font-normal`}>{item.title}</p>
                                    <h6 className={`${nunito.className} text-base font-extrabold`}>{item.header}</h6>
                                </div>
                            </div>
                        ))}
                    </div>
                    <Button title={'READ MORE'} width={'w-[200px]'} height={'h-[55px]'}/>
                    
                </div>
            </div>
        </div>
    )
}

export default Welcome;