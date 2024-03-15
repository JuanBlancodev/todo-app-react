import PropTypes from 'prop-types'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheck, faTrash } from "@fortawesome/free-solid-svg-icons"
import { URL_AVATAR, THUMBNAIL } from '../../../../config/cfg'

const priorities = [
  { class: 'low', text: 'Baja' },
  { class: 'medium', text: "Media" },
  { class: 'high', text: 'Alta' }
]

const Task = ({ firstName, lastName, avatar, task, priority }) => {
  return <tr className="table__row d-grid grid-column-4 text-center align-center">
    <td className="table__cell d-flex align-center gap-3 font-bold">
      <img src={`${URL_AVATAR}${THUMBNAIL}${avatar}`} alt={`${firstName} ${lastName}`} className="img-circle" />
      <span className="table__cell--name font-size-1">{firstName} {lastName}</span>
    </td>
    <td className="table__cell">{ task }</td>
    <td className="table__cell">
      <span className={`priority ${priorities[priority].class}`}>{priorities[priority].text}</span>
    </td>
    <td className="table__cell">
      <button className="btn color-success font-size-1">
        <FontAwesomeIcon icon={faCheck} />
      </button>
      <button className="btn color-danger font-size-1">
        <FontAwesomeIcon icon={faTrash} />
      </button>
    </td>
  </tr>
}

Task.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  task: PropTypes.string.isRequired,
  priority: PropTypes.number.isRequired
}

export default Task