'use client'
import { heebo } from "@/analytics/font/fonts"

const Button =({title, width, height})=>{
    return(
        <button className={`${heebo.className} ${width} ${height} bg-[#fea116] text-[#fff] rounded-sm`}>
            {title}
        </button>
    )
}

export default Button