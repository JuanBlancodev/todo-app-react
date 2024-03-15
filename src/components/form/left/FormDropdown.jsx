import { useState, useEffect } from "react"
import classNames from "classnames"
import { URL_AVATAR, THUMBNAIL } from '../../../config/cfg.js'
import useGlobalContext from '../../../hooks/useGlobalContext.js'

const FormDropdown = () => {
  const [members, setMember] = useState([])
  const { formState, setFormState } = useGlobalContext()

  useEffect(() => {
    const fetchMembers = async () => {
      try{
        const response = await fetch('/public/members.json')
        const data = await response.json()
        setMember(data)
      }catch(error){
        console.error(error)
      }
    }

    fetchMembers()
  }, [])

  return <div 
    className="form__dropdown"
    onClick={() => setFormState({...formState, dropDownIsVisible: !formState.dropDownIsVisible})}>
    <button className="form__dropdown-btn d-flex align-center gap-5">[Selecciona a un miembro]</button>
    <div className={classNames("form__dropdown-content", { 'visible': formState.dropDownIsVisible })}>
      { members.map(member => (
        <div className="dropdown-item d-flex align-center gap-5" key={member.id}>
          <img src={`${URL_AVATAR}${THUMBNAIL}${member.avatar}`} alt={`${member.firstName} ${member.lastName}`} className="img-circle" />
            {member.firstName} {member.lastName}
        </div>
      )) }
    </div>
  </div>
}


    {/* <button className="form__dropdown-btn d-flex align-center gap-5">
      <img src="https://randomuser.me/api/portraits/thumb/men/32.jpg" alt="" className="img-circle">
      Miguel Sanders
    </button> */}

export default FormDropdown