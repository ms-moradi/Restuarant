
import { pacifico, nunito, heebo } from "@/analytics/font/fonts";



const BookTable =()=>{
    return(
        <div className="max-w-screen-2xl flex justify-center">
            <div></div>
            <div className="bg-[#0f172b]">
                <div className="flex justify-start items-center gap-2">
                    <h5 className={`${pacifico.className} text-[#fea116] text-xl font-normal`}>Reservation</h5>
                    <div className="w-[40px] h-[2px] bg-[#fea116]"></div>
                </div>
                <h1 className={`${nunito.className} text-[#fff] text-[40px] font-extrabold`}>Book A Table Online</h1>
                <div>
                    <div><input type='text' placeholder="Your Name"></input></div>
                    <div><input type='email' placeholder="Your Email"></input></div>
                    <div><input type='date' plaseholder="Date & Time"></input></div>
                </div>
            </div>
        </div>
    )
}

export default BookTable;