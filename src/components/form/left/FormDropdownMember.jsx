import PropTypes from 'prop-types'
import { URL_AVATAR, THUMBNAIL } from '../../../config/cfg.js'
import useGlobalContext from '../../../hooks/useGlobalContext.js'

const FormDropdownMember = ({ member }) => {
  const { avatar, firstName, lastName } = member
  const { changeMemberData } = useGlobalContext()

  return <div 
    className="dropdown-item d-flex align-center gap-5" 
    onClick={() => changeMemberData(member)}>
    <img src={`${URL_AVATAR}${THUMBNAIL}${avatar}`} alt={`${firstName} ${lastName}`} className="img-circle" />
      {firstName} {lastName}
  </div>
}

FormDropdownMember.propTypes = { member: PropTypes.object.isRequired }

export default FormDropdownMember