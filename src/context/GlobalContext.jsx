import { createContext, useState } from "react";
import PropTypes from 'prop-types'

const GlobalContext = createContext()

const GlobalContextProvider = ({ children }) => {
  const [formState, setFormState] = useState({
    IsVisible: false,
    dropDownIsVisible: false,
    name: '',
    priority: ''
  })

  return <GlobalContext.Provider value={{
    formState, setFormState
  }}>
    { children }
  </GlobalContext.Provider>
}

GlobalContextProvider.propTypes = {
  children: PropTypes.node
}

export { GlobalContext, GlobalContextProvider }