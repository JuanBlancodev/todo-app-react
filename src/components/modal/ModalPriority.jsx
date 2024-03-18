import PropTyes from 'prop-types'
import classNames from 'classnames'

const priorities = [
  { class_: 'high', text: 'Alta' },
  { class_: 'medium', text: 'Media' },
  { class_: 'low', text: 'Baja' }
]

const ModalPriority = ({ priority }) => {
  return <div className="form__priority d-flex flex-column gap-4">
    <label>Prioridad de la tarea</label>
    <div className="d-flex gap-2">
      { priorities.map(item => (
        <span 
          key={item.class_} 
          className={classNames('btn__priority', { [item.class_]: item.class_ === priority })}>
            { item.text }
        </span>
      )) }
    </div>
  </div>
}

ModalPriority.propTypes = { priority: PropTyes.string.isRequired }

export default ModalPriority