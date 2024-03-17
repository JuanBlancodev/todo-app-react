import PropTypes from 'prop-types'
import { URL_AVATAR, THUMBNAIL } from '../../../../config/cfg'

const TaskMember = ({ member }) => {
  const { avatar, firstName, lastName } = member
  return (
    <td className="table__cell d-flex align-center gap-3 font-bold">
      <img src={`${URL_AVATAR}${THUMBNAIL}${avatar}`} alt={`${firstName} ${lastName}`} className="img-circle" />
      <span className="table__cell--name font-size-1">{firstName} {lastName}</span>
    </td>
  )
}

TaskMember.propTypes = { member: PropTypes.object.isRequired }

export default TaskMember