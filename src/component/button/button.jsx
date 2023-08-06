'use client'
import { heebo } from "@/analytics/font/fonts"

const Button =({title, px, py})=>{
    return(
        <button className={`${heebo.className} bg-[#fea116] text-[#fff] rounded-sm ${px} ${py}`}>
            {title}
        </button>
    )
}

export default Button