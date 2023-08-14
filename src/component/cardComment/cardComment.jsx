import Image from "next/image";
import {nunito, heebo} from "@/analytics/font/fonts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import testimonial3 from "@/analytics/image/testimonial-3.jpg";


const CardComment =()=>{
    return(
        <div className="w-[360px] border border-slate-200 rounded-sm p-6">
            <FontAwesomeIcon icon={faQuoteLeft} className="text-[#fea116] text-5xl" />
            <div className=" py-3">
                <p className="text-[#666565] text-base font-normal">Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam</p>  
            </div>
            <div className="flex justidy-start items-center gap-4">
                <Image src={testimonial3} alt="user image" width={50} className="rounded-full"/>
                <div className="">
                    <h5 className={`${nunito.className} text-xl font-extrabold`}>Client Neme</h5>
                    <p className={`${heebo.className} text-[#666565] text-sm font-normal`}>Profession</p>
                </div>
            </div>
        </div>
    )
}

export default CardComment;