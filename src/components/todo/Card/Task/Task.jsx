import PropTypes from 'prop-types'

import TaskMember from './TaskMember'
import TaskInfo from './TaskInfo'
import TaskButtons from './TaskButtons'
import { useEffect, useState } from 'react'

const Task = ({ memberId, task }) => {
  const [taskInfo, setTaskInfo] = useState(undefined)
  
  useEffect(() => {
    setTaskInfo(task)
  }, [task])

  if(taskInfo === undefined){
    return null
  }

  return <tr className="table__row d-grid grid-column-4 text-center align-center">
    <TaskMember memberId={memberId} />
    <TaskInfo taskInfo={{name: taskInfo.name, priority: taskInfo.priority}} />
    <TaskButtons taskId={taskInfo.id} />
  </tr>
}

Task.propTypes = {
  memberId: PropTypes.number.isRequired,
  task: PropTypes.object.isRequired
}

export default Task