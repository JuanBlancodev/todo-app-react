import { createContext, useState, useEffect } from "react";
import PropTypes from 'prop-types'
import axios from 'axios'
import { ITEM_LOCAL_STORAGE } from '../config/cfg'

const GlobalContext = createContext()

const initialValueForm = {
  isVisible: false,
  displayed: false,
  dropDownIsVisible: false,
  memberId: 0,
  task: {
    name: '',
    priority: ''
  }
}

const GlobalContextProvider = ({ children }) => {
  const [membersList, setMembers] = useState([])
  const [formState, setFormState] = useState(initialValueForm)
  const [taskList, setTaskList] = useState([])

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem(ITEM_LOCAL_STORAGE)) || []
    setTaskList(storedTasks)

    const fetchMemebers = async () => {
      const response = await axios.get('/public/members.json')
      setMembers(response.data)
    }

    fetchMemebers()
  }, [])

  const findMemberById = (id) => membersList.find(member => member.id === id)

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

  const selectMember = (id) => {
    setFormState({
      ...formState,
      dropDownIsVisible: false,
      memberId: id
    })
  }

  const changeTaskData = (data) => {
    setFormState({
      ...formState,
      task: { ...formState.task, ...data }
    })
  }

  const checkTaskReady = () => {
    return formState.memberId !== 0 &&
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
    const { task } = formState
    const member = findMemberById(formState.memberId)
    const confirmState = confirm(`¿Estás seguro de agregar esta tarea a la lista?\n\
      Miembro: ${member.firstName} ${member.lastName}\n\
      Tarea: ${task.name}\n\
      Prioridad: ${traslatePriority(task.priority)}`)
    if(confirmState){
      const newTask = { memberId: formState.memberId, task: { id: taskList.length + 1, ...task } }

      const tasks = [...taskList, newTask]
      setTaskList(tasks)
      setVisibleForm(false)
      localStorage.setItem(ITEM_LOCAL_STORAGE, JSON.stringify(tasks))
    }
  }

  return <GlobalContext.Provider value={{
    membersList,
    findMemberById,
    taskList, 
    setVisibleForm,
    formState, setFormState,
    selectMember,
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