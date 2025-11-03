import styled from 'styled-components'

export const Container = styled.div`
  min-height: 100vh;
  width: 100vw;
  background: linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: -20%;
    right: -10%;
    width: 600px;
    height: 600px;
    background: rgba(255, 255, 255, 0.08);
    border-radius: 50%;
    animation: float 8s ease-in-out infinite;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -25%;
    left: -8%;
    width: 500px;
    height: 500px;
    background: rgba(255, 255, 255, 0.05);
    border-radius: 50%;
    animation: float 10s ease-in-out infinite reverse;
  }

  @keyframes float {
    0%, 100% { transform: translateY(0px) rotate(0deg); }
    50% { transform: translateY(-30px) rotate(5deg); }
  }
`

export const Card = styled.div`
  position: relative;
  width: 100%;
  max-width: 550px;
  padding: 100px 50px 50px;
  background: rgba(255, 255, 255, 0.98);
  backdrop-filter: blur(20px);
  border-radius: 30px;
  box-shadow: 0 30px 80px rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  z-index: 1;
  animation: slideUp 0.6s ease-out;

  @keyframes slideUp {
    from {
      opacity: 0;
      transform: translateY(40px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (max-width: 768px) {
    padding: 90px 30px 40px;
    max-width: 95%;
  }
`

export const ProfileImage = styled.div`
  position: absolute;
  height: 140px;
  width: 140px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.25);
  top: -70px;
  z-index: 2;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05) rotate(5deg);
  }

  i {
    font-size: 75px;
    color: white;
  }

  @media (max-width: 768px) {
    height: 120px;
    width: 120px;
    top: -60px;

    i {
      font-size: 65px;
    }
  }
`

export const LogoContainer = styled.div`
  position: absolute;
  top: 20px;
  display: flex;
  justify-content: space-between;
  width: calc(100% - 40px);
  z-index: 3;
`

export const LogoUNT = styled.img`
  height: 70px;
  filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.1));
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    height: 55px;
  }
`

export const LogoFACET = styled.img`
  height: 70px;
  filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.1));
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    height: 55px;
  }
`

export const LoginTitle = styled.h1`
  margin-top: 25px;
  font-size: 26px;
  font-weight: 700;
  text-align: center;
  width: 90%;
  color: var(--primary-color);
  line-height: 1.3;
  letter-spacing: 0.5px;

  @media (max-width: 768px) {
    font-size: 22px;
  }
`

export const LoginSubtitle = styled.h2`
  margin-top: 15px;
  text-align: center;
  color: var(--dark-color);
  width: 85%;
  font-size: 20px;
  font-weight: 600;
  line-height: 1.4;

  @media (max-width: 768px) {
    font-size: 18px;
  }
`

export const LoginH3 = styled.h3`
  font-size: 16px;
  text-align: center;
  font-weight: 500;
  width: 80%;
  color: #555;
  margin-top: 8px;

  @media (max-width: 768px) {
    font-size: 15px;
  }
`

export const Text = styled.p`
  width: 85%;
  color: #666;
  font-size: 15px;
  text-align: center;
  padding: 30px 0;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 25px 0;
  }
`

export const LoginButton = styled.button<{ $isDev?: boolean }>`
  color: ${props => props.$isDev ? 'white' : 'black'};
  background-color: ${props => props.$isDev ? '#ff9800' : 'white'};
  padding: 14px 24px;
  text-align: center;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  border: 2px solid ${props => props.$isDev ? '#f57c00' : '#ddd'};
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  font-size: 15px;
  font-weight: 500;
  gap: 12px;
  min-width: 280px;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
    border-color: ${props => props.$isDev ? '#e65100' : 'var(--primary-color)'};
  }

  &:active {
    transform: translateY(-1px);
  }

  img {
    height: 22px;
    width: 22px;
  }

  p {
    margin: 0;
    padding: 0;
  }

  @media (max-width: 768px) {
    min-width: 250px;
    padding: 12px 20px;
    font-size: 14px;
  }
`

export const Divider = styled.div`
  margin: 15px 0;
  color: #999;
  font-size: 14px;
  font-weight: 500;
  position: relative;
  width: 60%;
  text-align: center;

  &::before,
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    width: 40%;
    height: 1px;
    background: linear-gradient(to right, transparent, #ddd, transparent);
  }

  &::before {
    left: 0;
  }

  &::after {
    right: 0;
  }
`
