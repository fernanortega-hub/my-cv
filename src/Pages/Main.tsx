import React from "react";
import { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { AiOutlineMinus } from 'react-icons/ai';
import Navbar from "../Components/Navbar/Navbar";

const Main = () => {
    const [isActive, setIsActive] = useState(true);
    const name = "Fernando Ortega";
    document.title = name;

    function activateNavbar(){
        setIsActive(!isActive)
    }

    return (
        <div className="bg-mainColorLight w-full h-screen flex flex-wrap min-h-screen landscape:h-max">
            <div className={`${isActive ? 'block': 'hidden'} lg:hidden p-3`}>
                <HiMenuAlt3 size={40} role="button" onClick={activateNavbar}/>
            </div>
            <div className={`${isActive ? 'hidden': 'block'} bg-secondColorLight p-3 fixed lg:hidden`}>
                <AiOutlineMinus size={40} role="button" onClick={activateNavbar}/>
            </div>
            <Navbar active={isActive}/>
            <div className={`${!isActive? 'hidden': 'w-full h-full'}`}>
                <p>Hola </p>
                <p>Hola </p>
                <p>Hola </p>
                <p>Hola </p>
            </div>
        </div>
    );
}

export default Main;