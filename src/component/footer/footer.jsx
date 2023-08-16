'use client'

import {pacifico, nunito} from '@/analytics/font/fonts';
import TitleFooter from '../titleFooter/titleFooter';
import { companyFooter } from '@/analytics/data/data';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";


const Footer =()=>{
    return(
        <div>
            <div className='flex justify-between'>
                <div>
                    <TitleFooter title={'Company'}/>
                    <ul>
                        {companyFooter.map(item => (
                            <div key={item.id}>
                                <FontAwesomeIcon icon={faAngleRight} />
                                <li>{item.title}</li>
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