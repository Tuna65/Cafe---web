import { createContext, useState } from 'react';

export const layoutContext = createContext();

function LayoutProvider({ children }) {
    const [isHidden, setIsHiden] = useState(false);

    const handleSetIsHiden = () => {
        setIsHiden(true);
    };

    const handleLayout = () => {
        setIsHiden(false);
    };
    const layout = {
        isHidden,
        handleSetIsHiden,
        handleLayout,
    };
    return <layoutContext.Provider value={layout}>{children}</layoutContext.Provider>;
}

export default LayoutProvider;
