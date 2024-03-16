import classNames from 'classnames'
import PropTypes from 'prop-types'
import useGlobalContext from '../../../hooks/useGlobalContext'

const FormButtonPriority = ({ pClass, text }) => {
  const { formState, changeTaskData } = useGlobalContext()

  return <span 
    className={classNames('btn__priority', { [pClass]: formState.task.priority == pClass })}
    onClick={() => changeTaskData({ priority: pClass })}>
      { text }
    </span>
}

FormButtonPriority.propTypes = {
  pClass: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
}

export default FormButtonPriority