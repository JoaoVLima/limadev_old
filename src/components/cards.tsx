import React from "react";
import {SwipeHand} from "./swipehand.tsx";

export function Cards({id}: { id: string }) {
    const user_settings: {
        [key: string]: {
            [key: string]: {
                [key: string]: string
            }[]
        }
    } = {
        "Brenda": {
            "cards": [
                {
                    "size": "w-48 lg:w-64",
                    "color": "ring-amber-700 bg-amber-700",
                    "translate": `translate-x-0 rotate-0 
                        group-[.spreadcards]/cards:rotate-12 
                        group-[.spreadcards]/cards:-translate-y-16`,
                    "z_index": "z-40"
                }, {
                    "size": "w-48 lg:w-64",
                    "color": "ring-amber-300 bg-amber-300",
                    "translate": `translate-x-2 -rotate-6 
                        group-[.spreadcards]/cards:rotate-0 
                        group-[.spreadcards]/cards:-translate-x-36 
                        group-[.spreadcards]/cards:-translate-y-20`,
                    "z_index": "z-30"
                }, {
                    "size": "w-48 lg:w-64",
                    "color": "ring-lime-700 bg-lime-700",
                    "translate": `-translate-x-3 rotate-6 
                        group-[.spreadcards]/cards:-rotate-12
                        group-[.spreadcards]/cards:-translate-x-[19rem] 
                        group-[.spreadcards]/cards:-translate-y-16`,
                    "z_index": "z-20"
                }, {
                    "size": "w-48 lg:w-64",
                    "color": "ring-blue-700 bg-blue-700",
                    "translate": `-translate-x-2 rotate-6
                        group-[.spreadcards]/cards:-rotate-[25deg]
                        group-[.spreadcards]/cards:-translate-x-[28rem]
                        group-[.spreadcards]/cards:-translate-y-5`,
                    "z_index": "z-10"
                },
                {
                    "size": "w-28 lg:w-28",
                    "color": "ring-amber-700 bg-amber-700",
                    "translate": `translate-x-0 rotate-0 
                        group-[.spreadcards]/cards:rotate-12 
                        group-[.spreadcards]/cards:-translate-y-16`,
                    "z_index": "z-50"
                }, {
                    "size": "w-28 lg:w-28",
                    "color": "ring-amber-300 bg-amber-300",
                    "translate": `translate-x-2 -rotate-6 
                        group-[.spreadcards]/cards:rotate-0 
                        group-[.spreadcards]/cards:-translate-x-36 
                        group-[.spreadcards]/cards:-translate-y-20`,
                    "z_index": "z-50"
                }, {
                    "size": "w-28 lg:w-28",
                    "color": "ring-lime-700 bg-lime-700",
                    "translate": `-translate-x-3 rotate-6 
                        group-[.spreadcards]/cards:-rotate-12
                        group-[.spreadcards]/cards:-translate-x-[19rem] 
                        group-[.spreadcards]/cards:-translate-y-16`,
                    "z_index": "z-50"
                }
            ],
            "texts": [
                {
                    "text": "ring-lime-700 bg-lime-700",
                    "a_link": "translate-x-2 -rotate-6",
                    "z_index": "z-30"
                }, {
                    "color": "ring-lime-700 bg-lime-700",
                    "translate": "-translate-x-3 rotate-6",
                    "z_index": "z-20"
                }, {
                    "color": "ring-blue-700 bg-blue-700",
                    "translate": "-translate-x-2 rotate-6",
                    "z_index": "z-10"
                }
            ],
        },
        "Joao": {
            "cards": [
                {
                    "size": "w-48 lg:w-64",
                    "color": "ring-red-600 bg-red-600",
                    "translate": `translate-x-0 rotate-0 
                        group-[.spreadcards]/cards:-rotate-12 
                        group-[.spreadcards]/cards:-translate-y-16`,
                    "z_index": "z-40"
                }, {
                    "size": "w-48 lg:w-64",
                    "color": "ring-amber-300 bg-amber-300",
                    "translate": `translate-x-2 -rotate-6 
                        group-[.spreadcards]/cards:-rotate-0 
                        group-[.spreadcards]/cards:translate-x-36 
                        group-[.spreadcards]/cards:-translate-y-20`,
                    "z_index": "z-30"
                }, {
                    "size": "w-48 lg:w-64",
                    "color": "ring-lime-700 bg-lime-700",
                    "translate": `-translate-x-3 rotate-6 
                        group-[.spreadcards]/cards:rotate-12
                        group-[.spreadcards]/cards:translate-x-[19rem] 
                        group-[.spreadcards]/cards:-translate-y-16`,
                    "z_index": "z-20"
                }, {
                    "size": "w-48 lg:w-64",
                    "color": "ring-blue-700 bg-blue-700",
                    "translate": `-translate-x-3 rotate-3
                        group-[.spreadcards]/cards:rotate-[25deg]
                        group-[.spreadcards]/cards:translate-x-[28rem]
                        group-[.spreadcards]/cards:-translate-y-5`,
                    "z_index": "z-10"
                },
                {
                    "size": "w-28 lg:w-28",
                    "color": "ring-red-600 bg-red-600",
                    "translate": `translate-x-0 rotate-0 
                        group-[.spreadcards]/cards:-rotate-12 
                        group-[.spreadcards]/cards:-translate-y-16`,
                    "z_index": "z-50"
                }, {
                    "size": "w-28 lg:w-28",
                    "color": "ring-amber-300 bg-amber-300",
                    "translate": `translate-x-2 -rotate-6 
                        group-[.spreadcards]/cards:-rotate-0 
                        group-[.spreadcards]/cards:translate-x-36 
                        group-[.spreadcards]/cards:-translate-y-20`,
                    "z_index": "z-50"
                }, {
                    "size": "w-28 lg:w-28",
                    "color": "ring-lime-700 bg-lime-700",
                    "translate": `-translate-x-3 rotate-6 
                        group-[.spreadcards]/cards:rotate-12
                        group-[.spreadcards]/cards:translate-x-[19rem] 
                        group-[.spreadcards]/cards:-translate-y-16`,
                    "z_index": "z-50"
                }
            ],
        },
    };
    return (
        <>
            <div className="grid h-full w-full grid-cols-5 place-items-center justify-items-center">
                {id == "Joao" && <Name id={id} className="col-start-1 col-end-3"/>}
                <div className="col-start-3 col-end-3 w-48 transition duration-500 ease-in-out group/cards aspect-[5/7] lg:w-64" id={id}>
                    {user_settings[id].cards.map((item, index) => (
                        <Card
                            key={index}
                            className={`${item.size} ring ${item.color} 
                            transition ease-in-out duration-500
                            origin-bottom ${item.translate} ${item.z_index}`}
                        />
                    ))}
                </div>
                {id == "Brenda" && <Name id={id} className="col-start-4 col-end-6"/>}
            </div>
        </>
    )
}


function Card({className}: { className: string }) {
    return (
        <div className={`absolute aspect-[5/7] rounded-3xl bg-center bg-cover transform-gpu ${className}`}></div>
    );
}

function Name({id, className}: { id: string, className: string }) {
    return (
        <div className={`${className}`}>{id.toUpperCase()} LIMA</div>
    );
}

export function SpreadCards() {
    const card_byhash = document.getElementById(window.location.hash.substring(1)) as HTMLDivElement;
    let cards = document.getElementsByClassName("group/cards");
    if (cards) {
        for (var i = 0; i < cards.length; i++) {
            let card = cards.item(i);
            if (card) {
                card.classList.remove("spreadcards");
            }
        }
    }
    if (card_byhash) {
        card_byhash.classList.add("spreadcards");

    }
}
