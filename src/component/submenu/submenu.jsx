
import Link from "next/link";

const Submenu =({display})=>{
    return(
            <ul className={`lg:w-[120px] lg:h-[80px] ${display} bg-white text-[#000] sm lg:absolute lg:top-[70px] lg:right-[270px] lg:z-10`}>
                <Link href="/Booking"><li className="hover:bg-blue-100 cursor-pointer">Booking</li></Link>
                <Link href="/Team"><li className="hover:bg-blue-100 cursor-pointer">Our Team</li></Link>
                <Link href="/Testimonial"><li className="hover:bg-blue-100 cursor-pointer">Testimonial</li></Link>
            </ul>
        
    )
}

export default Submenu;