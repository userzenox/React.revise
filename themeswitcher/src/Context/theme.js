import { createContext, useContext } from "react";

export const ThemeContext = createContext({
     themeMode: "dark",  //variable can also be passed 
    darkTheme: () => {},   // method can also be passed
    lightTheme: () => {}, 
})


export const ThemeProvider = ThemeContext.Provider

export default function useTheme(){
    return useContext(ThemeContext)
}