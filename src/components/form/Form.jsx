import FormSectionLeft from "./left/FormSectionLeft"
import FormSectionRight from "./right/FormSectionRight"

const Form = () => {
  return <div className="form d-flex flex gap-3">
    <FormSectionLeft />
    <hr />
    <FormSectionRight />
  </div>
}

export default Form