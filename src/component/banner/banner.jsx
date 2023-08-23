
import Image from 'next/image';
import bghero from '../../analytics/image/bghero.jpg'
import Button from "../button/button";
import { heebo,nunito } from '@/analytics/font/fonts';
import hero from '@/analytics/image/hero.png';

const Banner =()=>{
    return(
        <div  className='max-w-full h-[750px] md:h-[1100px] lg:h-[800px] relative mt-[40px] lg:mt-[58px]'>
            <div className='h-[750px] md:h-[1100px] lg:h-[750px] bg-[#0f172b]'>
                <Image src={bghero} alt="background image" className=' h-[750px] md:h-[1100px] lg:h-[750px] mix-blend-darken object-cover'/>
            </div>
            <div className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-center gap-[60px] pt-[50px] md:pt-[170px] lg:gap-[100px] lg:pt-[90px]  px-1 absolute inset-1" >
                    <div className='mt-8 lg:mt-[100px] text-center lg:text-left animate-fade-in-left'>
                        <h1 className={`${nunito.className} text-[#fff] text-4xl md:text-5xl lg:text-7xl font-extrabold md:mb-5 lg:mb-3`}>
                            Enjoy Our<br/> Delicious Meal
                        </h1>
                        <div className='w-[350px] md:w-[700px] lg:w-[500px]'>
                            <p className={`${heebo.className} text-[#fff] text-md lg:text-4 mb-6`}>
                                Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam
                                amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita
                                duo justo magna dolore erat amet
                            </p>
                        </div>
                        <Button title={'BOOk A TABLE'} width={'w-[150px] md:w-[210px]'} height={'h-[45px] md:h-[60px]'}/>
                    </div>
                    <div className='w-[300px] h-[300px] md:w-[530px] md:h-[530px]'>
                        <Image src={hero} alt='picture of the banner' layout="responsive" className='animate-spin-slow rounded-180'/>
                    </div>
                </div>
        </div>
    )
}

export default Banner;