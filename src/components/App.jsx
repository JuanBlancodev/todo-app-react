import classNames from 'classnames'
import useGlobalContext from '../hooks/useGlobalContext'
import TodoContainer from './todo/TodoContainer'
import FormContainer from './form/FormContainer'
import Modal from './modal/Modal'
import { ToastContainer } from 'react-toastify'

import '../css/index.css'
import 'react-toastify/dist/ReactToastify.css';
import ScreenLoader from './ScreenLoader'
import { useEffect, useState } from 'react'

const App = () => {
  const [loading, setLoading] = useState(true)
  const { formState: { displayed }, modal } = useGlobalContext()

  useEffect(() => {
    setTimeout(() => setLoading(false), 1500)
  }, [])

  return <>
    { loading && <ScreenLoader /> }
    <main className={classNames('d-flex flex-column align-center jusfity-center', { 'visible': !loading })}>
      <ToastContainer />
      <TodoContainer />
      { displayed && (<FormContainer />) }
      { modal.isDisplayed && <Modal modal={modal} /> }
    </main>
  </>
}

export default App