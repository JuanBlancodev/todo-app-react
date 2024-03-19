import { createContext, useState, useEffect } from "react";
import PropTypes from 'prop-types'
import axios from 'axios'
import { toast } from "react-toastify";
import { TODO_LOCAL_STORAGE, COMPLETE_LOCAL_STORAGE } from '../config/cfg'

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
  const [taskCompleted, setTaskCompleted] = useState([])
  const [modal, setModal] = useState({
    isVisible: false,
    isDisplayed: false,
    type: '',
    title: '',
    task: {
      name: '',
      priority: ''
    },
    callback: null
  })
  const [displayTaskCompleted, setDisplayTaskCompleted] = useState(false)

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem(TODO_LOCAL_STORAGE)) || []
    const completedList = JSON.parse(localStorage.getItem(COMPLETE_LOCAL_STORAGE)) || []
    setTaskList(storedTasks)
    setTaskCompleted(completedList)

    const fetchMemebers = async () => {
<<<<<<< HEAD
      const response = await axios.get('/members.json')
      setMembers(response.data)
=======
      try{
        const response = await axios.get('members.json')
        setMembers(response.data)
      }catch(error){
        console.log(error)
      }
>>>>>>> dev
    }

    fetchMemebers()
  }, [])

  const findMemberById = (id) => membersList.find(member => member.id === id)

  const selectMember = (id) => {
    setFormState({
      ...formState,
      dropDownIsVisible: false,
      memberId: id
    })
  }

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

  const findTaskById = (id) => {
    const tasks = displayTaskCompleted ? taskCompleted : taskList
    return tasks.find(task => task.task.id === id)
  }

  const addTaskToList = () => {
    if(!checkTaskReady()){
      return showToast({ type: 'info', message: 'Faltan campos por llenar' })
    }
    const { task } = formState
    toggleModal(true)
    setModal(prevState => ({
      ...prevState,
      type: 'info',
      title: 'Agregar tarea a la lista',
      memberId: formState.memberId,
      task,
      callback: () => {
        const newTask = { memberId: formState.memberId, task: { id: taskList.length + 1, ...task } }

        const tasks = [...taskList, newTask]
        setTaskList(tasks)
        setVisibleForm(false)
        localStorage.setItem(TODO_LOCAL_STORAGE, JSON.stringify(tasks))

        toggleModal(false)
        showToast({ type: 'success', message: 'Tarea añadida a la lista' })
      }
    }))
  }

  const MarkAsCompleted = (id) => {
    const taskFound = findTaskById(id)

    toggleModal(true)
    setModal(prevState => ({
      ...prevState,
      type: 'info',
      title: '¿Seguro que quieres marca ésta tarea como completada?',
      memberId: taskFound.memberId,
      task: taskFound.task,
      callback: () => {
        const taskCompletedUpdated = [...taskCompleted, taskFound]
        setTaskCompleted(taskCompletedUpdated)
        localStorage.setItem(COMPLETE_LOCAL_STORAGE, JSON.stringify(taskCompletedUpdated))

        deleteTask(id, true)
        showToast({ type: 'success', message: 'Tarea marcada como completada' })
        toggleModal(false)
      }
    }))
  }

  const deleteTask = (id, force = false) => {
    const func_deleteTask = () => {
      const taskListUpdated = taskList.filter(task => task.task.id !== id);
      setTaskList(taskListUpdated);
      localStorage.setItem(TODO_LOCAL_STORAGE, JSON.stringify(taskListUpdated));
    }

    const func_deleteTaskCompleted = () => {
      const taskListUpdated = taskCompleted.filter(task => task.task.id !== id);
      setTaskCompleted(taskListUpdated);
      localStorage.setItem(COMPLETE_LOCAL_STORAGE, JSON.stringify(taskListUpdated));
    }

    if(!force){
      const taskFound = findTaskById(id)
      toggleModal(true)
      setModal(prevState => ({
        ...prevState,
        type: 'danger',
        title: '¿Estás seguro que quieres eliminar ésta tarea?',
        memberId: taskFound.memberId,
        task: taskFound.task,
        callback: () => {
          if(displayTaskCompleted){
            func_deleteTaskCompleted()
          } else func_deleteTask()
          toggleModal(false)

          showToast({ type: 'success', message: 'La tarea ha sido eliminada de la lista' })
        }
      }))
    } else func_deleteTask()
  }

  const toggleModal = display => {
    if(display){
      setModal(prevState => ({...prevState, isDisplayed: true}))
      setTimeout(() => setModal(prevState => ({...prevState, isVisible: true})), 250)
    }
    else{
      setModal(prevState => ({...prevState, isVisible: false}))
      setTimeout(() => setModal(prevState => ({...prevState, isDisplayed: false})), 250)
    }
  }

  const showToast = ({ type, message }) => {
    toast[type](message, {
      position: "top-right",
      autoClose: 2500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
      theme: "light"
      });
  }

  return <>
    <GlobalContext.Provider value={{
      membersList,
      findMemberById,
      taskList,
      taskCompleted,
      setVisibleForm,
      formState, setFormState,
      selectMember,
      changeTaskData,
      addTaskToList,
      traslatePriority,
      MarkAsCompleted,
      deleteTask,
      modal,
      toggleModal,
      displayTaskCompleted, setDisplayTaskCompleted
    }}>
      { children }
    </GlobalContext.Provider>
  </>
}

GlobalContextProvider.propTypes = {
  children: PropTypes.node
}

export { GlobalContext, GlobalContextProvider }