import { createContext, useState } from "react";
import PropTypes from 'prop-types'

const GlobalContext = createContext()

const initialValueForm = {
  isVisible: false,
  displayed: false,
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

  const setVisibleForm = (visible) => {
    if(visible){
      setFormState(prevState => ({...prevState, displayed: visible}))
      setTimeout(() => setFormState(prevState => ({...prevState, isVisible: visible})), 10)
    }
    else{
      setFormState(prevState => ({...prevState, isVisible: visible}))
      setTimeout(() =>  setFormState(initialValueForm), 250)
    }
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

  const traslatePriority = (text) => {
    const map = { 'low': 'Baja', 'medium': 'Media', 'high': 'Alta' }
    return map[text];
  }

  const addTaskToList = () => {
    if(!checkTaskReady()){
      return console.log('Faltan campos por llenar')
    }
    const { member, task } = formState
    const confirmState = confirm(`¿Estás seguro de agregar esta tarea a la lista?\n\
      Miembro: ${member.firstName} ${member.lastName}\n\
      Tarea: ${task.name}\n\
      Prioridad: ${traslatePriority(task.priority)}`)
    if(confirmState){
      const newTask = { member, task: { id: taskList.length + 1, ...task } }
      setTaskList([...taskList, newTask])
      setVisibleForm(false)
    }
  }

  return <GlobalContext.Provider value={{
    taskList, 
    setVisibleForm,
    formState, setFormState,
    changeMemberData,
    changeTaskData,
    addTaskToList,
    traslatePriority
  }}>
    { children }
  </GlobalContext.Provider>
}

GlobalContextProvider.propTypes = {
  children: PropTypes.node
}

export { GlobalContext, GlobalContextProvider }