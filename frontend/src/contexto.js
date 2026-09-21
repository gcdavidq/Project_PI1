import { createContext, useContext } from 'react'

export const ContextoSesion = createContext(null)
export const useSesion = () => useContext(ContextoSesion)
