import {createContext, useContext, useState} from 'react';

const themeConfig = {
    light: {
        color: 'darkblue',
        backgroundColor: 'lightblue'
    },
    dark: {
        color: 'lightblue',
        backgroundColor: 'darkblue'
    }
}

const ThemeContext = createContext();

const ThemeContextProvider = ({children}) => {

    const [theme, setTheme] = useState(themeConfig.light);

    const toggleTheme = () => {
        if(theme === themeConfig.light) {
            setTheme(themeConfig.dark)
        } else {
            setTheme(themeConfig.light)
        }
    }

    const providerValue = {
        theme, toggleTheme,
    }

    return (
        <ThemeContext.Provider value={providerValue}>
            {children}
        </ThemeContext.Provider>
    )
}

export const useTheme = () => useContext(ThemeContext);

export default ThemeContextProvider;