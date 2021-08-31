import React, { createContext, useContext, useState, useEffect } from 'react'

export const TokenContext = createContext<{
    hasToken: boolean
    setToken: any
}>({
    hasToken: false,
    setToken: () => {},
})

export const TokenProvider = (props: any) => {
    const [hasToken, setToken] = useState<boolean>(false)

    const token: boolean = !!localStorage.getItem('token')
    useEffect(() => {
        setToken(token)
    }, [])
    return (
        <TokenContext.Provider value={{ hasToken, setToken }}>
            {props.children}
        </TokenContext.Provider>
    )
}
export default TokenProvider

export const isLogged = () => useContext(TokenContext)
