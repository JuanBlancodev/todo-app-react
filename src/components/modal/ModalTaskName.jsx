import PropTypes from 'prop-types'

const ModalTaskName = ({ title }) => {
  return <div className="form__taskname d-flex flex-column gap-2">
    <label>Nombre de la tarea</label>
    <div className="input-field bg-white">{ title }</div>
  </div>
}

ModalTaskName.propTypes = { title: PropTypes.string.isRequired }

export default ModalTaskName