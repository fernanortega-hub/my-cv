export interface ExtendedPropsControl {
    message: string;
    icon: any;
}

export interface ExtendedProps {
    addClass?: string;
}

export interface ExperienceCardProps extends ExtendedPropsControl{
    title: string;
    url: string;
}