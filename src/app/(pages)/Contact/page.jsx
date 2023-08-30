import dynamic from 'next/dynamic'
const Map = dynamic(async () => await import('../../../component/map/map'), { ssr: false })

import Title from "@/component/title/title";
import Button from "@/component/button/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelopeOpen } from "@fortawesome/free-solid-svg-icons";
import { contact } from "@/analytics/data/data";
import { pacifico, heebo } from '../../../analytics/font/fonts';


const Contact =()=>{
    return(
        <div className="flex flex-col px-10 lg:px-40 ">
            <Title title={'Contact Us'} header={'Contact For Any Query'}/>
            <div className="flex flex-col items-start justify-baseline gap-10 md:flex-row md:justify-start md:items-baseline md:gap-[80px] lg:gap-[200px] mt-16 ">
                {contact.map(item =>(
                    <div key={item.id} className="flex flex-col items-start">
                        <div className="flex justify-center items-center gap-2 mb-2">
                            <h5 className={`${pacifico.className} text-xl text-[#fea116] font-normal`}>{item.title}</h5>
                            <div className="w-[40px] h-[2px] bg-[#fea116]"></div>
                        </div>
                        <div className="flex justify-start items-baseline gap-2">
                            <FontAwesomeIcon icon={faEnvelopeOpen} className="text-[#fea116] text-base"/>
                            <p className={`${heebo.className} text-[#666565]`}>{item.email}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="flex flex-col md:flex-row gap-3 py-8">
                <div className="w-full md:w-1/2 h-[200px] md:h-[385px] lg:h-[315px] border border-slate-500 relative">
                    <Map/>
                </div>
                <div className="w-full md:w-1/2 flex flex-col gap-3">
                    <div className="flex flex-col lg:flex-row gap-3">
                        <input type='text' placeholder="Your Name" className="w-full lg:w-[245px] h-[60px] border border-slate-500 p-3"/>
                        <input type='text' placeholder="Your Email" className="w-full lg:w-[245px] h-[60px] border border-slate-500 p-3"/>
                    </div>
                    <input type='text' placeholder="Subject" className="w-full h-[60px] border border-slate-500 p-3"/>
                    <textarea placeholder="Massage" className="w-full h-[100px] border border-slate-500 p-3"/>
                    <Button title='SEND MASSAGE' width={'w-full md:w-1/2 lg:w-full'} height={'h-[60px]'}/>
                </div>
            </div>
        </div>
    )
}

export default Contact;