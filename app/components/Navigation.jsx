// import {
//   NavigationMenu,
//   NavigationMenuContent,
//   NavigationMenuIndicator,
//   NavigationMenuItem,
//   NavigationMenuLink,
//   NavigationMenuList,
//   NavigationMenuTrigger,
//   NavigationMenuViewport,
// } from "@/components/ui/navigation-menu"
// import { UserButton } from "@clerk/nextjs";

// export default function Navbar(){
//     return(
//  <NavigationMenu>
//   <NavigationMenuList>
//   <NavigationMenuItem><a className="flex-none text-black focus:outline-none focus:opacity-80 dark:text-white bg-clip-text bg-gradient-to-l from-purple-400 to-blue-600 text-transparent text-xl font-semibold">Milt Assc</a></NavigationMenuItem>
//     <NavigationMenuItem>Overview</NavigationMenuItem>
//     <NavigationMenuItem>Miltonians</NavigationMenuItem>
//     <NavigationMenuItem>Committee</NavigationMenuItem>
//     <NavigationMenuItem>Progress</NavigationMenuItem>
//     <NavigationMenuItem><UserButton/></NavigationMenuItem>
//   </NavigationMenuList>
// </NavigationMenu>
//     );
// }

import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { currentUser } from '@clerk/nextjs/server'

import Link from "next/link";
import React from "react";

export default async function Navigation() {
    const user = await currentUser()

    return (
        <div className="mb-2 border-b ">
            <header className="flex flex-wrap  md:justify-start md:flex-nowrap z-50 w-full bg-white border-b border-gray-200 dark:bg-neutral-800 dark:border-neutral-700">
                <nav className="relative max-w-[85rem] w-full mx-auto md:flex md:items-center md:justify-between md:gap-3 py-2 px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center gap-x-1">
                        <Link
                            className="flex-none text-black focus:outline-none focus:opacity-80 dark:text-white bg-clip-text bg-gradient-to-l from-purple-400 to-blue-600 text-transparent text-xl font-semibold"
                            href="/"
                            aria-label="Brand"
                        >
                            Milt Assc.
                        </Link>

                        <button
                            type="button"
                            className="hs-collapse-toggle md:hidden relative size-9 flex justify-center items-center font-medium text-[12px] rounded-lg border border-gray-200 text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:border-neutral-700 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                            id="hs-header-base-collapse"
                            aria-expanded="false"
                            aria-controls="hs-header-base"
                            aria-label="Toggle navigation"
                            data-hs-collapse="#hs-header-base"
                        >
                            <svg
                                className="hs-collapse-open:hidden size-4"
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <line x1="3" x2="21" y1="6" y2="6" />
                                <line x1="3" x2="21" y1="12" y2="12" />
                                <line x1="3" x2="21" y1="18" y2="18" />
                            </svg>
                            <svg
                                className="hs-collapse-open:block shrink-0 hidden size-4"
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M18 6 6 18" />
                                <path d="m6 6 12 12" />
                            </svg>
                            <span className="sr-only">Toggle navigation</span>
                        </button>

                    </div>

                    <div
                        id="hs-header-base"
                        className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow md:block "
                        aria-labelledby="hs-header-base-collapse"
                    >
                        <div className="overflow-hidden overflow-y-auto max-h-[75vh] [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500">
                            <div className="py-2 md:py-0  flex flex-col md:flex-row md:items-center gap-0.5 md:gap-1">
                                <div className="grow">
                                    <div className="flex flex-col md:flex-row md:justify-end md:items-center gap-0.5 md:gap-1">
                                        <Link
                                            className="font-medium text-sm text-gray-800 focus:outline-none focus:text-blue-600 dark:text-blue-500 dark:focus:text-blue-500"
                                            href={`/organization`}
                                        >
                                            Organization
                                        </Link>
                                        <SignedOut>
                                            <SignInButton>

                                            </SignInButton>
                                        </SignedOut>
                                        <SignedIn>
                                            <button className="rounded p-1.5 text-gray-400 transition hover:bg-gray-300 hover:text-gray-200 focus:bg-gray-300 focus:text-gray-200 focus:ring-2 focus:ring-blue focus:ring-offset-2">
                                                <svg aria-hidden="true" className="transform-gpu size-5" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg"><rect x="2.75208" y="2.74548" width="14.5" height="14.5" rx="3" fill="currentColor" fillOpacity="0.15"></rect><path d="M7.75 8.25C7.75 6.5 8.75736 5.75 10 5.75C11.2426 5.75 12.25 6.67341 12.25 7.8125C12.25 8.47011 11.9143 9.05584 11.3913 9.4335C10.7406 9.90347 10 10.4906 10 11.25M10 13.76V13.75"></path></svg >
                                            </button>
                                            <UserButton />
                                        </SignedIn>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
            <nav className="bg-white dark:bg-neutral-900 border-gray-200  ">
                <div className="max-w-[85rem] w-full mx-auto sm:flex sm:flex-row sm:justify-between sm:items-center sm:gap-x-3 py-3 px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center gap-x-3">
                        <div className="grow">
                            <span className="font-semibold whitespace-nowrap text-gray-800 dark:text-neutral-200">
                                Welcome {user?.firstName?.toUpperCase() || 'Guest'}
                            </span>
                        </div>

                        <button
                            type="button"
                            className="hs-collapse-toggle sm:hidden py-1.5 px-2 inline-flex items-center font-medium text-xs rounded-md border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 focus:outline-none focus:bg-gray-100 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                            data-hs-collapse="#hs-nav-secondary"
                            aria-controls="hs-nav-secondary"
                            aria-label="Toggle navigation"
                        >
                            Overviews
                            <svg
                                className="hs-dropdown-open:rotate-180 shrink-0 size-4 ms-1"
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="m6 9 6 6 6-6" />
                            </svg>
                        </button>
                    </div>

                    <div
                        id="hs-nav-secondary"
                        className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow sm:block"
                    >
                        <div className="py-2 sm:py-0 flex flex-col sm:flex-row sm:justify-end gap-y-2 sm:gap-y-0 sm:gap-x-6">

                            <Link
                                className="font-medium text-sm text-gray-800 focus:outline-none focus:text-blue-600 dark:text-blue-500 dark:focus:text-blue-500"
                                href={`/`}
                            >
                                Overview
                            </Link>


                            <Link
                                className="font-medium text-sm text-gray-800 hover:text-blue-600 focus:outline-none focus:text-blue-600 dark:text-neutral-200 dark:hover:text-blue-500 dark:focus:text-blue-500"
                                href="/miltonians"
                            >
                                Miltonians
                            </Link>
                            <Link
                                className="font-medium text-sm text-gray-800 hover:text-blue-600 focus:outline-none focus:text-blue-600 dark:text-neutral-200 dark:hover:text-blue-500 dark:focus:text-blue-500"
                                href="/committee"
                            >
                                Committee
                            </Link>
                            <Link
                                className="font-medium text-sm text-gray-800 hover:text-blue-600 focus:outline-none focus:text-blue-600 dark:text-neutral-200 dark:hover:text-blue-500 dark:focus:text-blue-500"
                                href={`/progress`}
                            >
                                Progress
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}

