'use client'

import CardComment from "@/component/cardComment/cardComment";
import Title from "../title/title";
import { commentUser } from "@/analytics/data/data";

// import SwiperCore, { EffectCoverflow, Pagination, Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { FreeMode, Pagination, Autoplay } from 'swiper/modules';
import SwiperCore from 'swiper';
// SwiperCore.use([EffectCoverflow, Pagination]);

const Comments =()=>{
    return(
        <div className="w-full flex flex-col flex-nowrap items-center gap-4 my-20">
            <Title title={'Testimonial'} header={'Our Clients Say!!!'}/>
            <div className="w-full mt-6">
                <Swiper
                    className="h-[300px] lg:w-[1200px] lg:h-[290px]"
                    slidesPerView={1}
                    spaceBetween={10}
                    // centeredSlides={true}
                    centeredSlidesBounds={true}
                    freeMode={true}
                    pagination={{
                      clickable: true,
                    }}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    breakpoints={{
                        768:{
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        1024:{
                            slidesPerView: 3,
                            spaceBetween: 30,
                        }
                    }}
                    modules={[Pagination, Autoplay, FreeMode]}
                > 
                    {commentUser.map(comment=>(
                        <SwiperSlide key={comment.id} className="width-[300px]">
                            <div  className="flex justify-center">
                                <CardComment name={comment.name} image={comment.image} comment={comment.comment} profession={comment.profession}/>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    )
}

export default Comments;