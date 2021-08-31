import React, { createContext, useContext, useState, useEffect } from 'react'

export const ThemeContext = createContext<{
    darkMode: boolean
    setDarkMode: any
}>({
    darkMode: false,
    setDarkMode: () => {},
})

export const ThemeProvider = (props: any) => {
    const getTheme = localStorage.getItem('dark')
    const [darkMode, setDarkMode] = useState(getTheme == 'true')
    useEffect(() => {
        if (darkMode) document.body.classList.add('dark-bg')
        else document.body.classList.remove('dark-bg')

        localStorage.setItem('dark', JSON.stringify(darkMode))
    })
    return (
        <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
            {props.children}
        </ThemeContext.Provider>
    )
}
export default ThemeProvider

export const useDarkMode = () => useContext(ThemeContext)
