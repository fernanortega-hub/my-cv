import React from "react";
import CenteredContainter from "../../Containers/CenteredContainer";
import { SiLinkedin, SiGithub, SiGmail } from 'react-icons/si';
import { GiStarsStack } from 'react-icons/gi';
import { BsFillLightningFill } from 'react-icons/bs';
import { SizeControlsIcons } from "../../../Constants/Constants";
import { ScrollUp } from "../../ScrollControls/ScrollControls";

const ContactMe = () => {
    return (
        <>
            <CenteredContainter>
                <ScrollUp message={"Experiencia"} icon={<GiStarsStack className={`${SizeControlsIcons} rotate-90`} />} />
                <span className="text-xl font-semibold text-secondaryColorLight md:text-3xl"> Contactos </span>
                <span className="text-lg font-semibold md:text-xl flex flex-row items-center space-x-1"> No dudes en contactarme <BsFillLightningFill className="text-yellow-500 w-4 h-4" /> </span>
                <div className="flex w-full md:w-3/5 items-center justify-around">
                    <a href="https://www.linkedin.com/in/fernando-ortega-978a441b6/" target='_blank' rel="noreferrer" > <SiLinkedin className="w-10 h-10 md:w-14 md:h-14 text-linkedin" /> </a>
                    <a href="https://github.com/fernanortega-hub" target='_blank' rel="noreferrer"> <SiGithub className="w-10 h-10 rounded-full md:w-14 md:h-14" /> </a>
                    <a href="mailto:fernanortega.sv9292@gmail.com" target='_blank' rel="noreferrer"> <SiGmail className="w-10 h-10 text-red-500 md:w-14 md:h-14" /> </a>
                </div>

                
            </CenteredContainter>
        </>
    );
}

export default ContactMe;