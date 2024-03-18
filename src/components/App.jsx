import useGlobalContext from '../hooks/useGlobalContext'
import TodoContainer from './todo/TodoContainer'
import FormContainer from './form/FormContainer'
import Modal from './modal/Modal'
import { ToastContainer } from 'react-toastify'

import '../css/index.css'
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const { formState: { displayed }, modal } = useGlobalContext()

  return <main className='d-flex flex-column align-center jusfity-center'>
    <ToastContainer />
    <TodoContainer />
    { displayed && (<FormContainer />) }
    { modal.isDisplayed && <Modal modal={modal} /> }
  </main>
}

export default App