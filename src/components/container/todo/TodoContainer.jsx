import styled from 'styled-components'
import TodoHeader from './TodoHeader'
import Card from './Card/Card'

const Section = styled.section`
  width: var(--width__container);
  background-color: var(--bg-color__container);
  border-radius: var(--border-radius__container);
  box-sizing: border-box;
`

const TodoContainer = () => {
  return <Section className="container__todo">
    <TodoHeader />
    <Card />
  </Section>
}

export default TodoContainer