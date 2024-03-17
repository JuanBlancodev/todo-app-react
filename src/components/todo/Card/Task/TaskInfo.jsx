import PropsTypes from 'prop-types'
import useGlobalContext from "../../../../hooks/useGlobalContext"

const TaskInfo = ({ taskInfo }) => {
  const { name, priority } = taskInfo
  const { traslatePriority } = useGlobalContext()
  
  return <>
    <td className="table__cell">{ name }</td>
    <td className="table__cell">
      <span className={`priority ${priority}`}>{traslatePriority(priority)}</span>
    </td>
  </>
}

TaskInfo.propTypes = { taskInfo: PropsTypes.object.isRequired }

export default TaskInfo