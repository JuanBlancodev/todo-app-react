import PropTypes from 'prop-types'
import TaskMember from './TaskMember'
import TaskInfo from './TaskInfo'
import TaskButtons from './TaskButtons'

const Task = ({ firstName, lastName, avatar, name, priority }) => {
  const member = { firstName, lastName, avatar }

  return <tr className="table__row d-grid grid-column-4 text-center align-center">
    <TaskMember member={member} />
    <TaskInfo taskInfo={{name, priority}} />
    <TaskButtons />
  </tr>
}

Task.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  priority: PropTypes.string.isRequired
}

export default Task