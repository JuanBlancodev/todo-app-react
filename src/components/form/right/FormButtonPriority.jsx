import classNames from 'classnames'
import PropTypes from 'prop-types'
import useGlobalContext from '../../../hooks/useGlobalContext'

const FormButtonPriority = ({ pClass, text }) => {
  const { formState, setFormState } = useGlobalContext()

  return <span 
    className={classNames('btn__priority', { [pClass]: formState.priority == pClass })} 
    onClick={() => setFormState({...formState, priority: pClass})}>
      { text }
    </span>
}

FormButtonPriority.propTypes = {
  pClass: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
}

export default FormButtonPriority