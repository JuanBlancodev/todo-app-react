import FormHeader from './FormHeader'
import Form from './Form'

import '../../../css/Form.css'

const FormContainer = () => {
  return <section className="container__form d-flex flex-column">
    <FormHeader />
    <Form />
  </section>
}

export default FormContainer