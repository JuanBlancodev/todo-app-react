import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faListCheck } from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components'
import useGlobalContext from '../../hooks/useGlobalContext'

import TodoHeaderButtons from './TodoHeaderButtons'

const Header = styled.header`
  padding: var(--padding__header);
  background-color: var(--bg-color__header);
  border-radius: var(--border-radius__container);
`

const HeaderTitle = styled.div`
  width: var(--width__header__title);
  height: 50px;
  font-size: var(--font-size-header__title);
`

const HeaderIcon = styled(FontAwesomeIcon)`
  &.header-icon{
    font-size: var(--font-size-header__icon);
  }
`

const HeaderContainer = () => {
  const { displayTaskCompleted } = useGlobalContext()

  return <Header className="d-flex justify-between">
    <HeaderTitle className="d-flex align-center gap-3">
      <HeaderIcon icon={faListCheck} className='header-icon' />
      <h1>
        { !displayTaskCompleted ? 'Lista de tareas' : 'Tareas completadas' }
      </h1>
    </HeaderTitle>
    <TodoHeaderButtons />
  </Header>
}

export default HeaderContainer