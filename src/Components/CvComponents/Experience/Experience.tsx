import React from "react";
import { ScrollUp, ScrollDown } from "../../ScrollControls/ScrollControls";
import CenteredContainter from "../../Containers/CenteredContainer";
import { GiSkills } from 'react-icons/gi';
import { TiContacts } from 'react-icons/ti';
import { SizeControlsIcons } from "../../../Constants/Constants";
import { FaLaptopCode } from 'react-icons/fa';
import { BsWindowSidebar } from 'react-icons/bs';
import { MdOutlineWeb } from 'react-icons/md';
import { SizeExperienceIcons } from "../../../Constants/Constants";
import ExperienceCard from "./ExperienceCard/ExperienceCard";

const Experience = () => {

    function timeLine(size: string) {
        return (
            <div className={`${size} flex flex-row items-center -space-x-1 bg-red-300`}>
                <div className="h-2 w-2 rounded-full bg-secondaryColorLight" />
                <div className={`h-1 w-full bg-secondaryColorLight`} />
                <div className="h-1 w-3 border-solid border-y-[5px] border-transparent border-l-[12px] border-l-secondaryColorLight" />
            </div>
        );
    }

    return (
        <CenteredContainter>
            <ScrollUp message="Habilidades" icon={<GiSkills className={`${SizeControlsIcons} rotate-90`} />} />
            <span className="text-xl font-semibold text-secondaryColorLight md:text-3xl"> Experiencia y proyectos </span>
            <div className="flex flex-col overflow-x-auto space-y-2 w-full h-[60%] overflow-y-hidden xs:w-[85%] xs:h-max sm:w-4/5 md:w-3/4">
                <div className="flex flex-row space-x-2 h-full">
                    <ExperienceCard icon={<FaLaptopCode className={`${SizeExperienceIcons}`} />}
                        url="https://github.com/fernanortega-hub/LibreriaGenius.git"
                        message='Programa de consola en C++ con colas, pilas y listas para el manejo de la libreria Genius'
                        title="Programación con C++ y estructuras dinámicas" />

                    <ExperienceCard icon={<BsWindowSidebar className={`${SizeExperienceIcons}`} />}
                        url="https://github.com/fernanortega-hub/ClinicaUCA.git"
                        message={`Windows Form Application donde se implementa las conexiones a una BD en SQL Server y se gestionan citas de la Clinica UCA`}
                        title="Programación con C# y .NET Framework (EF)" />

                    <ExperienceCard icon={<BsWindowSidebar className={`${SizeExperienceIcons}`} />}
                        url="https://github.com/fernanortega-hub/WFA-COVID.git"
                        message='Con la problemática de la pandemia por COVID-19 se crea un Windows Form App con la implementación de Data First,
                        donde la BD está hecha con SQL Server y la interfaz gráfica con C# y .NET Framework'
                        title="Programación con C# y .NET Framework (EF) con Data First" />

                    <ExperienceCard icon={<MdOutlineWeb className={`${SizeExperienceIcons}`} />}
                        url="https://github.com/fernanortega-hub/proyecto-web.git"
                        message="Esta página web implementa inicio de sesión y manejo de publicaciones (como Facebook/Instagram), así también el manejo de perfiles de usuario y administrador
                        se utiliza JavaScript como lenguaje principal"
                        title="React.js con implementación de API"
                    />

                    <ExperienceCard icon={<MdOutlineWeb className={`${SizeExperienceIcons}`} />}
                        url="https://ceii-uca.com/"
                        message="Desempeñando el rol como Frontend Developer, participo en la creación de la página 
                        principal de Comunidad Estudiantil de Ingeniería Informática hecha con Next.js y React.js con TypeScript, TailwindCSS para los estilos de el sitio"
                        title="Página principal de el CEII UCA con Next.js/React.js"
                    />

                    <ExperienceCard icon={<FaLaptopCode className={`${SizeExperienceIcons}`} />}
                        url="#"
                        message="Actualmente participo en una nueva version de la API del CEII utilizando .NET CORE y PostgreSQL"
                        title="API CEII UCA"
                    />
                </div>
            </div>

            <ScrollDown message="Contactame!" icon={<TiContacts className={`${SizeControlsIcons} -rotate-90`} />} />
        </CenteredContainter>
    );
};

export default Experience;