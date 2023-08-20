import { pacifico, nunito, heebo } from "@/analytics/font/fonts";


const Title =({title, header})=>{
    return(
        <>
            <div className="flex justify-center items-center gap-2">
                <div className="w-[40px] h-[2px] bg-[#fea116]"></div>
                <h5 className={`${pacifico.className} text-xl text-[#fea116] font-normal`}>{title}</h5>
                <div className="w-[40px] h-[2px] bg-[#fea116]"></div>
            </div>
            <h className={`${nunito.className} text-[40px] font-extrabold`}>{header}</h>
        </>
    )
}

export default Title;