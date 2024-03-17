import PropTypes from 'prop-types'

import TaskMember from './TaskMember'
import TaskInfo from './TaskInfo'
import TaskButtons from './TaskButtons'

const Task = ({ memberId, task }) => {
  const { id, name, priority } = task

  return <tr className="table__row d-grid grid-column-4 text-center align-center">
    <TaskMember memberId={memberId} />
    <TaskInfo taskInfo={{name, priority}} />
    <TaskButtons taskId={id} />
  </tr>
}

Task.propTypes = {
  memberId: PropTypes.number.isRequired,
  task: PropTypes.object.isRequired
}

export default Task