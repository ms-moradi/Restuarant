
import Image from "next/image";

import banner from "../../analytics/image/bghero.jpg";
import { nunito, heebo } from "../../analytics/font/fonts";

const MiniBanner =()=>{
    return(
        <div className="relative mb-10">
            <div className="max-w-full h-96 brightness-[.2]">
                <Image src={banner} alt="banner" className="max-w-full h-96 object-cover" />
            </div>
            <div className="flex flex-col items-center absolute top-[130px] left-[39.6%]">
                <h1 className={`${nunito.className} text-[64px] text-white font-extrabold`}>About Us</h1>
                <ol className="flex gap-2 mt-2">
                    <li className={`${heebo.className} text-[#fea116] text-base`}>HOME</li>
                    <li className="text-white">/</li>
                    <li className={`${heebo.className} text-[#fea116] text-base`}>PAGES</li>
                    <li className="text-white">/</li>
                    <li className={`${heebo.className} text-white text-base`}>ABOUT</li>
                </ol>
            </div>
        </div>
    )
}

export default MiniBanner;