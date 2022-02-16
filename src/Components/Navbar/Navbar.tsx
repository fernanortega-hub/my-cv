import React from "react";
import { HiMenuAlt2, HiOutlineHome, HiPresentationChartBar } from 'react-icons/hi';
import { useState } from "react";

const Navbar = () => {
    const [isActive, setIsActive] = useState(false);

    return (
        <div className="flex flex-row justify-evenly bg-secondColorLight w-full p-4 text-white">
            {/* <HiMenuAlt2 className="lg:hidden" /> */}
                <HiOutlineHome className="text-[1.5rem] lg:hidden"/>
                <HiPresentationChartBar className="text-[1.5rem] lg:hidden" />
        </div>
    );
}

export default Navbar;