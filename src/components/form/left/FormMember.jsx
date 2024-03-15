import { URL_AVATAR_DEFAULT } from '../../../config/cfg'

const FormMember = () => {
  return <div className="form__member d-flex align-center flex-column gap-3">
    <div className="avatar">
      <img src={URL_AVATAR_DEFAULT} alt="Avatar default" />
    </div>
    <span className="member-name">[Nombre del miembro]</span>
  </div>
}

export default FormMember