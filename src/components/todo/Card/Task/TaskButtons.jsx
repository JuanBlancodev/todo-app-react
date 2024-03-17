import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheck, faTrash } from "@fortawesome/free-solid-svg-icons"

const TaskButtons = () => {
  return <td className="table__cell">
      <button className="btn color-success font-size-1">
        <FontAwesomeIcon icon={faCheck} />
      </button>
      <button className="btn color-danger font-size-1">
        <FontAwesomeIcon icon={faTrash} />
      </button>
   </td>
}

export default TaskButtons