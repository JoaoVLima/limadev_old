import React from 'react';

import {Swiper, SwiperSlide} from 'swiper/react';

import 'swiper/css';


import {Keyboard, Mousewheel, HashNavigation} from 'swiper/modules';


export function Hero() {
    return (
        <>
            <div className="h-svh min-h-96 pt-28 pb-10 px-2">
                <Swiper
                    className="h-full w-full"
                    slidesPerView={"auto"}
                    centeredSlides={true}
                    spaceBetween={30}
                    initialSlide={1}
                    hashNavigation={{
                        watchState: true,
                        replaceState: true,
                    }}
                    keyboard={true}
                    grabCursor={true}
                    mousewheel={{
                        forceToAxis: true,
                    }}
                    navigation={false}
                    modules={[Keyboard, Mousewheel, HashNavigation]}
                >
                    <SwiperSlide className="rounded-3xl bg-neutral-900 text-center text-white" data-hash="Brenda">
                        <h1>Brenda</h1>
                    </SwiperSlide>
                    <SwiperSlide className="!w-1" data-hash=" ">
                        {/* Middle */}
                    </SwiperSlide>
                    <SwiperSlide className="rounded-3xl bg-neutral-900 text-center text-white" data-hash="Joao">
                        <h1>Joao</h1>
                    </SwiperSlide>
                </Swiper>
            </div>
        </>
    )
}
