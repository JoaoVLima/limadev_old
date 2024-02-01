import React from 'react';
import './swipehand.css'

export function SwipeHand() {
    return (
        <>
            <div id="swipehand" className="absolute top-1/2 left-1/2 z-50 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center">
                <div className="relative h-10 w-10 rounded-full bg-fuchsia-600 opacity-20 invisible path"></div>
                <img src="./hand.svg" className="relative  h-24 w-24 hand-icon"></img>
            </div>
        </>
    )
}
