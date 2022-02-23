import React, { FC } from "react";
import { ExperienceCardProps } from "../../../../Interfaces/interfaces";

const ExperienceCard: FC<ExperienceCardProps> = ({ message, icon, title, url }) => {

    return (
        <div
            className={`w-full h-full flex flex-col p-4 items-center 
                border-accentColorLight border-2 border-auto space-y-2 min-w-min overflow-y-auto`}
        >
            <div className="flex flex-col items-center space-y-2 justify-center">
                <a href={url} target='_blank' rel="noreferrer" className="hover:text-cyan-600"> {icon} </a>
                <span className="text-xs text-center font-semibold md:text-base lg:text-xl">  {title} </span>
            </div>
            <p className="text-[0.6rem] md:text-sm lg:text-base"> {message} </p>
        </div>
    );
};

export default ExperienceCard;