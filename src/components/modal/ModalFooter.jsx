import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faX } from '@fortawesome/free-solid-svg-icons'
import useGlobalContext from '../../hooks/useGlobalContext'

const ModalFooter = ({ callback }) => {
  const { toggleModal } = useGlobalContext()

  return <div className="modal__footer d-flex align-center flex-row-reverse justify-end gap-3">
    <button 
      className="d-flex align-center justify-center gap-1 btn btn-danger color-white font-bold"
      onClick={() => {toggleModal(false)}}>
        <FontAwesomeIcon icon={faX} />
        Cacelar
      </button>
    <button 
      className="d-flex align-center justify-center gap-1 btn btn-success color-white font-bold"
      onClick={() => callback()}>
        <FontAwesomeIcon icon={faCheck} />
        Confirmar
      </button>
  </div>
}

ModalFooter.propTypes = { callback: PropTypes.func.isRequired }

export default ModalFooter