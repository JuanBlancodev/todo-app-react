import classNames from "classnames"
import useGlobalContext from '../../../hooks/useGlobalContext.js'
import FormDropdownButton from "./FormDropdownButton.jsx"
import FormDropdownMember from "./FormDropdownMember.jsx"

const FormDropdown = () => {
  const { 
    membersList, 
    formState,
    } = useGlobalContext()

  return <div>
    <FormDropdownButton />
    <div className={classNames("form__dropdown-content", { 'visible': formState.dropDownIsVisible })}>
      { membersList.map(item => (
        <FormDropdownMember member={item} key={item.id} />
      )) }
    </div>
  </div>
}

export default FormDropdown