import React from "react";
import { FC } from 'react';
import { ExtendedPropsControl } from "../../Interfaces/interfaces";
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';
import { scrollPageDown, scrollPageUp } from "../../ScrollFuntions";
import { SizeControlsIcons } from "../../Constants/Constants";

export const ScrollUp: FC<ExtendedPropsControl> = ({ message, icon }) => {
    return (
        <button id="buttonUp" 
        className={`flex items-center text-gray-500 
            absolute top-12 right-0 md:right-5 md:top-16 hover:text-cyan-600`} 
        onClick={() => scrollPageUp()} title={message}>
            {icon }
            <HiOutlineArrowNarrowRight className={`text-black ml-2 ${SizeControlsIcons}`} />
        </button>
    );
}

export const ScrollDown: FC<ExtendedPropsControl> = ({ message, icon }) => {
    return (
        <button id="buttonDown" 
        className={`flex items-center text-gray-500 
            absolute bottom-12 right-0 md:right-5 md:bottom-16 hover:text-cyan-600`} 
        onClick={() => scrollPageDown()} title={message}>
            {icon}
            <HiOutlineArrowNarrowRight className={`text-black ml-2 ${SizeControlsIcons}`} />
        </button>
    );
}