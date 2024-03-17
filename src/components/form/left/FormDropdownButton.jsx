import { useState, useEffect } from "react"
import useGlobalContext from '../../../hooks/useGlobalContext.js'
import { URL_AVATAR, THUMBNAIL } from '../../../config/cfg.js'

const FormDropdownButton = () => {
  const [member, setMember] = useState({})
  const { findMemberById, formState, setFormState } = useGlobalContext()

  useEffect(() => {
    const memberFound = findMemberById(formState.memberId)
    setMember(memberFound)
  }, [findMemberById, formState.memberId])

  return <button 
    className="form__dropdown form__dropdown-btn d-flex align-center gap-3"
    onClick={() => setFormState({...formState, dropDownIsVisible: !formState.dropDownIsVisible})}>
      { (member !== undefined && member.id > 0) ? (<>
          <img src={`${URL_AVATAR}${THUMBNAIL}${member.avatar}`} alt="" className="img-circle" />
          {member.firstName} {member.lastName}
        </>
      ) : '[Selecciona a un miembro]' }
  </button>
}

export default FormDropdownButton