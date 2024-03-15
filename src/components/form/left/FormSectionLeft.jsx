import FormDropdown from "./FormDropdown"
import FormMember from "./FormMember"

const FormSectionLeft = () => {
  return <div className="form__section d-flex flex-column gap-5">
    <FormDropdown />
    <FormMember />
  </div>
}

export default FormSectionLeft