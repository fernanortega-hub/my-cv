import React from "react";
import Presentation from "../Components/CvComponents/Presentation/Presentation";
import AboutMe from "../Components/CvComponents/AboutMe/AboutMe";
import Skill from "../Components/CvComponents/Skills/Skills";
import Experience from "../Components/CvComponents/Experience/Experience";
import ContactMe from "../Components/CvComponents/ContactMe/ContactMe";


const Main = () => {
    const name = "Fernando Ortega";
    document.title = name;

    return (
        <div className="bg-primaryColorLight w-full">
            <Presentation />
            <AboutMe />
            <Skill/>
            <Experience/>
            <ContactMe/>
        </div>
    );
}

export default Main;