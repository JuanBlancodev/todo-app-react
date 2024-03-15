import FormHeader from './FormHeader'
import Form from './Form'
import FormFooter from './FormFooter'

import '../../css/Form.css'

const FormContainer = () => {
  return <section className="container__form d-flex flex-column">
    <FormHeader />
    <Form />
    <FormFooter />
  </section>
}

export default FormContainer