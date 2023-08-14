import Image from "next/image";
import {nunito, heebo} from "@/analytics/font/fonts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";



const CardComment =({name, image, commnet, profession })=>{
    return(
        <div className="w-[360px] border border-slate-200 rounded-sm p-6">
            <FontAwesomeIcon icon={faQuoteLeft} className="text-[#fea116] text-5xl" />
            <div className=" py-3">
                <p className="text-[#666565] text-base font-normal">{comment}</p>  
            </div>
            <div className="flex justidy-start items-center gap-4">
                <Image src={image} alt="user image" width={50} className="rounded-full"/>
                <div className="">
                    <h5 className={`${nunito.className} text-xl font-extrabold`}>{name}</h5>
                    <p className={`${heebo.className} text-[#666565] text-sm font-normal`}>{profession}</p>
                </div>
            </div>
        </div>
    )
}

export default CardComment;