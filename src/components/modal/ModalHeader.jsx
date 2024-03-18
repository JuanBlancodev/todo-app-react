import PropTypes from 'prop-types'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleInfo, faCheck, faXmark } from "@fortawesome/free-solid-svg-icons"

const iconType = {
  'info': faCircleInfo,
  'success': faCheck,
  'danger': faXmark
}

const ModalHeader = ({ modalType, title }) => {
  return <div className={`modal__header bg-${modalType} d-flex gap-2 align-center`}>
    <FontAwesomeIcon icon={iconType[modalType]} />
    { title }
  </div>
}

ModalHeader.propTypes = {
  modalType: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
}

export default ModalHeader