import PropTypes from 'prop-types'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheck, faTrash } from "@fortawesome/free-solid-svg-icons"
import useGlobalContext from '../../../../hooks/useGlobalContext'

const TaskButtons = ({ taskId }) => {
  const { MarkAsCompleted, deleteTask, displayTaskCompleted } = useGlobalContext()

  return <td className="table__cell">
    { !displayTaskCompleted && 
      <button 
        className="btn color-success font-size-1"
        onClick={() => MarkAsCompleted(taskId)}>
        <FontAwesomeIcon icon={faCheck} />
      </button>
    }
      
      <button 
        className="btn color-danger font-size-1"
        onClick={() => deleteTask(taskId)}>
        <FontAwesomeIcon icon={faTrash} />
      </button>
   </td>
}

TaskButtons.propTypes = { taskId: PropTypes.number.isRequired }

export default TaskButtons