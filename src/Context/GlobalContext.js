import React from 'react'
const GlobalContext = React.createContext({globalContext: null, setGlobalContext: () => {}}) //Hay que poner un valor cuando se llama en el useEffect
export const GlobalContextProvider = GlobalContext.Provider
export default GlobalContext