import { useState, useEffect } from 'react'
import useGlobalContext from '../../../hooks/useGlobalContext'
import Task from "./Task/Task"

const TaskList = () => {
  const [tasks, setTasks] = useState(undefined)
  const { taskList, taskCompleted, displayTaskCompleted } = useGlobalContext()

  useEffect(() => {
    setTasks(displayTaskCompleted ? taskCompleted : taskList)
  }, [taskCompleted, taskList, displayTaskCompleted])

  if(tasks === undefined){
    return null
  }

  return <tbody className="table__body">
    { tasks.length != 0 ? tasks.map(({ memberId, task }, index) => (
      <Task 
        memberId={memberId}
        task={task}
        key={index} 
      />
    )) : null }
  </tbody>
}

export default TaskList