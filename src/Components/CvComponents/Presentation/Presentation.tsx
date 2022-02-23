import React, { useEffect } from "react";
import { ScrollDown } from "../../ScrollControls/ScrollControls";
import CenteredContainter from "../../Containers/CenteredContainer";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BsFilePersonFill } from 'react-icons/bs';
import { SizeControlsIcons } from "../../../Constants/Constants";

const Presentation = () => {
    const avatar = "https://avatars.githubusercontent.com/u/62727802?s=400&u=a5138f9a5a747fcb8236628ea17d09335266a53e&v=4";

    function notify() {
        toast.info('¡Usa los botones saltantes para desplazarte!', {
            position: "top-right",
            autoClose: 2500,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
        });

        
    };
    useEffect(() => { notify();});

    return (
        <CenteredContainter>
            <ToastContainer />
            <span id="helloWorld" className="text-secondaryColorLight font-extrabold text-3xl md:text-4xl "> {`<Hola mundo!/>`} </span>
            <span className="text-[1.15rem] text-center md:text-2xl"> Me llamo Fernando Ortega </span>
            <img src={avatar} alt="Fernando's avatar" className="rounded-full border-4 border-cyan-600 w-48 md:w-52 " />
            <ScrollDown message="Sobre mi" icon={<BsFilePersonFill className={`${SizeControlsIcons} -rotate-90`}/>}/>
        </CenteredContainter>
    );
};

export default Presentation;