export const scrollPageDown = () => {
    window.scrollBy({
        top: window.innerHeight,
        left: 0,
        behavior: 'smooth'
    });
};

export const scrollPageUp = () => {
    window.scrollBy({
        top: -window.innerHeight,
        left: 0,
        behavior: 'smooth'
    });
};
