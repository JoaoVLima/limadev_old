import React from 'react';
import './swipehand.css'

document.addEventListener('scroll', HideHand);
document.addEventListener('keydown', HideHand);
document.addEventListener('click', HideHand);
document.addEventListener('touchstart', HideHand);

export function SwipeHand() {
    return (
        <>
            <div id="swipehand" className="absolute top-1/2 left-1/2 z-50 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center pointer-events-none">
                <div className="relative top-12 right-2 h-7 w-7 rounded-full bg-fuchsia-600 opacity-20 dot-icon"></div>
                <div className="relative top-5 right-2 h-7 w-7 rounded-full bg-gradient-to-l opacity-80 from-fuchsia-600 path"></div>
                <img src="./hand.svg" className="relative h-16 w-16 origin-bottom hand-icon"></img>
            </div>
        </>
    )
}

export function HideHand(){
    const swipehand = document.getElementById('swipehand') as HTMLDivElement;
    if (swipehand){
        swipehand.classList.add("hidehand");
    }

}
