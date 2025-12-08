'use client'

import { LoadingCircle, SpinnerContainer, LoadingText } from './SpinnerStyled'

interface SpinnerProps {
  text?: string
}

const Spinner: React.FC<SpinnerProps> = ({ text = 'Cargando...' }) => {
  return (
    <SpinnerContainer>
      <LoadingCircle />
      {text && <LoadingText>{text}</LoadingText>}
    </SpinnerContainer>
  )
}

export default Spinner
