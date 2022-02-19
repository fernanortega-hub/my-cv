import React, { useLayoutEffect } from "react";
import Presentation from "../Components/Presentation/Presentation";
import AboutMe from "../Components/AboutMe/AboutMe";
import Skill from "../Components/Skill/Skill";

const Main = () => {
    const name = "Fernando Ortega";
    document.title = name;

    return (
        <div className="bg-primaryColorLight w-full">
            <Presentation />
            <AboutMe />
            {/* <Skill/> */}
        </div>
    );
}

export default Main;