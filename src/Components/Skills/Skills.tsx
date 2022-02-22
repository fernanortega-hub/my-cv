import React, { useState } from "react";
import { ScrollUp, ScrollDown } from "../ScrollControl/ScrollControls";
import {
    SiNextdotjs, SiReact, SiHtml5, SiCss3, SiTailwindcss,
    SiTypescript, SiJavascript, SiGithub, SiGit, SiDotnet, SiCsharp, SiCplusplus, SiMicrosoftsqlserver, SiMongodb
} from "react-icons/si";

const Skill = () => {
    const initialState = 'Mis habilidades';
    const [skillName, setSkillName] = useState(initialState);

    const onClickChangeTxt = (_skillName: any) =>
    {
        setSkillName(_skillName);

        setTimeout(() => {
            setSkillName(initialState)
        }, 1800);
    }
    return (
        <div className="w-full h-screen p-6 flex flex-col justify-center items-center space-y-3 relative ">
            <ScrollUp message="Sobre mi" addClass="top-[12%] -right-3"/>
            <span className="text-xl font-semibold text-secondaryColorLight md:text-4xl p-1"> {skillName} </span>
            <div className="w-3/4 h-3/4 grid grid-cols-3 items-center justify-items-center gap-1 md:w-2/4">
                <SiNextdotjs size={40} className="md:w-[4rem] md:h-[4rem]"
                    title="Next.js" role="button" onClick={() => onClickChangeTxt('Next.js')} />
                <SiReact size={40} className="text-blue-400 md:w-[4rem] md:h-[4rem]"
                    title="React.js" role="button" onClick={() => onClickChangeTxt('React.js')}/>
                <SiHtml5 size={40} className="text-orange-600 md:w-[4rem] md:h-[4rem]"
                    title="HTML5" role="button" onClick={() => onClickChangeTxt('HTML5')}/>
                <SiCss3 size={40} className="text-blue-500 md:w-[4rem] md:h-[4rem]"
                    title="CSS3" role="button" onClick={() => onClickChangeTxt('CSS3')} />
                <SiTailwindcss size={40} className="text-cyan-500 md:w-[4rem] md:h-[4rem]"
                    title="TailwindCSS" role="button" onClick={() => onClickChangeTxt('TailwindCSS 2 & 3')}/>
                <SiTypescript size={40} className="text-typescript md:w-[4rem] md:h-[4rem]"
                    title="Typescript" role="button" onClick={() => onClickChangeTxt('TypeScript')}/>
                <SiJavascript size={40} className="text-javascript bg-black md:w-[4rem] md:h-[4rem]"
                    title="Javascript" role="button" onClick={() => onClickChangeTxt('JavaScript')}/>
                <SiGit size={40} className="text-orange-500 md:w-[4rem] md:h-[4rem]" 
                    title="Control de versiones con Git" role="button" onClick={() => onClickChangeTxt('Git')}/>
                <SiGithub size={40} className="md:w-[4rem] md:h-[4rem]"
                    title="Github" role="button" onClick={() => onClickChangeTxt('GitHub')} />
                <SiDotnet size={40} className="text-white bg-dotnet md:w-[4rem] md:h-[4rem]"
                    title=".NET" role="button" onClick={() => onClickChangeTxt('.NET')}/>
                <SiCsharp size={40} className="text-csharp md:w-[4rem] md:h-[4rem]"
                    title="C#" role="button" onClick={() => onClickChangeTxt('C#')}/>
                <SiCplusplus size={40} className="text-cplusplus md:w-[4rem] md:h-[4rem]"
                    title="C++" role="button" onClick={() => onClickChangeTxt('C++')}/>
                <SiMicrosoftsqlserver size={40} className="text-red-600 md:w-[4rem] md:h-[4rem]"
                    title="Microsoft SQL Server" role="button" onClick={() => onClickChangeTxt('Microsoft SQL Server')} />
                <SiMongodb size={40} className="text-green-600 md:w-[4rem] md:h-[4rem]"
                    title="MongoDb" role="button" onClick={() => onClickChangeTxt('MongoDB')} />
            </div>
            <ScrollDown message="Experiencia" addClass="bottom-[12%] -right-6"/>
        </div>

    );
};

export default Skill;