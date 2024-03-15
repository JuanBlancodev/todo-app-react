import TodoContainer from './container/todo/TodoContainer'
import FormContainer from './container/form/FormContainer'

import '../css/index.css'

const App = () => {
  return <main className='d-flex flex-column align-center jusfity-center'>
    <TodoContainer />
    <FormContainer />
  </main>
}

export default App