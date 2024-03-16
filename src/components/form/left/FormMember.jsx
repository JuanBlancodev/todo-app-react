import useGlobalContext from '../../../hooks/useGlobalContext'
import { URL_AVATAR, URL_AVATAR_DEFAULT } from '../../../config/cfg'

const FormMember = () => {
  const { formState: { member } } = useGlobalContext()

  return <div className="form__member d-flex align-center flex-column gap-3">
    <div className="avatar">
      <img 
        src={member.id !== 0 ? `${URL_AVATAR}${member.avatar}` : `${URL_AVATAR_DEFAULT}`} 
        alt="Avatar default" 
      />
    </div>
    <span className="member-name">
      {
        member.id !== 0 ? `${member.firstName} ${member.lastName}` : '[Nombre del miembro]'
      }
    </span>
  </div>
}

export default FormMember