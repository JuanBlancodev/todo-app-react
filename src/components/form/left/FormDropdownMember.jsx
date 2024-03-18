import { useState } from 'react'
import PropTypes from 'prop-types'
import { URL_AVATAR, THUMBNAIL } from '../../../config/cfg.js'
import useGlobalContext from '../../../hooks/useGlobalContext.js'
import MiniLoader from '../../MiniLoader.jsx'

const FormDropdownMember = ({ member }) => {
  const [imgLoaded, setImgLoaded] = useState()
  const { id, avatar, firstName, lastName } = member
  const { selectMember } = useGlobalContext()

  return <div 
    className="dropdown-item d-flex align-center gap-5" 
    onClick={() => selectMember(id)}>
    { !imgLoaded && <MiniLoader /> }
    <img 
      src={`${URL_AVATAR}${THUMBNAIL}${avatar}`} 
      alt={`${firstName} ${lastName}`} 
      className="img-circle"
      onLoad={() => setImgLoaded(true)}
      style={{display: imgLoaded ? 'initial' : 'none'}} 
    />
    {firstName} {lastName}
  </div>
}

FormDropdownMember.propTypes = { member: PropTypes.object.isRequired }

export default FormDropdownMember