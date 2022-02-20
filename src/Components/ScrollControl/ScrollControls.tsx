import React from "react";
import { FC } from 'react';
import { ExtendedPropsControl } from "../../Interfaces/interfaces";
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';
import { scrollPageDown, scrollPageUp } from "../../ScrollFuntions";

export const ScrollUp: FC<ExtendedPropsControl> = ({ message, addClass }) => {
    return (
        <button id="buttonUp" className={`flex items-center text-gray-500 text-xs absolute ${addClass} md:text-sm`} 
            onClick={() => scrollPageUp()}>
            {message}
            <HiOutlineArrowNarrowRight className="text-black w-6 h-6 ml-4" />
        </button>
    );
}

export const ScrollDown: FC<ExtendedPropsControl> = ({ message, addClass }) => {
    return (
        <button id="buttonDown" className={`flex items-center text-gray-500 text-xs absolute ${addClass} md:text-sm`} 
            onClick={() => scrollPageDown()}>
            {message}
            <HiOutlineArrowNarrowRight className="text-black w-6 h-6 ml-4" />
        </button>
    );
}