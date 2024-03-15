import FormTaskName from './FormTaskName'
import FormPriority from './FormPriority'

const FormSectionRight = () => {
  return <div className="form__section flex d-flex flex-column" style={{gap: 4 + 'rem'}}>
    <FormTaskName />
    <FormPriority />
  </div>
}

export default FormSectionRight