import React from "react";

export function Cards({ id }: { id: string }) {
    return (
        <>
            <div className="h-full w-full grid place-items-center">
            <div className="card-group aspect-[5/7] w-48" id={id}>
                <BigCard img_url=""/>
            </div>
            </div>
        </>
    )
}

function BigCard({ img_url }: { img_url: string }) {
  return (
      <div className="aspect-[5/7] bg-neutral-100 w-48 rounded-3xl translate-x-4"></div>
  );
}

export function SpreadCards() {
    const card_byhash = document.getElementById(window.location.hash.substring(1)) as HTMLDivElement;
    let cards = document.getElementsByClassName("card-group");
    if (cards){
        for (var i = 0; i < cards.length; i++) {
            let card = cards.item(i);
            if(card){
                card.classList.remove("spread_cards");
            }
        }
    }
    if (card_byhash) {
        card_byhash.classList.add("spread_cards");

    }
}
