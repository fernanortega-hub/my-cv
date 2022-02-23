import React from "react";
import { ScrollUp, ScrollDown } from "../../ScrollControls/ScrollControls";
import CenteredContainter from "../../Containers/CenteredContainer";
import { GiSkills } from 'react-icons/gi';
import { TiContacts } from 'react-icons/ti';
import { SizeControlsIcons } from "../../../Constants/Constants";
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';

const Experience = () => {
    return (
        <>
            <CenteredContainter>
                <ScrollUp message="Habilidades" icon={<GiSkills className={`${SizeControlsIcons} rotate-90`}/>}/>
                <span className="text-xl font-semibold text-secondaryColorLight md:text-4xl"> Experiencia y proyectos </span>

                <ScrollDown message="Contactame!" icon={<TiContacts className={`${SizeControlsIcons} -rotate-90`}/>}/>
            </CenteredContainter>
        </>
    );
};

export default Experience;