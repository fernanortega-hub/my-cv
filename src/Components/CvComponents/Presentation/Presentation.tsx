import React, { useEffect, useState } from "react";
import CenteredContainter from "../../Containers/CenteredContainer";

const Presentation = () => {
    const [useAvatar, setAvatar] = useState("");

    useEffect(() => { getAvatar(); });

    async function getAvatar() {
        const avatar = new Image();

        avatar.src = "https://avatars.githubusercontent.com/u/62727802?s=400&u=a5138f9a5a747fcb8236628ea17d09335266a53e&v=4";
        await avatar.decode();
        setAvatar(avatar.src);
    }

    
    

    return (
        <CenteredContainter>
            <span id="helloWorld" className="text-secondaryColorLight font-extrabold text-3xl md:text-4xl w-max"> {`<Hola mundo!/>`} </span>
            <span className="text-[1.15rem] text-center md:text-2xl"> Me llamo Fernando Ortega </span>
            <img src={useAvatar} alt="Fernando's avatar" className="rounded-full border-4 border-cyan-600 w-48 md:w-52 " />
        </CenteredContainter>
    );
};

export default Presentation;