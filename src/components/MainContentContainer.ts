import styled from 'styled-components'

interface MainContentContainerProps {
  $hasNavbar?: boolean
}

export const MainContentContainer = styled.div<MainContentContainerProps>`
  padding-top: ${props => props.$hasNavbar ? '80px' : '0'};
  min-height: 100vh;
`
