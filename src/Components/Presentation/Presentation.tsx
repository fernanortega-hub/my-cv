import React from "react";
import { HiOutlineArrowNarrowDown } from 'react-icons/hi';
import { scrollPageDown } from "../../ScrollFuntions";
const Presentation = () => {
    const avatar = "https://avatars.githubusercontent.com/u/62727802?s=400&u=a5138f9a5a747fcb8236628ea17d09335266a53e&v=4";
    return (
        <div className="flex flex-col justify-center space-y-3 items-center w-full h-screen relative min-h-max md:space-y-4">
            <span id="helloWorld" className="text-secondaryColorLight font-extrabold text-3xl md:text-4xl "> {`<Hola mundo!/>`} </span>
            <span className="text-[1.15rem] text-center md:text-2xl"> Me llamo Fernando Ortega </span>
            <img src={avatar} alt="Fernando's avatar" className="rounded-full border-4 border-cyan-600 w-48 md:w-52 " />
            <button className="bg-red-600" onClick={() => scrollPageDown()}>
                <HiOutlineArrowNarrowDown className="absolute right-6 bottom-6 w-7 h-7 animate-bounce hover:text-secondaryColorLight md:h-9 md:w-9" />
            </button>
        </div>
    );
};

export default Presentation;