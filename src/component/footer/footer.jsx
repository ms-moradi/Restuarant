'use client'

import {pacifico, nunito} from '@/analytics/font/fonts';
import TitleFooter from '../titleFooter/titleFooter';
import Button from '../button/button';
import { companyFooter, contactFooter, IconFooter } from '@/analytics/data/data';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";


const Footer =()=>{
    return(
        <div className='max-w-lg md:max-w-3xl lg:max-w-full bg-[#0F172B] text-[#fff] px-6  pb-16 pt-24 lg:px-24' >
            <div className='border-b-[1px] border-white flex flex-col items-start md:items-start lg:gap-28 lg:flex-row  lg:justify-center'>
                <div className='flex flex-col items-start gap-10 md:flex-row md:justify-between md:gap-48 lg:flex-row lg:justify-center lg:gap-24 pb-10'>
                    <div className='md:w-56 flex flex-col items-start'>
                        <TitleFooter title={'Company'}/>
                        <ul>
                            {companyFooter.map(item => (
                                <div key={item.id} className='flex justify-start items-center gap-2 mb-2'>
                                    <FontAwesomeIcon icon={faAngleRight} className=' text-[12px]'/>
                                    <li className={`${nunito.className} text-[15px] font-normal`}>{item.title}</li>
                                </div>
                            ))}
                        </ul>
                    </div>
                    <div className='flex flex-col items-start'>
                        <TitleFooter title={'Contact'}/>
                        <ul>
                            {contactFooter.map(item =>(
                                <div key={item.id} className='flex justify-start items-center gap-3 mb-3'> 
                                    <FontAwesomeIcon icon={item.icon} className='text-base'/>
                                    <li>{item.title}</li>
                                </div>
                            ))}
                        </ul>
                        <div className='flex gap-2 mt-2'>
                            {IconFooter.map(icon =>(
                                <div key={icon.id} className='w-8 h-8  flex justify-center items-center  border border-white rounded-full'>
                                    <FontAwesomeIcon  icon={icon.icon} className='text-base'/>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className='flex flex-col items-start gap-10 pb-10 md:flex-row md:justify-between md:gap-48 lg:flex-row lg:justify-center lg:gap-24'>
                    <div className={`${nunito.className} flex flex-col items-start md:w-56`}>
                        <TitleFooter title={'Opening'}/>
                        <div className='mb-4'>
                            <h5 className='text-xl font-normal mb-1'>Monday - Saturday</h5>
                            <p>09AM - 09PM</p>
                        </div>
                        <div>
                            <h5 className='text-xl font-normal mb-1'>Sunday</h5>
                            <p>10AM - 08PM</p>
                        </div>
                    </div>
                    <div className='flex flex-col items-start'>
                        <TitleFooter title={'Newsletter'}/>
                        <div className='w-64 lg:w-52'>
                            <p className={`${nunito.className} text-base  font-normal`}>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
                        </div>
                        <div className='w-[280px] lg:w-52 bg-white border-[1px] rounded-2 border-[#fea116] flex justify-start p-2 mt-8'>
                            <input className='w-[250px] lg:w-[105px] px-2' placeholder='Your email'/>
                            <Button title={'SINGUP'} width={'w-[100px] lg:w-[80px]'} height={'h-[40px]'}/>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex flex-col items-center justify-center gap-10 md:flex-row md:justify-between md:items-start pt-5'>
                <div className='flex justify-center'>
                    <p className={`${nunito.className} text-ms font-normal`}>© Your Site Name, All Right Reserved. Designed By HTML Codex</p>
                </div>
                <div>
                    <ul className={`${nunito.className} text-[15px] font-normal flex justify-center gap-3`}>
                        <li className='border-r-[1px] pr-3'>Home</li>
                        <li className='border-r-[1px] pr-3'>Cookies</li>
                        <li className='border-r-[1px] pr-3'>Help</li>
                        <li>FQAs</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer;