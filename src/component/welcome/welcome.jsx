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
        <div className="max-w-full h-auto mb-20 md:mb-40 px-[40px]">
            <div className="flex flex-col items-center justify-center lg:flex-row lg:justify-center gap-[50px] ">
                <div className="w-[280px] h-[200px] md:w-[600px] md:h-[500px]  relative mb-10 md:mb-20">
                    <Image src={about1} alt="image about" className="w-[140px] md:w-[300px] absolute top-[20px] left-[-30px] md:top-[0px]   md:left-[-10px] animate-[spinner-grow_2s_ease-in-out_0.5s]"/>
                    <Image src={about3} alt="image about" className="w-[90px] md:w-[230px] absolute top-[170px] left-[20px] md:top-[310px] md:left-[60px] animate-[spinner-grow_2s_ease-in-out_1s]"/>
                    <Image src={about2} alt="image about" className="w-[90px] md:w-[230px] absolute top-[70px] right-[70px] md:top-[70px]  md:right-[68px] animate-[spinner-grow_2s_ease-in-out_0.75s]"/>
                    <Image src={about4} alt="image about" className="w-[140px] md:w-[300px] absolute top-[170px] right-[20px] md:top-[310px] md:right-[-2px] animate-[spinner-grow_2s_ease-in-out_1.25s]"/>
                </div>
                <div className="mt-[80px]">
                    <div className="flex juatify-start items-center gap-1 pb-2">
                        <h5 className={`${pacifico.className} text-[#fea116] text-xl`}>Aboute Us </h5>
                        <div className="w-[40px] h-[2px] bg-[#fea116]"></div>
                    </div>
                    <h1 className={`${nunito.className} text-2xl md:text-4xl lg:text-[38px] font-extrabold not-italic mb-6`}>Welcome to <FontAwesomeIcon icon={faUtensils} className="text-[#fea116] font-[45px]"/> Restuarant</h1>
                    <div className="w-[280px] md:w-[650px] lg:w-[500px]">
                        <p className="text-[#666565] mb-6">
                            Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos erat ipsum et lorem et sit, sed stet lorem sit.
                        </p>
                        <p className="text-[#666565] mb-6">
                            Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet
                        </p>
                    </div>
                    <div className="flex flex-col gap-4 md:flex-row md:justify-start md:gap-20 lg:justify-between lg:gap-3 mb-10">
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