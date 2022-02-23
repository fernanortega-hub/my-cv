import React from "react";
import Presentation from "../Components/CvComponents/Presentation/Presentation";
import AboutMe from "../Components/CvComponents/AboutMe/AboutMe";
import Skill from "../Components/CvComponents/Skills/Skills";
import Experience from "../Components/CvComponents/Experience/Experience";


const Main = () => {
    const name = "Fernando Ortega";
    document.title = name;

    return (
        <div className="bg-primaryColorLight w-full">
            <Presentation />
            <AboutMe />
            <Skill/>
            <Experience/>
        </div>
    );
}

export default Main;