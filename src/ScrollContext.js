import { createContext, useState } from 'react';

export const scrollContext = createContext();

function ScrollProvider({ children }) {
    const [isBackground, setIsBackground] = useState(false);
    const [isCount, setIsCount] = useState(false);

    const scroll = {
        isBackground,
        isCount,
    };
    var scrollMaxY = window.scrollMaxY || document.documentElement.scrollHeight - document.documentElement.clientHeight;
    window.onscroll = function () {
        if (window.scrollY > 100) {
            setIsBackground(true);
        } else setIsBackground(false);
        if (window.scrollY > scrollMaxY - 400) {
            setIsCount(true);
        } else setIsCount(false);
    };
    return <scrollContext.Provider value={scroll}>{children}</scrollContext.Provider>;
}
export { ScrollProvider };
