import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faList } from '@fortawesome/free-solid-svg-icons'
import useGlobalContext from '../../hooks/useGlobalContext'

const TodoHeaderButtons = () => {
  const { setVisibleForm, displayTaskCompleted, setDisplayTaskCompleted } = useGlobalContext()

  return <div className="header__button d-flex align-center gap-4">
    <button
      id="btn__completeList"
      className='d-flex align-center justify-center gap-2 btn btn-info color-white font-bold'
      onClick={() => setDisplayTaskCompleted(!displayTaskCompleted)}>
        <FontAwesomeIcon icon={faList} />
        Mostrar { !displayTaskCompleted ? 'tareas completadas' : 'tareas pendientes' }
      </button>
    <button 
      id="btn__newTask" 
      className="d-flex align-center justify-center gap-1 btn btn-primary color-white font-bold"
      onClick={() => setVisibleForm(true)}
      disabled={displayTaskCompleted}>
        <FontAwesomeIcon icon={faPlus} />
        Nueva tarea
    </button>
  </div>
}

export default TodoHeaderButtons