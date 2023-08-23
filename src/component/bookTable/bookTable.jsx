
import Button from "../button/button";
import Image from "next/image";
import video from "@/analytics/image/video.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { pacifico, nunito } from "@/analytics/font/fonts";



const BookTable =()=>{
    return(
        <div className="max-w-full flex flex-col items-center lg:flex-row lg:justify-center my-6 animate-slide-in-up ">
            <div className="max-w-full w-[768px] lg:w-1/2  lg:h-[510px] relative">
                <Image src={video} alt='video' className="w-[768px] h-[510px]"/>
                <div className="w-32 h-32 bg-[#fea116] rounded-full flex absolute top-[220px] left-[130px] md:left-[310px] lg:left-[280px] animate-ping-slow"></div>
                <div className="w-32 h-32 flex justify-center items-center bg-[#fea116] rounded-full absolute top-[220px] left-[130px] md:left-[310px] lg:left-[280px] z-20 ">
                    <FontAwesomeIcon icon={faPlay} className=" text-[#0f172b] text-5xl"/>
                </div>
            </div>
            <div className="max-w-full w-[768px] h-auto lg:w-1/2 lg:h-[510px] bg-[#0f172b] p-12">
                <div className="flex justify-start items-center gap-2">
                    <h5 className={`${pacifico.className} text-[#fea116] text-xl font-normal`}>Reservation</h5>
                    <div className="w-[40px] h-[2px] bg-[#fea116]"></div>
                </div>
                <h1 className={`${nunito.className} text-[#fff] text-[40px] font-extrabold`}>Book A Table Online</h1>
                <div>
                    <div className='flex flex-col items-start md:flex-row md:justify-between'>
                        <input type='text' placeholder="Your Name" className="w-[280px] h-14 rounded-3 px-5 md:mr-2 mt-4"/>
                        <input type='text' placeholder="Your Email" className="w-[280px] h-14 rounded-3 px-5 md:ml-2 mt-4"/>
                    </div>
                    <div className='flex flex-col items-start md:flex-row md:justify-between'>
                        <input type='data' placeholder="Date & Time" className="w-[280px] h-14 rounded-3 px-5 md:mr-2 mt-4"/>
                        <select className="w-[280px] h-14 rounded-3 px-5 md:ml-2 mt-4">
                            <option value='1'>People 1</option>
                            <option value='2'>People 2</option>
                            <option value='3'>People 3</option>
                        </select>
                    </div>
                    <div>
                        <textarea placeholder="Special Request" id="massage" className="w-full h-24 p-5 my-4"></textarea>
                    </div>
                    <Button title={'BOOK NOW'} width={'w-full'} height={'h-14'}/>
                </div>
            </div>
        </div>
    )
}

export default BookTable;