import { createContext, useState } from "react";
import PropTypes from 'prop-types'

const GlobalContext = createContext()

const initialValueForm = {
  IsVisible: false,
    dropDownIsVisible: false,
    member: {
      id: 0,
      firstName: '',
      lastName: '',
      avatar: ''
    },
    task: {
      name: '',
      priority: ''
    }
}

const GlobalContextProvider = ({ children }) => {
  const [formState, setFormState] = useState(initialValueForm)
  const [taskList, setTaskList] = useState([])

  const cleanForm = () => {
    setFormState(initialValueForm)
  }

  const changeMemberData = (data) => {
    setFormState({
      ...formState,
      dropDownIsVisible: false,
      member: {...formState.member, ...data }
    })
  }

  const changeTaskData = (data) => {
    setFormState({
      ...formState,
      task: { ...formState.task, ...data }
    })
  }

  const checkTaskReady = () => {
    return Object.values(formState.member).every(val => val && val.length !== 0) &&
         Object.values(formState.task).every(val => val && val.length !== 0);
  }

  const addTaskToList = () => {
    if(!checkTaskReady())
      return console.log('Faltan campos por llenar')
    console.log('tarea agregada')
  }

  return <GlobalContext.Provider value={{
    taskList, 
    formState, setFormState,
    cleanForm,
    changeMemberData,
    changeTaskData,
    addTaskToList
  }}>
    { children }
  </GlobalContext.Provider>
}

GlobalContextProvider.propTypes = {
  children: PropTypes.node
}

export { GlobalContext, GlobalContextProvider }