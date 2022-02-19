import React from "react";
import { IoMdHappy } from 'react-icons/io'
import { HiOutlineArrowNarrowDown, HiOutlineArrowNarrowUp } from 'react-icons/hi';
import { scrollPageDown, scrollPageUp } from "../../ScrollFuntions";

const AboutMe = () => {
    return (
        <div className="w-full h-screen p-6 flex flex-col justify-center items-center space-y-3 relative">
            <button onClick={() => scrollPageUp()}>
                <HiOutlineArrowNarrowUp className="absolute right-6 top-7 w-7 h-7 animate-bounce hover:text-secondaryColorLight md:h-9 md:w-9" />
            </button>
            <span className="text-xl font-semibold text-secondaryColorLight md:text-4xl"> {`${`Sobre mi...`}`} </span>
            <p className="text-center text-[1.1rem] md:text-2xl"> Actualmente soy estudiante de Ingenieria Informática en la Universidad Centroamericana José Simeón Cañas. Soy desarrollador
                frontend y futuramente estaré desempeñando desarrollo backend  
                <IoMdHappy size={32} className="inline ml-1 hover:text-sky-800" /> 
            </p>
            <button onClick={() => scrollPageDown()}>
                <HiOutlineArrowNarrowDown className="absolute right-6 bottom-6 w-7 h-7 animate-bounce hover:text-secondaryColorLight md:h-9 md:w-9" />
            </button>
        </div>
    )
};

export default AboutMe;