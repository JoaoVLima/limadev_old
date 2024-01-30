import React from "react";

export function Header() {
    return (
        <>
            <header className="absolute inset-x-0 top-0 z-50">
                <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
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
