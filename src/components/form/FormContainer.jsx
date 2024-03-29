import classNames from 'classnames'
import useGlobalContext from '../../hooks/useGlobalContext'

import FormHeader from './FormHeader'
import Form from './Form'
import FormFooter from './FormFooter'

import '../../css/Form.css'

const FormContainer = () => {
  const { formState: { isVisible } } = useGlobalContext()

  return <section 
    className={classNames("container__form d-flex flex-column", { 'visible': isVisible })}>
    <FormHeader />
    <Form />
    <FormFooter />
  </section>
}

export default FormContainer