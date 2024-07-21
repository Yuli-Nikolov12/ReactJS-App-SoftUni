import { createContext, useState } from 'react'

export const ThemeModeContext = createContext();
export const ThemeModeProvider = ({children}) => {
    const [mode, setMode] = useState(false);

    return(
        <ThemeModeContext.Provider value={[mode, setMode]}>
            {children}
        </ThemeModeContext.Provider>
    )
};