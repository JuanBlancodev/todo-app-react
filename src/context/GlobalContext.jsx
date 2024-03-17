import { createContext, useState, useEffect } from "react";
import PropTypes from 'prop-types'
import axios from 'axios'
import Swal from 'sweetalert2'
import { URL_AVATAR, TODO_LOCAL_STORAGE, COMPLETE_LOCAL_STORAGE } from '../config/cfg'

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

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem(TODO_LOCAL_STORAGE)) || []
    const completedList = JSON.parse(localStorage.getItem(COMPLETE_LOCAL_STORAGE)) || []
    setTaskList(storedTasks)
    setTaskCompleted(completedList)

    const fetchMemebers = async () => {
      const response = await axios.get('/public/members.json')
      setMembers(response.data)
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

  const findTaskById = (id) => taskList.find(task => task.task.id === id)

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
      localStorage.setItem(TODO_LOCAL_STORAGE, JSON.stringify(tasks))
    }
  }

  const MarkAsCompleted = (id) => {
    const taskFound = findTaskById(id)
    const member = findMemberById(taskFound.memberId)

    const content = `
      <div className="d-flex-flex-column gap-5">
        <div>
          <img src={'${URL_AVATAR}${member.avatar}'} className="img-circle" />
        </div>
      </div>
    `

    showHtmlAlert(content, () => console.log('Hello World'))

    // const confirmCompleted = confirm(`¿Seguro que quieres marca esta tarea como completa?\n\n\
    //   Miembro: ${member.firstName} ${member.lastName}\n\
    //   Tarea: ${taskFound.task.name}\n\
    //   Prioridad: ${traslatePriority(taskFound.task.priority)}`)

    // if(confirmCompleted){
    //   const taskCompletedUpdated = [...taskCompleted, taskFound]
    //   setTaskCompleted(taskCompletedUpdated)
    //   localStorage.setItem(COMPLETE_LOCAL_STORAGE, JSON.stringify(taskCompletedUpdated))

    //   deleteTask(id, true)
    // }
  }

  const deleteTask = (id, force=false) => {
    const taskFound = findTaskById(id)
    const member = findMemberById(taskFound.memberId)
    if(!force){
      const confirmMessage = `¿Seguro que quieres eliminar esta tarea como completa?\n\n\
          Miembro: ${member.firstName} ${member.lastName}\n\
          Tarea: ${taskFound.task.name}\n\
          Prioridad: ${traslatePriority(taskFound.task.priority)}`;

      const confirmed = confirm(confirmMessage);
      if (!confirmed) {
          return;
      }
    }

    const taskListUpdated = taskList.filter(task => task.task.id !== id);
    setTaskList(taskListUpdated);
    localStorage.setItem(TODO_LOCAL_STORAGE, JSON.stringify(taskListUpdated));
  }

  const showHtmlAlert = (htmlContent, confirmCallback) => {
    Swal.fire({
      html: htmlContent,
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Confirmar'
    }).then((result) => {
      if (result.isConfirmed) {
        confirmCallback();
      }
    });
  };  

  return <GlobalContext.Provider value={{
    membersList,
    findMemberById,
    taskList, 
    setVisibleForm,
    formState, setFormState,
    selectMember,
    changeTaskData,
    addTaskToList,
    traslatePriority,
    MarkAsCompleted,
    deleteTask
  }}>
    { children }
  </GlobalContext.Provider>
}

GlobalContextProvider.propTypes = {
  children: PropTypes.node
}

export { GlobalContext, GlobalContextProvider }