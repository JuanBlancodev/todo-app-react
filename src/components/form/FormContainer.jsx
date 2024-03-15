import useGlobalContext from '../../hooks/useGlobalContext'

import FormHeader from './FormHeader'
import Form from './Form'
import FormFooter from './FormFooter'

import '../../css/Form.css'

const FormContainer = () => {
  const { formState } = useGlobalContext()

  return <section className={`container__form d-flex flex-column ${formState.visible ? 'visible' : ''}`}>
    <FormHeader />
    <Form />
    <FormFooter />
  </section>
}

export default FormContainer