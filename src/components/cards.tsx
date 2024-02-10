import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faInstagram} from '@fortawesome/free-brands-svg-icons'

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
                    "size": "w-48 lg:w-80",
                    "color": "ring-amber-700 bg-[url(/img/brenda_img1.jpg)] bg-amber-700",
                    "translate": `translate-x-0 rotate-0
                        group-[.spreadcards]/cards:rotate-6
                        group-[.spreadcards]/cards:-translate-x-6
                        group-[.spreadcards]/cards:-translate-y-28`,
                    "z_index": "z-[70]"
                }, {
                    "size": "w-48 lg:w-80",
                    "color": "ring-amber-300 bg-amber-300",
                    "translate": `translate-x-2 -rotate-6 
                        group-[.spreadcards]/cards:rotate-0
                        group-[.spreadcards]/cards:-translate-x-72
                        group-[.spreadcards]/cards:-translate-y-32`,
                    "z_index": "z-50"
                }, {
                    "size": "w-48 lg:w-80",
                    "color": "ring-lime-700 bg-lime-700",
                    "translate": `-translate-x-3 rotate-6 
                        group-[.spreadcards]/cards:-rotate-12
                        group-[.spreadcards]/cards:-translate-x-[31rem] 
                        group-[.spreadcards]/cards:-translate-y-28`,
                    "z_index": "z-30"
                }, {
                    "size": "w-48 lg:w-80",
                    "color": "ring-blue-700 bg-blue-700",
                    "translate": `-translate-x-2 rotate-6
                        group-[.spreadcards]/cards:-rotate-[21deg]
                        group-[.spreadcards]/cards:-translate-x-[46rem]
                        group-[.spreadcards]/cards:-translate-y-10`,
                    "z_index": "z-10"
                },
                {
                    "size": "w-28 lg:w-28",
                    "color": "ring-amber-700 bg-amber-700",
                    "translate": `translate-x-0 rotate-0 
                        group-[.spreadcards]/cards:rotate-12 
                        group-[.spreadcards]/cards:-translate-x-[58rem]
                        group-[.spreadcards]/cards:translate-y-[30rem]`,
                    "z_index": "z-20"
                }, {
                    "size": "w-28 lg:w-28",
                    "color": "ring-amber-300 bg-amber-300",
                    "translate": `translate-x-2 -rotate-6 
                        group-[.spreadcards]/cards:-rotate-45
                        group-[.spreadcards]/cards:-translate-x-96 
                        group-[.spreadcards]/cards:translate-y-[30rem]`,
                    "z_index": "z-40"
                }, {
                    "size": "w-28 lg:w-28",
                    "color": "ring-lime-700 bg-lime-700",
                    "translate": `-translate-x-3 rotate-6 
                        group-[.spreadcards]/cards:rotate-[30deg]
                        group-[.spreadcards]/cards:translate-x-28 
                        group-[.spreadcards]/cards:translate-y-[28rem]`,
                    "z_index": "z-[60]"
                }
            ],
            "texts": [
                {
                    "text": "",
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
                    "size": "w-48 lg:w-80",
                    "color": "ring-red-600 bg-red-600",
                    "translate": `translate-x-0 rotate-0 
                        group-[.spreadcards]/cards:-rotate-6
                        group-[.spreadcards]/cards:translate-x-6
                        group-[.spreadcards]/cards:-translate-y-28`,
                    "z_index": "z-[70]"
                }, {
                    "size": "w-48 lg:w-80",
                    "color": "ring-amber-300 bg-amber-300",
                    "translate": `translate-x-2 -rotate-6 
                        group-[.spreadcards]/cards:rotate-0
                        group-[.spreadcards]/cards:translate-x-72
                        group-[.spreadcards]/cards:-translate-y-32`,
                    "z_index": "z-50"
                }, {
                    "size": "w-48 lg:w-80",
                    "color": "ring-lime-700 bg-lime-700",
                    "translate": `-translate-x-3 rotate-6 
                        group-[.spreadcards]/cards:rotate-12
                        group-[.spreadcards]/cards:translate-x-[31rem] 
                        group-[.spreadcards]/cards:-translate-y-28`,
                    "z_index": "z-30"
                }, {
                    "size": "w-48 lg:w-80",
                    "color": "ring-blue-700 bg-blue-700",
                    "translate": `-translate-x-3 rotate-3
                        group-[.spreadcards]/cards:rotate-[21deg]
                        group-[.spreadcards]/cards:translate-x-[46rem]
                        group-[.spreadcards]/cards:-translate-y-10`,
                    "z_index": "z-10"
                },
                {
                    "size": "w-28 lg:w-28",
                    "color": "ring-red-600 bg-red-600",
                    "translate": `translate-x-0 rotate-0 
                        group-[.spreadcards]/cards:-rotate-12 
                        group-[.spreadcards]/cards:translate-x-[70rem]
                        group-[.spreadcards]/cards:translate-y-[30rem]`,
                    "z_index": "z-20"
                }, {
                    "size": "w-28 lg:w-28",
                    "color": "ring-amber-300 bg-amber-300",
                    "translate": `translate-x-2 -rotate-6 
                        group-[.spreadcards]/cards:rotate-45
                        group-[.spreadcards]/cards:translate-x-[37rem] 
                        group-[.spreadcards]/cards:translate-y-[30rem]`,
                    "z_index": "z-40"
                }, {
                    "size": "w-28 lg:w-28",
                    "color": "ring-lime-700 bg-lime-700",
                    "translate": `-translate-x-3 rotate-6 
                        group-[.spreadcards]/cards:-rotate-[30deg]
                        group-[.spreadcards]/cards:translate-x-20 
                        group-[.spreadcards]/cards:translate-y-[28rem]`,
                    "z_index": "z-[60]"
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
    };
    return (
            <div className="grid h-full w-full grid-cols-6 place-items-center justify-items-center">
                {id=="Joao" && <Name id={id} className="col-start-1 col-end-3"/>}
                <div className={`${id=="Brenda" ? "col-start-4 col-end-4" : "col-start-3 col-end-3"} w-48 transition duration-500 ease-in-out group/cards aspect-[5/8] mb-20 lg:w-80`} id={id}>
                    {user_settings[id].cards.map((item, index) => (
                        <Card
                            key={index}
                            className={`${item.size} ring-8 ${item.color} 
                            transition ease-in-out duration-500
                            origin-bottom ${item.translate} ${item.z_index}`}
                        />
                    ))}
                    {user_settings[id].texts.map((item, index) => (
                        <Card
                            key={index}
                            className={`${item.size} ring-8 ${item.color} 
                            transition ease-in-out duration-500
                            origin-bottom ${item.translate} ${item.z_index}`}
                        />
                    ))}
                </div>
                {id=="Brenda" && <Name id={id} className="col-start-5 col-end-7"/>}
            </div>
    )
}


function Card({className}: { className: string }) {
    return (
        <div className={`absolute aspect-[5/8] rounded-3xl bg-center bg-cover transform-gpu ${className}`}></div>
    );
}

function Name({id, className}: { id: string, className: string }) {
    return (
        <div className={`${className}`}>

            <h1 className="text-9xl p-5 -tracking-[.1em]">
                {id.toUpperCase()=="BRENDA" &&
                    <>
                        <span className="text-amber-700">B</span>
                        <span className="text-orange-400">R</span>
                        <span className="text-lime-600">E</span>
                        <span className="text-cyan-500">N</span>
                        <span className="text-violet-700">D</span>
                        <span className="text-fuchsia-700">A</span>
                    </>
                }
                {id.toUpperCase()=="JOAO" &&
                    <>
                        <span className="text-red-600">J</span>
                        <span className="text-orange-500">O</span>
                        <span className="text-lime-600">A</span>
                        <span className="text-cyan-500">O</span>
                    </>
                }

                <br/>
                <span className="text-red-500">L</span>
                <span className="text-yellow-300">I</span>
                <span className="text-orange-400">M</span>
                <span className="text-blue-500">A</span>
            </h1>
            {/*<FontAwesomeIcon icon={faInstagram} size="5x"></FontAwesomeIcon>*/}
        </div>
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
