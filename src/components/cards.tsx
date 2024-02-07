import React from "react";

export function Cards({id}: { id: string }) {
    const user_settings: {
        [key: string]: {
            [key: string]: {
                [key: string]: string
            }[]
        }
    } = {
        "Brenda": {
            "bigcards": [
                {
                    "color": "ring-amber-700 bg-amber-700",
                    "translate": `translate-x-0 rotate-0 
                        group-[.spreadcards]/cards:rotate-12 
                        group-[.spreadcards]/cards:-translate-y-16`,
                    "z_index": "z-40"
                }, {
                    "color": "ring-amber-300 bg-amber-300",
                    "translate": `translate-x-2 -rotate-6 
                        group-[.spreadcards]/cards:rotate-0 
                        group-[.spreadcards]/cards:-translate-x-36 
                        group-[.spreadcards]/cards:-translate-y-20`,
                    "z_index": "z-30"
                }, {
                    "color": "ring-lime-700 bg-lime-700",
                    "translate": `-translate-x-3 rotate-6 
                        group-[.spreadcards]/cards:-rotate-12
                        group-[.spreadcards]/cards:-translate-x-[19rem] 
                        group-[.spreadcards]/cards:-translate-y-16`,
                    "z_index": "z-20"
                }, {
                    "color": "ring-blue-700 bg-blue-700",
                    "translate": `-translate-x-2 rotate-6
                        group-[.spreadcards]/cards:-rotate-[25deg]
                        group-[.spreadcards]/cards:-translate-x-[28rem]
                        group-[.spreadcards]/cards:-translate-y-5`,
                    "z_index": "z-10"
                }
            ],
            "smallcards": [
                {
                    "color": "ring-lime-700 bg-lime-700",
                    "translate": "translate-x-2 -rotate-6",
                    "z_index": "z-30"
                }, {
                    "color": "ring-blue-700 bg-blue-700",
                    "translate": "-translate-x-3 rotate-6",
                    "z_index": "z-20"
                }, {
                    "color": "ring-violet-800 bg-violet-800",
                    "translate": "-translate-x-2 rotate-6",
                    "z_index": "z-10"
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
            "bigcards": [
                {
                    "color": "ring-red-600 bg-red-600",
                    "translate": `translate-x-0 rotate-0 
                        group-[.spreadcards]/cards:-rotate-12 
                        group-[.spreadcards]/cards:-translate-y-16`,
                    "z_index": "z-40"
                }, {
                    "color": "ring-amber-300 bg-amber-300",
                    "translate": `translate-x-2 -rotate-6 
                        group-[.spreadcards]/cards:-rotate-0 
                        group-[.spreadcards]/cards:translate-x-36 
                        group-[.spreadcards]/cards:-translate-y-20`,
                    "z_index": "z-30"
                }, {
                    "color": "ring-lime-700 bg-lime-700",
                    "translate": `-translate-x-3 rotate-6 
                        group-[.spreadcards]/cards:rotate-12
                        group-[.spreadcards]/cards:translate-x-[19rem] 
                        group-[.spreadcards]/cards:-translate-y-16`,
                    "z_index": "z-20"
                }, {
                    "color": "ring-blue-700 bg-blue-700",
                    "translate": `-translate-x-2 rotate-6
                        group-[.spreadcards]/cards:rotate-[25deg]
                        group-[.spreadcards]/cards:translate-x-[28rem]
                        group-[.spreadcards]/cards:-translate-y-5`,
                    "z_index": "z-10"
                }
            ],
            "smallcards": [
                {
                    "color": "ring-amber-700 bg-amber-700",
                    "translate": "translate-x-0 rotate-0",
                    "z_index": "z-40"
                }, {
                    "color": "ring-amber-300 bg-amber-300",
                    "translate": "translate-x-2 -rotate-6",
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
    };
    return (
        <>
            <div className="h-full w-full grid place-items-center">
                <div className="transition ease-in-out duration-500 group/cards aspect-[5/7] w-48 lg:w-64" id={id}>
                    {user_settings[id].bigcards.map((item, index) => (
                        <BigCard
                            key={index}
                            className={`ring ${item.color} 
                            transition ease-in-out duration-500 
                            origin-bottom ${item.translate} ${item.z_index}`}
                        />
                    ))}
                </div>
            </div>
        </>
    )
}


function BigCard({className}: { className: string }) {
    return (
        <div className={`absolute aspect-[5/7] w-48 lg:w-64 rounded-3xl bg-center bg-cover transform-gpu ${className}`}></div>
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
