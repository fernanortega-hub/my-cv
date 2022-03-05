import React from "react";
import { IoMdHappy } from 'react-icons/io'
import CenteredContainter from "../../Containers/CenteredContainer";
const AboutMe = () => {
    return (
        <CenteredContainter>
            <span className="text-xl font-semibold text-secondaryColorLight md:text-4xl"> {`${`Sobre mi...`}`} </span>
            <p className="text-[1.1rem] text-center md:text-2xl"> Tengo 19 años, vivo en la ciudad de San Juan Opico y actualmente soy estudiante de Ingenieria Informática en la Universidad Centroamericana José Simeón Cañas. Soy desarrollador
                frontend y futuramente estaré desempeñando desarrollo backend  
                <IoMdHappy size={32} className="inline ml-1 hover:text-sky-800" /> 
            </p>
        </CenteredContainter>
    )
};

export default AboutMe;