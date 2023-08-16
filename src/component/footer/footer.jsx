'use client'

import {pacifico, nunito} from '@/analytics/font/fonts';
import TitleFooter from '../titleFooter/titleFooter';

const Footer =()=>{
    return(
        <div>
            <div className='flex justify-between'>
                <div>
                    <TitleFooter title={'Company'}/>
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