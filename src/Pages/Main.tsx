import React from "react";
import Header from '../Components/Header/Header';

const Main = () => {

    const avatar = "https://avatars.githubusercontent.com/u/62727802?s=400&u=a5138f9a5a747fcb8236628ea17d09335266a53e&v=4";
    return (
        <div className="bg-mainColorLight h-screen">
            <Header />
            {/* <img className="w-20 bg-red-400" src={avatar} alt="my person"/> */}
        </div>
    );
}

export default Main;