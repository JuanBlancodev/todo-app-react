import { useEffect, useState } from "react"
import Task from "./Task"

const TaskList = () => {
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try{
        const response = await fetch('/public/tasks.json')
        const data = await response.json()
        setTasks(data)
      }catch(error){
        console.error(error)
      }
    }

    fetchData()
  }, [])

  return <tbody className="table__body">
    { tasks.map((task) => (
      <Task 
        firstName={task.firstName}
        lastName={task.lastName}
        avatar={task.avatar}
        task={task.task}
        priority={task.priority - 1}
        key={task.id} />
    )) }
  </tbody>
}

export default TaskList