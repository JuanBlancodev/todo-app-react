import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faListCheck, faPlus } from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components'

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
  return <Header className="d-flex justify-between">
    <HeaderTitle className="d-flex align-center gap-3">
      <HeaderIcon icon={faListCheck} className='header-icon' />
      <h1>Lista de tareas</h1>
    </HeaderTitle>
    <div className="header__button d-flex align-center">
      <button id="btn__newTask" className="d-flex align-center justify-center gap-1 btn btn-primary color-white font-bold">
        <FontAwesomeIcon icon={faPlus} />
        Nueva tarea
      </button>
    </div>
  </Header>
}

export default HeaderContainer