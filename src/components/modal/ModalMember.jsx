import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'
import useGlobalContext from '../../hooks/useGlobalContext'
import { URL_AVATAR } from '../../config/cfg'

const ModalMember = ({ memberId }) => {
  const [member, setMember] = useState(undefined)
  const { findMemberById } = useGlobalContext()

  useEffect(() => {
    const memberFound = findMemberById(memberId)
    setMember(memberFound)
  }, [findMemberById, memberId]);

  if(member === undefined){
    return null
  }

  return <div className="form__member d-flex align-center flex-column gap-3">
    <div className="avatar">
      <img src={`${URL_AVATAR}${member.avatar}`} />
    </div>
    <span className="member-name">
      { member.firstName } {member.lastName}
    </span>
  </div>
}

ModalMember.propTypes = { memberId: PropTypes.number.isRequired }

export default ModalMember