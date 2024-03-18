import styled, { keyframes } from "styled-components"

const SpinAnimation = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`

const Loader = styled.div`
  display: block;
  border: 3px solid #f3f3f3;
  border-top: 3px solid #3498db;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  animation: ${SpinAnimation} 0.7s linear infinite;
`

const MiniLoader = () => {
  return <Loader />
}

export default MiniLoader