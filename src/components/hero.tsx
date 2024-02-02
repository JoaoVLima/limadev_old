import React from 'react';

import {Swiper, SwiperSlide} from 'swiper/react';
import {Keyboard, Mousewheel, HashNavigation} from 'swiper/modules';
import 'swiper/css';
import {SwipeHand, HideHand} from "./swipehand.tsx";

export function Hero() {
    return (
        <>
            {!window.location.hash && <SwipeHand/>}
            <div className="px-1 pt-28 pb-10 h-screen min-h-96 lg:px-2">
                <Swiper
                    className="h-full w-full"
                    slidesPerView={"auto"}
                    centeredSlides={true}
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
                    onClick={HideHand}
                    onDrag={HideHand}
                    onTouchStart={HideHand}
                >
                    <SwiperSlide className="rounded-3xl bg-neutral-900 text-center text-white" data-hash="Brenda">
                        <h1>Brenda</h1>
                    </SwiperSlide>
                    <SwiperSlide className="!w-12" data-hash=" ">
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
