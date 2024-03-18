import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import useGlobalContext from '../../../../hooks/useGlobalContext'
import { URL_AVATAR, THUMBNAIL } from '../../../../config/cfg'
import MiniLoader from '../../../MiniLoader'

const TaskMember = ({ memberId }) => {
  const [imgLoaded, setImgLoaded] = useState(false)
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
      { !imgLoaded && <MiniLoader /> }
      <img src={`${URL_AVATAR}${THUMBNAIL}${member.avatar}`} 
        alt={`${member.firstName} ${member.lastName}`} 
        className="img-circle"
        onLoad={() => setImgLoaded(true)}
        style={{display: imgLoaded ? 'initial' : 'none'}}
      />
      <span className="table__cell--name font-size-1">{member.firstName} {member.lastName}</span>
    </td>
  )
}

TaskMember.propTypes = { memberId: PropTypes.number.isRequired }

export default TaskMember