import styled, { keyframes } from 'styled-components'

const float = keyframes`
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-25px) rotate(2deg); }
`

const slideInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`

const gradientMove = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`

const pulse = keyframes`
  0%, 100% { opacity: 0.5; transform: scale(1); }
  50% { opacity: 0.8; transform: scale(1.05); }
`

export const Container = styled.div`
  min-height: 100vh;
  width: 100vw;
  background: linear-gradient(
    -45deg,
    var(--secondary-color),
    var(--primary-color),
    #1a4d6d,
    var(--third-color)
  );
  background-size: 400% 400%;
  animation: ${gradientMove} 15s ease infinite;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: -30%;
    right: -10%;
    width: 600px;
    height: 600px;
    background: rgba(255, 255, 255, 0.06);
    border-radius: 50%;
    animation: ${float} 8s ease-in-out infinite;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -20%;
    left: -8%;
    width: 500px;
    height: 500px;
    background: rgba(255, 255, 255, 0.04);
    border-radius: 50%;
    animation: ${float} 10s ease-in-out infinite reverse;
  }
`

export const Card = styled.div`
  position: relative;
  width: 100%;
  max-width: 520px;
  padding: 60px 48px 48px;
  background: rgba(255, 255, 255, 0.97);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-radius: 28px;
  box-shadow:
    0 25px 80px rgba(0, 0, 0, 0.2),
    0 10px 30px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  z-index: 1;
  animation: ${slideInUp} 0.8s cubic-bezier(0.4, 0, 0.2, 1);
  border: 1px solid rgba(255, 255, 255, 0.5);
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 28px 24px 24px;
    max-width: 95%;
    border-radius: 20px;
  }
`

export const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 24px;
  margin-bottom: 16px;

  @media (max-width: 768px) {
    gap: 20px;
    margin-bottom: 12px;
  }
`

export const LogoUNT = styled.img`
  height: 70px;
  filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.1));
  transition: transform 0.3s ease;
  background: white;
  padding: 8px;
  border-radius: 8px;

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
  background: white;
  padding: 8px;
  border-radius: 8px;

  &:hover {
    transform: scale(1.08);
  }

  @media (max-width: 768px) {
    height: 55px;
  }
`

export const InstitucionalBadge = styled.div`
  display: inline-flex;
  align-items: center;
  padding: 8px 20px;
  background: linear-gradient(
    135deg,
    rgba(45, 102, 157, 0.1) 0%,
    rgba(26, 77, 109, 0.1) 100%
  );
  border: 1px solid rgba(45, 102, 157, 0.2);
  border-radius: 50px;
  font-size: 13px;
  font-weight: 600;
  color: var(--primary-color);
  letter-spacing: 1px;
  text-transform: uppercase;
  margin-bottom: 16px;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.4),
      transparent
    );
    transition: left 0.5s ease;
  }

  &:hover::before {
    left: 100%;
  }

  @media (max-width: 768px) {
    font-size: 12px;
    padding: 6px 16px;
    margin-bottom: 8px;
  }
`

export const SistemaNombre = styled.h1`
  font-size: 48px;
  font-weight: 800;
  color: var(--primary-color);
  margin: 0 0 8px 0;
  text-align: center;
  letter-spacing: 2px;
  text-transform: uppercase;
  line-height: 1.1;
  text-shadow: 0 2px 10px rgba(45, 102, 157, 0.15);

  @media (max-width: 768px) {
    font-size: 36px;
    letter-spacing: 1px;
    margin-bottom: 4px;
  }
`

export const SistemaDescripcion = styled.h2`
  font-size: 18px;
  font-weight: 600;
  color: #475569;
  margin: 0 0 20px 0;
  text-align: center;
  letter-spacing: 0.3px;
  line-height: 1.4;

  @media (max-width: 768px) {
    font-size: 14px;
    margin-bottom: 8px;
  }
`

export const LoginSubtitle = styled.p`
  font-size: 14px;
  color: #64748b;
  margin: 0 0 24px 0;
  text-align: center;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 13px;
    margin-bottom: 16px;
  }
`

export const Text = styled.p`
  width: 100%;
  color: #64748b;
  font-size: 15px;
  text-align: center;
  padding: 20px 0;
  line-height: 1.7;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 13px;
    padding: 8px 0;
    line-height: 1.4;
  }
`

export const LoginButton = styled.button<{ $isDev?: boolean }>`
  color: ${(props) => (props.$isDev ? 'white' : 'black')};
  background: ${(props) =>
    props.$isDev
      ? 'linear-gradient(135deg, #ff9800 0%, #f57c00 100%)'
      : 'linear-gradient(135deg, #ffffff 0%, #f5f5f5 100%)'};
  padding: 16px 28px;
  text-align: center;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  border: 2px solid ${(props) => (props.$isDev ? '#ff9800' : '#e0e0e0')};
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  font-size: 15px;
  font-weight: 600;
  gap: 12px;
  min-width: 300px;
  width: 100%;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
    border-color: ${(props) =>
      props.$isDev ? '#e65100' : 'var(--primary-color)'};
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
  margin: 16px 0;
  color: #94a3b8;
  font-size: 13px;
  font-weight: 500;
  position: relative;
  width: 100%;
  text-align: center;

  &::before,
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    width: 40%;
    height: 1px;
    background: linear-gradient(to right, transparent, #cbd5e1, transparent);
  }

  &::before {
    left: 0;
  }

  &::after {
    right: 0;
  }
`

export const BackButton = styled.button`
  position: fixed;
  top: 24px;
  left: 24px;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px 20px;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: none;
  border-radius: 12px;
  color: var(--primary-color);
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 1000;
  text-decoration: none;

  i {
    font-size: 16px;
    transition: transform 0.3s ease;
  }

  &:hover {
    transform: translateX(-4px);
    box-shadow: 0 6px 25px rgba(0, 0, 0, 0.2);
    background: white;

    i {
      transform: translateX(-3px);
    }
  }

  &:active {
    transform: translateX(-2px) scale(0.98);
  }

  @media (max-width: 768px) {
    top: 16px;
    left: 16px;
    padding: 10px 16px;
    font-size: 13px;

    span {
      display: none;
    }

    i {
      font-size: 18px;
    }
  }
`

export const ProfileImage = styled.div`
  height: 100px;
  width: 100px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
    135deg,
    var(--primary-color) 0%,
    var(--secondary-color) 100%
  );
  box-shadow: 0 15px 40px rgba(45, 102, 157, 0.3);
  margin-bottom: 20px;
  transition: transform 0.3s ease;
  animation: ${pulse} 4s ease-in-out infinite;

  &:hover {
    transform: scale(1.05) rotate(5deg);
  }

  i {
    font-size: 50px;
    color: white;
  }

  @media (max-width: 768px) {
    height: 80px;
    width: 80px;
    margin-bottom: 12px;

    i {
      font-size: 40px;
    }
  }
`

export const AccionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  padding: 24px;
  background: linear-gradient(
    135deg,
    rgba(45, 102, 157, 0.05) 0%,
    rgba(26, 77, 109, 0.05) 100%
  );
  border-radius: 16px;
  border: 1px solid rgba(45, 102, 157, 0.1);
  margin: 16px 0 24px;
  width: 100%;

  @media (max-width: 768px) {
    padding: 12px;
    gap: 8px;
    margin: 8px 0 12px;
  }
`

// Legacy exports for backward compatibility
export const LoginTitle = styled(SistemaNombre)``
export const LoginH3 = styled(LoginSubtitle)``
