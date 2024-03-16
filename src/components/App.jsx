import useGlobalContext from '../hooks/useGlobalContext'
import TodoContainer from './todo/TodoContainer'
import FormContainer from './form/FormContainer'

import '../css/index.css'

const App = () => {
  const { formState: { displayed } } = useGlobalContext()

  return <main className='d-flex flex-column align-center jusfity-center'>
    <TodoContainer />
    { displayed && (<FormContainer />) }
  </main>
}

export default App