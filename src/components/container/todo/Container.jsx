import styled from 'styled-components'
import Header from './Header'
import Card from './Card/Card'

const Section = styled.section`
  width: var(--width__container);
  background-color: var(--bg-color__container);
  border-radius: var(--border-radius__container);
  box-sizing: border-box;
`

const ContainerTodo = () => {
  return <Section className="container__todo">
    <Header />
    <Card />
  </Section>
}

export default ContainerTodo