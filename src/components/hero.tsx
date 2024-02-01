import React from 'react';

import {Swiper, SwiperSlide} from 'swiper/react';
import {Keyboard, Mousewheel, HashNavigation} from 'swiper/modules';
import 'swiper/css';
import {SwipeHand} from "./swipehand.tsx";

export function Hero() {
    return (
        <>
            <SwipeHand/>
            <div className="px-1 pt-28 pb-10 h-svh min-h-96 lg:px-2">
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
                        forceToAxis: false,
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
