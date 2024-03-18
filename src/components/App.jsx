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
    const handledLoad = () => {
      const images = document.querySelectorAll('img');
      const loadImage = (image) => {
        return new Promise((resolve, reject) => {
          image.onload = resolve;
          image.onerror = reject;
        });
      };
      Promise.all([...images].map((image) => loadImage(image)))
        .then(() => {
          setLoading(false);
        })
        .catch(() => {
          setLoading(false);
        });
      }

    window.addEventListener('load', handledLoad);
    return () => window.removeEventListener('load', handledLoad)
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