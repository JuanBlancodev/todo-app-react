import PropTypes from 'prop-types'
import classNames from 'classnames'

import ModalHeader from './ModalHeader'
import ModalMember from './ModalMember'
import ModalTaskName from './ModalTaskName'
import ModalPriority from './ModalPriority'
import ModalFooter from './ModalFooter'
import '../../css/Modal.css'

const Modal = ({ modal }) => {
  const { isVisible, type, title, memberId, task, callback } = modal
  
  return <>
  <div className={classNames('modal-overlay', { 'visible': isVisible })}></div>
    <div className={classNames('modal', { 'visible': isVisible })}>
      <ModalHeader modalType={type} title={title} />
      <div className="form__section d-flex text-black">
        <ModalMember memberId={memberId} />
        <hr />
        <div className="form__section d-flex flex-column gap-7">
          <ModalTaskName title={task.name} />
          <ModalPriority priority={task.priority} />
        </div>
      </div>
      <ModalFooter callback={callback} />
    </div>
  </>
}

Modal.propTypes = { modal: PropTypes.object.isRequired }

export default Modal