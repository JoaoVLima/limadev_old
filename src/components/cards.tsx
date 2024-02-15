import React from "react";

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {IconDefinition} from "@fortawesome/fontawesome-common-types"
import {SizeProp} from "@fortawesome/fontawesome-svg-core";
import {faInstagram, faLinkedinIn, faBehance, faGithub} from "@fortawesome/free-brands-svg-icons";
import {faLink} from "@fortawesome/free-solid-svg-icons";

const user_settings: {
    [key: string]: {
        [key: string]: {
            [key: string]: string | IconDefinition
        }[]
    }
} = {
    "Brenda": {
        "cards": [
            {
                "size": "w-48 lg:w-80",
                "color": `ring-amber-700 
                        bg-[image:linear-gradient(to_bottom,theme(colors.amber.700/10%),theme(colors.amber.700/10%)),url(/img/brenda_img1.jpg)]
                        bg-amber-700`,
                "translate": `translate-x-0 rotate-0
                        group-[.spreadcards]/cards:rotate-6
                        group-[.spreadcards]/cards:-translate-x-6
                        group-[.spreadcards]/cards:-translate-y-28`,
                "z_index": "z-[70]"
            }, {
                "size": "w-48 lg:w-80",
                "color": `ring-amber-400 
                    bg-[image:linear-gradient(to_bottom,theme(colors.amber.300/10%),theme(colors.amber.400/10%)),url(/img/brenda_img2.jpg)]
                    bg-amber-400`,
                "translate": `translate-x-2 -rotate-6 
                        group-[.spreadcards]/cards:rotate-0
                        group-[.spreadcards]/cards:-translate-x-72
                        group-[.spreadcards]/cards:-translate-y-32`,
                "z_index": "z-50"
            }, {
                "size": "w-48 lg:w-80",
                "color": `ring-lime-700 
                    bg-[image:linear-gradient(to_bottom,theme(colors.lime.700/10%),theme(colors.lime.700/10%)),url(/img/brenda_img3.jpg)]
                    bg-lime-700`,
                "translate": `-translate-x-3 rotate-6 
                        group-[.spreadcards]/cards:-rotate-12
                        group-[.spreadcards]/cards:-translate-x-[31rem] 
                        group-[.spreadcards]/cards:-translate-y-28`,
                "z_index": "z-30"
            }, {
                "size": "w-48 lg:w-80",
                "color": `ring-blue-700
                     bg-[image:linear-gradient(to_bottom,theme(colors.blue.700/10%),theme(colors.blue.700/10%)),url(/img/brenda_img4.jpg)]
                     bg-blue-700`,
                "translate": `-translate-x-2 rotate-6
                        group-[.spreadcards]/cards:-rotate-[21deg]
                        group-[.spreadcards]/cards:-translate-x-[46rem]
                        group-[.spreadcards]/cards:-translate-y-10`,
                "z_index": "z-10"
            },
            {
                "size": "w-28 lg:w-28",
                "color": `ring-fuchsia-700
                     bg-[image:linear-gradient(to_bottom,theme(colors.amber.700/10%),theme(colors.fuchsia.700/10%)),url(/img/brenda_img5.jpg)]
                     bg-fuchsia-700`,
                "translate": `translate-x-0 rotate-0 
                        group-[.spreadcards]/cards:rotate-12 
                        group-[.spreadcards]/cards:-translate-x-[58rem]
                        group-[.spreadcards]/cards:translate-y-[30rem]`,
                "z_index": "z-20"
            }, {
                "size": "w-28 lg:w-28",
                "color": `ring-amber-300
                     bg-[image:linear-gradient(to_bottom,theme(colors.amber.400/10%),theme(colors.amber.300/10%)),url(/img/brenda_img6.jpg)]
                     bg-amber-300`,
                "translate": `translate-x-2 -rotate-6 
                        group-[.spreadcards]/cards:-rotate-45
                        group-[.spreadcards]/cards:-translate-x-60 
                        group-[.spreadcards]/cards:translate-y-[25rem]`,
                "z_index": "z-40"
            }, {
                "size": "w-28 lg:w-28",
                "color": `ring-lime-700
                     bg-[image:linear-gradient(to_bottom,theme(colors.lime.700/10%),theme(colors.lime.700/10%)),url(/img/brenda_img7.jpg)]
                     bg-lime-700`,
                "translate": `-translate-x-3 rotate-6 
                        group-[.spreadcards]/cards:rotate-[30deg]
                        group-[.spreadcards]/cards:translate-x-28 
                        group-[.spreadcards]/cards:translate-y-[28rem]`,
                "z_index": "z-[60]"
            }
        ],
        "texts": [
            {
                "text": "\n Actress",
                "link": "mailto:brenda@lima.dev",
                "size": "text-6xl text-left inline-block align-text-bottom whitespace-pre-line",
                "translate": `absolute -translate-x-40 -translate-y-10 -rotate-[70deg]
                        group-[.spreadcards]/cards:rotate-0
                        group-[.spreadcards]/cards:-translate-x-[61rem]
                        group-[.spreadcards]/cards:translate-y-[33rem]`,
                "z_index": "z-20"
            },
            {
                "text": "\n Influencer",
                "link": "mailto:brenda@lima.dev",
                "size": "text-6xl text-left inline-block align-text-bottom whitespace-pre-line",
                "translate": `absolute -translate-x-28 translate-y-[25rem] rotate-[16deg]
                        group-[.spreadcards]/cards:rotate-0
                        group-[.spreadcards]/cards:-translate-x-[36rem]
                        group-[.spreadcards]/cards:translate-y-[33rem]`,
                "z_index": "z-40"
            },
            {
                "text": "Event \n Organizer",
                "link": "mailto:brenda@lima.dev",
                "size": "text-6xl text-left inline-block align-text-baseline whitespace-pre-line",
                "translate": `absolute -translate-x-2 translate-y-20 -rotate-[85deg]
                        group-[.spreadcards]/cards:rotate-0
                        group-[.spreadcards]/cards:-translate-x-40
                        group-[.spreadcards]/cards:translate-y-[33rem]`,
                "z_index": "z-[60]"
            },
            {
                "text": "Brenda@Lima.dev",
                "link": "mailto:brenda@lima.dev",
                "size": "text-4xl text-neutral-400 text-left inline-block align-text-baseline whitespace-pre-line",
                "translate": `absolute -translate-x-10 translate-y-20 -rotate-[85deg]
                        group-[.spreadcards]/cards:rotate-0
                        group-[.spreadcards]/cards:-translate-x-[33rem]
                        group-[.spreadcards]/cards:translate-y-[44rem]`,
                "z_index": "z-[60]"
            },
        ],
        "icons": [
            {
                "icon": faInstagram,
                "color": "text-neutral-400 group-hover:text-[#C13584]",
                "size": "4x",
                "rotate": "-rotate-[78deg]",
                "link": "https://www.instagram.com/breranja/",
            },
            {
                "icon": faLinkedinIn,
                "color": "text-neutral-400 group-hover:text-[#0A66C2]",
                "size": "4x",
                "rotate": "-rotate-[10deg]",
                "link": "https://www.linkedin.com/in/brendalimas/",
            },
            {
                "icon": faBehance,
                "color": "text-neutral-400 group-hover:text-[#1769FF]",
                "size": "4x",
                "rotate": "rotate-6",
                "link": "",
            },
            {
                "icon": faLink,
                "color": "text-neutral-400 group-hover:text-[#41E661]",
                "size": "4x",
                "rotate": "rotate-[80deg]",
                "link": "",
            },
        ],
    },
    "Joao": {
        "cards": [
            {
                "size": "w-48 lg:w-80",
                "color": `ring-red-600
                     bg-[image:linear-gradient(to_bottom,theme(colors.red.600/10%),theme(colors.red.600/10%)),url(/img/joao_img1.jpg)]
                     bg-red-600`,
                "translate": `translate-x-0 rotate-0
                        group-[.spreadcards]/cards:-rotate-6
                        group-[.spreadcards]/cards:translate-x-6
                        group-[.spreadcards]/cards:-translate-y-28`,
                "z_index": "z-[70]"
            }, {
                "size": "w-48 lg:w-80",
                "color": `ring-amber-400
                     bg-[image:linear-gradient(to_bottom,theme(colors.amber.400/10%),theme(colors.amber.400/10%)),url(/img/joao_img2.jpg)]
                     bg-amber-400`,
                "translate": `translate-x-2 -rotate-6 
                        group-[.spreadcards]/cards:rotate-0
                        group-[.spreadcards]/cards:translate-x-72
                        group-[.spreadcards]/cards:-translate-y-32`,
                "z_index": "z-50"
            }, {
                "size": "w-48 lg:w-80",
                "color": `ring-lime-700
                     bg-[image:linear-gradient(to_bottom,theme(colors.lime.700/10%),theme(colors.lime.700/10%)),url(/img/joao_img3.jpg)]
                     bg-lime-700`,
                "translate": `-translate-x-3 rotate-6 
                        group-[.spreadcards]/cards:rotate-12
                        group-[.spreadcards]/cards:translate-x-[31rem] 
                        group-[.spreadcards]/cards:-translate-y-28`,
                "z_index": "z-30"
            }, {
                "size": "w-48 lg:w-80",
                "color": `ring-blue-700
                     bg-[image:linear-gradient(to_bottom,theme(colors.blue.700/10%),theme(colors.blue.700/10%)),url(/img/joao_img4.jpg)]
                     bg-blue-700`,
                "translate": `-translate-x-3 rotate-3
                        group-[.spreadcards]/cards:rotate-[21deg]
                        group-[.spreadcards]/cards:translate-x-[46rem]
                        group-[.spreadcards]/cards:-translate-y-10`,
                "z_index": "z-10"
            },
            {
                "size": "w-28 lg:w-28",
                "color": `ring-red-600
                     bg-[image:linear-gradient(to_bottom,theme(colors.red.600/10%),theme(colors.red.600/10%)),url(/img/joao_img5.jpg)]
                     bg-red-600`,
                "translate": `translate-x-0 rotate-0 
                        group-[.spreadcards]/cards:-rotate-12 
                        group-[.spreadcards]/cards:translate-x-[70rem]
                        group-[.spreadcards]/cards:translate-y-[30rem]`,
                "z_index": "z-20"
            }, {
                "size": "w-28 lg:w-28",
                "color": `ring-amber-300
                     bg-[image:linear-gradient(to_bottom,theme(colors.amber.300/10%),theme(colors.amber.300/10%)),url(/img/joao_img6.jpg)]
                     bg-amber-300`,
                "translate": `translate-x-2 -rotate-6 
                        group-[.spreadcards]/cards:rotate-45
                        group-[.spreadcards]/cards:translate-x-[28rem] 
                        group-[.spreadcards]/cards:translate-y-[25rem]`,
                "z_index": "z-40"
            }, {
                "size": "w-28 lg:w-28",
                "color": `ring-lime-700
                     bg-[image:linear-gradient(to_bottom,theme(colors.lime.700/10%),theme(colors.lime.700/10%)),url(/img/joao_img7.jpg)]
                     bg-lime-700`,
                "translate": `-translate-x-3 rotate-6 
                        group-[.spreadcards]/cards:-rotate-[57deg]
                        group-[.spreadcards]/cards:translate-x-40 
                        group-[.spreadcards]/cards:translate-y-[25rem]`,
                "z_index": "z-[60]"
            }
        ],
        "texts": [
            {
                "text": "\n BeatMaker",
                "link": "mailto:joao@lima.dev",
                "size": "text-6xl text-left inline-block align-text-bottom whitespace-pre-line",
                "translate": `absolute -translate-x-40 -rotate-[70deg]
                        group-[.spreadcards]/cards:rotate-0
                        group-[.spreadcards]/cards:translate-x-[45rem]
                        group-[.spreadcards]/cards:translate-y-[33rem]`,
                "z_index": "z-20"
            },
            {
                "text": "\n Programmer",
                "link": "mailto:joao@lima.dev",
                "size": "text-6xl text-left inline-block align-text-bottom whitespace-pre-line",
                "translate": `absolute -translate-x-48 translate-y-[25rem] rotate-6
                        group-[.spreadcards]/cards:rotate-0
                        group-[.spreadcards]/cards:translate-x-64
                        group-[.spreadcards]/cards:translate-y-[33rem]`,
                "z_index": "z-40"
            },
            {
                "text": "\n Drummer",
                "link": "mailto:joao@lima.dev",
                "size": "text-6xl text-left inline-block align-text-baseline whitespace-pre-line",
                "translate": `absolute -translate-x-[21rem] translate-y-20 -rotate-[85deg]
                        group-[.spreadcards]/cards:rotate-0
                        group-[.spreadcards]/cards:-translate-x-40
                        group-[.spreadcards]/cards:translate-y-[33rem]`,
                "z_index": "z-[60]"
            },
            {
                "text": "Joao@Lima.dev",
                "link": "mailto:joao@lima.dev",
                "size": "text-4xl text-neutral-400 text-left inline-block align-text-baseline whitespace-pre-line",
                "translate": `absolute -translate-x-40 -rotate-[70deg]
                        group-[.spreadcards]/cards:rotate-0
                        group-[.spreadcards]/cards:translate-x-72
                        group-[.spreadcards]/cards:translate-y-[44rem]`,
                "z_index": "z-[60]"
            },
        ],
        "icons": [
            {
                "icon": faInstagram,
                "color": "text-neutral-400 group-hover:text-[#C13584]",
                "size": "4x",
                "rotate": "-rotate-[15deg]",
                "link": "https://www.instagram.com/lima.haru/",
            },
            {
                "icon": faLinkedinIn,
                "color": "text-neutral-400 group-hover:text-[#0A66C2]",
                "size": "4x",
                "rotate": "rotate-[14deg]",
                "link": "https://www.linkedin.com/in/limadeveloper/",
            },
            {
                "icon": faGithub,
                "color": "text-neutral-400 group-hover:text-[#4078C0]",
                "size": "4x",
                "rotate": "rotate-[13deg]",
                "link": "https://github.com/JoaoVLima",
            },
            {
                "icon": faLink,
                "color": "text-neutral-400 group-hover:text-[#41E661]",
                "size": "4x",
                "rotate": "-rotate-[115deg]",
                "link": "https://linktr.ee/limaharu",
            },
        ],
    },
};

export function Cards({id}: { id: string }) {
    return (
        <div className="grid h-full w-full grid-cols-6 grid-rows-3 place-items-center justify-items-center">
            {id == "Joao" && <Name id={id} className="col-start-1 col-end-3"/>}
            <div className={`${id == "Brenda" ? "col-start-4 col-end-4" : "col-start-3 col-end-3"} row-start-1 row-end-4 w-48 transition duration-500 ease-in-out group/cards aspect-[5/8] lg:w-80`}
                 id={id}>
                {user_settings[id].cards.map((item, index) => (
                    <Card
                        key={index}
                        className={`${item.size} ${item.color} ${item.translate} ${item.z_index}`}
                    />
                ))}
                {user_settings[id].texts.map((item, index) => (
                    <a href={`${item.link}`}>
                        <h4 className={`transition ease-in-out duration-500 !transform-gpu ${item.size} ${item.translate} ${item.z_index}`}>
                            {item.text as string}
                        </h4>
                    </a>
                ))}
            </div>
            {id == "Brenda" && <Name id={id} className="col-start-5 col-end-7"/>}
        </div>
    )
}


function Card({className}: { className: string }) {
    return (
        <div className={`absolute aspect-[5/8] rounded-3xl bg-center bg-cover ring-8 origin-bottom transition ease-in-out duration-500 !transform-gpu ${className}`}></div>
    );
}

function Name({id, className}: { id: string, className: string }) {
    return (
        <>
            <div className={`${className} row-start-2 row-end-2`}>
                <h1 className="text-9xl -tracking-[.1em]">
                    {id.toUpperCase() == "BRENDA" &&
                        <>
                            <span className="text-amber-700">B</span>
                            <span className="text-orange-400">R</span>
                            <span className="text-lime-600">E</span>
                            <span className="text-cyan-500">N</span>
                            <span className="text-violet-700">D</span>
                            <span className="text-fuchsia-700">A</span>
                        </>
                    }
                    {id.toUpperCase() == "JOAO" &&
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
            </div>
            <div className={`${className} row-start-3 row-end-4 place-self-center justify-self-center`}>
                <div className="relative flex place-items-center justify-items-center gap-12">
                    {user_settings[id].icons.map((item, index) => (
                        <a className="group" href={`${item.link}`} target="_blank" rel="noopener noreferrer">
                            <div className={`aspect-[5/7] w-20 ${item.rotate} grid place-items-center justify-items-center`}>
                                <FontAwesomeIcon className={`${item.color}`} icon={item.icon as IconDefinition} size={`${item.size}` as SizeProp}></FontAwesomeIcon>
                                <div className={`absolute top-0 aspect-[5/7] w-20 -z-10 rounded-3xl bg-neutral-800 ${item.rotate}`}></div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </>
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
