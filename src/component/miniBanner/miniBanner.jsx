"use client"
import Image from "next/image";
import { usePathname } from 'next/navigation'
import banner from "../../analytics/image/bghero.jpg";
import { nunito, heebo } from "../../analytics/font/fonts";

const MiniBanner =()=>{
    const pathname = usePathname().replace('/',' ')

    return(
        <div className="max-w-scree-full h-auto flex justify-center relative mb-10">
            <div className="max-w-full h-96  bg-[#0f172b]">
                <Image src={banner} alt="banner" className="max-w-full h-96 mix-blend-darken  object-cover" />
            </div>
            <div className="w-auto h-auto absolute top-[130px] pt-10">
                <div className=" flex flex-col items-center justify-center ">
                    <h1 className={`${nunito.className} text-2xl md:text-[64px] text-white font-extrabold mb-0 md:mb-3`}>{pathname}</h1>
                    <ol className="flex gap-2 mt-2">
                        <li className={`${heebo.className} text-[#fea116] text-sm lg:text-base`}>HOME</li>
                        <li className="text-white">/</li>
                        <li className={`${heebo.className} text-[#fea116] text-sm lg:text-base`}>PAGES</li>
                        <li className="text-white">/</li>
                        <li className={`${heebo.className} text-white text-sm lg:text-base`}>{pathname}</li>
                    </ol>
                </div>
            </div>
        </div>
    )
}

export default MiniBanner;