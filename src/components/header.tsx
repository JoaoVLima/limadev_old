import React from "react";

import "./header.css";

export function Header() {
    return (
        <>
            <div className="absolute flex flex-col h-screen w-screen items-center justify-center bg-white dark:bg-black transition-bg dark">
                <div className="absolute inset-0 overflow-hidden">
                    <div className="jumbo absolute -inset-[10px] opacity-50"></div>
                </div>

            </div>
            <header className="absolute inset-x-0 top-0 z-50">
                <nav className="flex items-center justify-between p-6 px-4 lg:px-8" aria-label="Global">
                    <div className="flex lg:flex-1">
                        <a href="/" className="-m-1.5 p-1.5">
                            <span className="sr-only">Lima.dev</span>
                            <img
                                className="h-16 w-auto min-w-min"
                                src="./logo.svg"
                                alt="Lima.dev"
                            />
                        </a>
                    </div>
                </nav>
            </header>
        </>
    )
}
