import styled, { keyframes } from "styled-components"

const SpinAnimation = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`

const ScreenLoaderElement = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  z-index: 9998;
`

const Loader = styled.div`
  display: block;
  border: 7px solid #f3f3f3;
  border-top: 7px solid #3498db;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: ${SpinAnimation} 0.7s linear infinite;
`

const H3 = styled.h3`
  color: #cbcaca;
`

const ScreenLoader = () => {
  return <ScreenLoaderElement>
    <Loader></Loader>
    <H3>Cargando elementos. Espere, por favor</H3>
  </ScreenLoaderElement>
}

export default ScreenLoader