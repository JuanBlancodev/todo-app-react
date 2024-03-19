import { useEffect, useState } from 'react'
import classNames from 'classnames'
import HeaderWatermark from 'react-header-watermark'
import { ToastContainer } from 'react-toastify'
import Cookies from 'js-cookie'

import TodoContainer from './todo/TodoContainer'
import FormContainer from './form/FormContainer'
import Modal from './modal/Modal'
import ScreenLoader from './ScreenLoader'
import AlertLocalStorage from './AlertLocalStorage'

import useGlobalContext from '../hooks/useGlobalContext'
import { PROJECT_NAME, GITHUB_LINK, COOKIE_LOCALSTORAGE, COOKIE_EXPIRES } from '../config/cfg'

import '../css/index.css'
import 'react-toastify/dist/ReactToastify.css';
import 'react-header-watermark/dist/index.css'

const App = () => {
  const [loading, setLoading] = useState(true)
  const [cookieLocalStorage, setCookieLocalStorage] = useState(false)
  const { formState: { displayed }, modal } = useGlobalContext()

  useEffect(() => {
    setTimeout(() => setLoading(false), 1500)

    setCookieLocalStorage(Cookies.get(COOKIE_LOCALSTORAGE) === 'true')
  }, [])

  const handleCookie = () => {
    Cookies.set(COOKIE_LOCALSTORAGE, true, { expires: COOKIE_EXPIRES })
    setCookieLocalStorage(true)
  }

  return <>
    { loading ? 
      <ScreenLoader /> : 
      <HeaderWatermark projectName={PROJECT_NAME} github={GITHUB_LINK} /> 
    }
    { !cookieLocalStorage && <AlertLocalStorage handleCookie={handleCookie} /> }
    <main className={classNames('d-flex flex-column align-center jusfity-center', { 'visible': !loading })}>
      <ToastContainer />
      <TodoContainer />
      { displayed && (<FormContainer />) }
      { modal.isDisplayed && <Modal modal={modal} /> }
    </main>
  </>
}

export default App