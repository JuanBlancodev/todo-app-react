import PropTypes from 'prop-types'

import TaskMember from './TaskMember'
import TaskInfo from './TaskInfo'
import TaskButtons from './TaskButtons'

const Task = ({ memberId, name, priority }) => {
  return <tr className="table__row d-grid grid-column-4 text-center align-center">
    <TaskMember memberId={memberId} />
    <TaskInfo taskInfo={{name, priority}} />
    <TaskButtons />
  </tr>
}

Task.propTypes = {
  memberId: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  priority: PropTypes.string.isRequired
}

export default Task