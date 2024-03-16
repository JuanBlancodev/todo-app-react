import { useState, useEffect } from "react"
import classNames from "classnames"
import axios from 'axios'
import { URL_AVATAR, THUMBNAIL } from '../../../config/cfg.js'
import useGlobalContext from '../../../hooks/useGlobalContext.js'

const FormDropdown = () => {
  const [members, setMember] = useState([])
  const { formState, formState: { member }, changeMemberData, setFormState } = useGlobalContext()

  useEffect(() => {
    const fetchMembers = () => {
      axios.get('/public/members.json')
      .then(({ data }) => setMember(data))
      .catch((error) => console.error(error))
    }

    fetchMembers()
  }, [])

  return <div>
    <button 
      className="form__dropdown form__dropdown-btn d-flex align-center gap-3"
      onClick={() => setFormState({...formState, dropDownIsVisible: !formState.dropDownIsVisible})}>
        { member.id !== 0 ? (<>
            <img src={`${URL_AVATAR}${THUMBNAIL}${member.avatar}`} alt="" className="img-circle" />
            {member.firstName} {member.lastName}
          </>
        ) : '[Selecciona a un miembro]' }
    </button>

    <div className={classNames("form__dropdown-content", { 'visible': formState.dropDownIsVisible })}>
      { members.map(item => (
        <div 
          className="dropdown-item d-flex align-center gap-5" 
          key={item.id}
          onClick={() => changeMemberData(item)}>
          <img src={`${URL_AVATAR}${THUMBNAIL}${item.avatar}`} alt={`${item.firstName} ${item.lastName}`} className="img-circle" />
            {item.firstName} {item.lastName}
        </div>
      )) }
    </div>
  </div>
}

export default FormDropdown