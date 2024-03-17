import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import useGlobalContext from '../../../../hooks/useGlobalContext'
import { URL_AVATAR, THUMBNAIL } from '../../../../config/cfg'

const TaskMember = ({ memberId }) => {
  const [member, setMember] = useState(undefined)
  const { findMemberById } = useGlobalContext()

  useEffect(() => {
    const memberFound = findMemberById(memberId)
    setMember(memberFound)
  }, [memberId, findMemberById])

  if(member === undefined){
    return null
  }

  return (
    <td className="table__cell d-flex align-center gap-3 font-bold">
      <img src={`${URL_AVATAR}${THUMBNAIL}${member.avatar}`} 
        alt={`${member.firstName} ${member.lastName}`} 
        className="img-circle" 
      />
      <span className="table__cell--name font-size-1">{member.firstName} {member.lastName}</span>
    </td>
  )
}

TaskMember.propTypes = { memberId: PropTypes.number.isRequired }

export default TaskMember