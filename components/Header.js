import Image from "next/image"
import { SearchIcon,
    MenuIcon,
    GlobeAltIcon,
    UserCircleIcon,
    UsersIcon,
 } from '@heroicons/react/solid'


function Header() {
    return (

        <header className="sticky top-0 z-50 grid 
            grid-cols-3 bg-white shadow-sm p-5 md:px-10">

            {/* Left Section */}
            <div className="relative flex items-center h-10
                cursor-pointer my-auto">
                <Image
                    src="http://links.papareact.com/qd3"
                    layout="fill"
                    objectFit="contain"
                    objectPosition="left"
                />
            </div>

            {/* Middle section */}
            <div className="flex md:border-2 rounded-full items-center
            md:shadow-sm">
                <input className="pl-5 bg-transparent outline-none 
                flex-grow text-gray-600 placeholder-gray-400
                " 
                type="text" placeholder="Start your search"/>
                
                <SearchIcon className="hidden md:inline-flex h-8 bg-red-400 text-white 
                rounded-full p-2 cursor-pointer mx-1"/>
            </div>

            {/* Right Section */}
            <div className="flex items-center space-x-4
            justify-end text-gray-500">
                <p className="hidden md:inline">Become a host</p>
                <GlobeAltIcon className="h-6"/>
                
                <div className="flex items-center space-x-2
                border-2 rounded-full p-2">
                    <MenuIcon className="h-6"/>
                    <UserCircleIcon className="h-6"/>
                </div>
            </div>
        </header>
    )
}

export default Header
