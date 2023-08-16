'use client'

import {pacifico, nunito} from '@/analytics/font/fonts';
import TitleFooter from '../titleFooter/titleFooter';
import { companyFooter } from '@/analytics/data/data';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";


const Footer =()=>{
    return(
        <div className='bg-[#0F172B]'>
            <div className='flex justify-between'>
                <div>
                    <TitleFooter title={'Company'}/>
                    <ul>
                        {companyFooter.map(item => (
                            <div key={item.id} className='flex justify-start items-center gap-2 mb-2'>
                                <FontAwesomeIcon icon={faAngleRight} className='text-[#fff] text-[12px]'/>
                                <li className={`${nunito.className} text-[15px] text-[#fff] font-normal`}>{item.title}</li>
                            </div>
                        ))}
                    </ul>
                </div>
                <div>
                    <TitleFooter title={'Contact'}/>
                    
                </div>
            </div>
            <div></div>
        </div>
    )
}

export default Footer;