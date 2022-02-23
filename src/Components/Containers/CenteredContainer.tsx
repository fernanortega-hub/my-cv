import React from "react";
import { FC } from 'react';
import { ExtendedProps } from "../../Interfaces/interfaces";

const CenteredContainter: FC<ExtendedProps> = ({ addClass, children }) => (
    <div className={`w-full h-screen p-6 flex flex-col justify-center items-center space-y-3 relative ${addClass}`}>
        {children}
    </div>
);

export default CenteredContainter;