
import {pacifico} from "@/analytics/font/fonts";

const TitleFooter =({title})=>{
    return(
        <div class="flex justify-center items-center gap-2">
            <h4 className={`${pacifico.className} text-2xl text-[#fea116] font-normal`}>{title}</h4>
            <div className="w-[40px] h-[2px] bg-[#fea116]"></div>
        </div>
    )
}

export default TitleFooter;