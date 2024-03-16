import useGlobalContext from '../../../hooks/useGlobalContext'
import Task from "./Task"

const TaskList = () => {
  const { taskList } = useGlobalContext()

  return <tbody className="table__body">
    { taskList.map(({ member, task }) => (
      <Task 
        firstName={member.firstName}
        lastName={member.lastName}
        avatar={member.avatar}
        task={task.name}
        priority={task.priority}
        key={task.id} />
    )) }
  </tbody>
}

export default TaskList