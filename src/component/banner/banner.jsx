
import { heebo,nunito } from '@/analytics/font/fonts';

import Button from "../button/button";

const Banner =()=>{
    return(
        <div className="mt-[60px]">
            <div>
                <h1 className={`${nunito.className} text-6xl font-extrabold`}>
                    Enjoy Our<br/> Delicious Meal
                </h1>
                <p className={`${heebo.className} text-4`}>
                    Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam<br/>
                    amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita<br/>
                    duo justo magna dolore erat amet
                </p>
                <Button title={'BOOk A TABLE'} px={''} py={''}/>
            </div>
            <div>

            </div>
        </div>
    )
}

export default Banner;