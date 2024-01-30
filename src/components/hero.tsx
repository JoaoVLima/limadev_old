import React from 'react';

import {Swiper, SwiperSlide} from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


import {Keyboard, Mousewheel, HashNavigation} from 'swiper/modules';


export function Hero() {
    return (
        <>
            <div className="pt-24 pb-10 h-svh">
                <Swiper
                    className="h-full w-full"
                    slidesPerView={"auto"}
                    centeredSlides={true}
                    spaceBetween={30}
                    hashNavigation={{
                        watchState: true,
                    }}
                    keyboard={{
                        enabled: true,
                    }}
                    mousewheel={true}
                    navigation={false}

                    modules={[Keyboard, Mousewheel, HashNavigation]}

                >
                    <SwiperSlide className="rounded-r-3xl bg-neutral-900 text-center text-white" data-hash="Brenda">
                        <h1>Brenda</h1>
                    </SwiperSlide>
                    <SwiperSlide className="rounded-l-3xl bg-neutral-900 text-center text-white" data-hash="Joao">
                        <h1>Joao</h1>
                    </SwiperSlide>
                </Swiper>
            </div>
        </>
    )
}
