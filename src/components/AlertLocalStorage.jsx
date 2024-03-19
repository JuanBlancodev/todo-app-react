import PropTypes from 'prop-types'
import styled from 'styled-components'

const Div = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 50px;
  background-color: #2b2828;
  padding: 10px;
  text-align: center;
  border-top: 1px solid #ccc;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px 0;
`

const H1 = styled.h1`
  font-size: 1rem;
  font-weigth: bold;
  font-family: 'Arial', sans-serif;
`
const Button = styled.button`
  width: 200px;
  font-size: 18px;
`

const AlertLocalStorage = ({ handleCookie }) => {
  return (
    <Div>
      <H1>Esta aplicación está usando el almacenamiento local para guardar las tareas</H1>
      <Button className="btn btn-primary" onClick={() => handleCookie()}>Aceptar</Button>
    </Div>
  )
}

AlertLocalStorage.propTypes = { handleCookie: PropTypes.func.isRequired }

export default AlertLocalStorage