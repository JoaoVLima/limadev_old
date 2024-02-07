import React, {useRef} from 'react';

import {Swiper, SwiperSlide} from 'swiper/react';
import {Keyboard, Mousewheel, HashNavigation} from 'swiper/modules';
import 'swiper/css';
import {SwipeHand, HideHand} from "./swipehand.tsx";
import {Cards, SpreadCards} from "./cards.tsx"

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
                    onSlideChange={SpreadCards}
                    onHashSet={SpreadCards}
                    onSlideChangeTransitionStart={SpreadCards}
                    onSlideChangeTransitionEnd={SpreadCards}
                    onProgress={(swiper, progress) => {console.log(progress)}}
                >
                    <SwiperSlide className="rounded-3xl bg-neutral-900/70 text-center text-white" data-hash="Brenda">
                        <Cards id="Brenda"/>
                    </SwiperSlide>
                    <SwiperSlide className="!w-12" data-hash=" ">
                        {/* Middle */}
                    </SwiperSlide>
                    <SwiperSlide className="rounded-3xl bg-neutral-900/70 text-center text-white" data-hash="Joao">
                        <Cards id="Joao"/>
                    </SwiperSlide>
                </Swiper>
            </div>
        </>
    )
}
