import React from "react";
import { ScrollUp, ScrollDown } from "../ScrollControl/ScrollControls";
import {
    SiNextdotjs, SiReact, SiHtml5, SiCss3, SiTailwindcss,
    SiTypescript, SiJavascript, SiGithub, SiGit, SiDotnet, SiCsharp, SiCplusplus, SiMicrosoftsqlserver, SiMongodb
} from "react-icons/si";

const Skill = () => {
    return (
        <div className="w-full h-screen p-6 flex flex-col justify-center items-center space-y-3 relative">
            <ScrollUp message="Sobre mi" addClass="top-[12%] -right-3"/>
            <span className="text-xl font-semibold text-secondaryColorLight md:text-4xl"> Mis habilidades </span>
            <div className="w-3/4 h-3/4 grid grid-cols-3 items-center justify-items-center gap-1 md:w-2/4">
                <SiNextdotjs size={40} className="md:w-[4rem] md:h-[4rem]"
                    title="Next.js" role="button" />
                <SiReact size={40} className="text-blue-400 md:w-[4rem] md:h-[4rem]"
                    title="React.js" role="button" />
                <SiHtml5 size={40} className="text-orange-600 md:w-[4rem] md:h-[4rem]"
                    title="HTML5" role="button" />
                <SiCss3 size={40} className="text-blue-500 md:w-[4rem] md:h-[4rem]"
                    title="CSS3" role="button" />
                <SiTailwindcss size={40} className="text-cyan-500 md:w-[4rem] md:h-[4rem]"
                    title="TailwindCss" role="button" />
                <SiTypescript size={40} className="text-typescript md:w-[4rem] md:h-[4rem]"
                    title="Typescript. Fact: está página está hecha con React.js + Typescript" role="button" />
                <SiJavascript size={40} className="text-javascript bg-black md:w-[4rem] md:h-[4rem]"
                    title="Javascript" role="button" />
                <SiGit size={40} className="text-orange-500 md:w-[4rem] md:h-[4rem]" 
                    title="Control de versiones con Git" role="button" />
                <SiGithub size={40} className="md:w-[4rem] md:h-[4rem]"
                    title="Github" role="button" />
                <SiDotnet size={40} className="text-white bg-dotnet md:w-[4rem] md:h-[4rem]"
                    title=".NET" role="button" />
                <SiCsharp size={40} className="text-csharp md:w-[4rem] md:h-[4rem]"
                    title="C#" role="button" />
                <SiCplusplus size={40} className="text-cplusplus md:w-[4rem] md:h-[4rem]"
                    title="C++" role="button" />
                <SiMicrosoftsqlserver size={40} className="text-red-600 md:w-[4rem] md:h-[4rem]"
                    title="Microsoft SQL Server" role="button" />
                <SiMongodb size={40} className="text-green-600 md:w-[4rem] md:h-[4rem]"
                    title="MongoDb" role="button" />
            </div>
            <ScrollDown message="Experiencia" addClass="bottom-[12%] -right-6"/>
        </div>

    );
};

export default Skill;