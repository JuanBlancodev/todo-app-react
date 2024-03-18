import { useState, useEffect } from 'react'
import useGlobalContext from '../../../hooks/useGlobalContext'
import { URL_AVATAR, URL_AVATAR_DEFAULT } from '../../../config/cfg'
import MiniLoader from '../../MiniLoader'

const FormMember = () => {
  const [imgLoaded, setImgLoaded] = useState(false)
  const [member, setMember] = useState(undefined)
  const { findMemberById, formState } = useGlobalContext()

  useEffect(() => {
    const memberFound = findMemberById(formState.memberId)
    setMember(memberFound)
  }, [findMemberById, formState.memberId])

  return <div className="form__member d-flex align-center flex-column gap-3">
    <div className="avatar d-flex align-center justify-center">
      { !imgLoaded && <MiniLoader /> }
      <img 
        src={member !== undefined ? `${URL_AVATAR}${member.avatar}` : `${URL_AVATAR_DEFAULT}`} 
        alt="Avatar default"
        onLoad={() => setImgLoaded(true)}
        style={{display: imgLoaded ? 'initial' : 'none'}}
      />
    </div>
    <span className="member-name">
      { member !== undefined ? `${member.firstName} ${member.lastName}` : '[Nombre del miembro]' }
    </span>
  </div>
}

export default FormMember