import React from "react";
import { FC } from "react";
import { useState } from "react";
// Components
import Switch from '@mui/material/Switch';
// Icons
import { IoMdSunny, IoMdMoon } from 'react-icons/io';
// Interfaces
import { NavInterface } from "../../Interfaces/Components";

const Navbar: FC<NavInterface> = ({ active }) => {
    const avatar = "https://avatars.githubusercontent.com/u/62727802?s=400&u=a5138f9a5a747fcb8236628ea17d09335266a53e&v=4";


    return (
        <div className={`${active ? 'hidden' : 'w-full h-full'}`}>
            <div className={`${active ? 'hidden' : 'w-full h-full'} bg-secondColorLight p-6 text-white flex flex-col justify-start xl:ml-[9rem] sm:w-72`}>

                <div className="flex flex-col items-center space-y-2 p-4 my-2 sm:space-y-3 lg:mt-6">
                    <img src={avatar} alt="Fernando's avatar" className="rounded-full border-[2px] w-[8rem] md:w-[9rem]" />
                    <span className="font-semibold text-lg text-center sm:text-2xl"> Fernando Ortega </span>
                </div>

                <div className="flex flex-col space-y-3 lg:space-y-4 sm:text-[1.2rem]">
                    <button className="hover:underline"> About me </button>
                    <button className="hover:underline"> Skills </button>
                    <button className="hover:underline"> Projects </button>
                    <button className="hover:underline"> Experience </button>
                    <button className="hover:underline"> Education </button>
                    <button className="hover:underline"> Contact me! </button>

                    <div className="flex flex-row justify-center items-center text-xl">
                        <IoMdSunny />
                        <Switch color="default" />
                        <IoMdMoon />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;