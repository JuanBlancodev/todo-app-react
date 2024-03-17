import useGlobalContext from '../../../hooks/useGlobalContext'
import Task from "./Task/Task"

const TaskList = () => {
  const { taskList } = useGlobalContext()

  return <tbody className="table__body">
    { taskList.map(({ memberId, task }) => (
      <Task 
        memberId={memberId}
        name={task.name}
        priority={task.priority}
        key={task.id} />
    )) }
  </tbody>
}

export default TaskList