import {useContext, createContext} from 'react';

export const ThemeContext = createContext({
    themeMode: "light",
    lightTheme: () => {console.log('Switching to light theme')},
    darkTheme: () => {console.log('Switching to dark theme')},
});

export const ThemeProvider = ThemeContext.Provider

export default function useTheme(){
    return  useContext(ThemeContext)
}