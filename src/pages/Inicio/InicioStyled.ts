import styled, { keyframes } from 'styled-components'

const float = keyframes`
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-25px) rotate(2deg); }
`

const pulse = keyframes`
  0%, 100% { opacity: 0.5; transform: scale(1); }
  50% { opacity: 0.8; transform: scale(1.05); }
`

const slideInRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(40px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
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

export const Portada = styled.div`
  width: 100%;
  background: linear-gradient(-45deg, var(--secondary-color), var(--primary-color), #1a4d6d, var(--third-color));
  background-size: 400% 400%;
  animation: ${gradientMove} 15s ease infinite;
  min-height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 80px 20px;
  overflow: hidden;
  margin-top: 64px;

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

export const Division = styled.div`
  width: 100%;
  padding: 28px 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, var(--primary-color) 0%, #1a4d6d 100%);
  color: white;
  font-weight: 600;
  letter-spacing: 3px;
  font-size: 16px;
  text-transform: uppercase;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.15);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent);
    animation: shimmer 3s ease-in-out infinite;
  }

  @keyframes shimmer {
    0% { left: -100%; }
    50%, 100% { left: 100%; }
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 3px;
    background: linear-gradient(90deg, transparent, white, transparent);
    border-radius: 2px;
  }

  @media (max-width: 768px) {
    font-size: 14px;
    letter-spacing: 2px;
    padding: 24px 15px;
  }
`

export const SeccionFuncionalidades = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 80px 40px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
  gap: 40px;
  align-items: stretch;
  background: linear-gradient(180deg, #f8fafc 0%, #ffffff 100%);

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 50px 20px;
    gap: 30px;
  }
`

export const Funcionalidad = styled.div`
  position: relative;
  border-radius: 24px;
  padding: 48px 36px;
  background: white;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  border: 1px solid rgba(0, 0, 0, 0.04);
  overflow: hidden;
  cursor: pointer;
  animation: ${slideInUp} 0.6s ease-out backwards;

  &:nth-child(1) { animation-delay: 0.1s; }
  &:nth-child(2) { animation-delay: 0.2s; }
  &:nth-child(3) { animation-delay: 0.3s; }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 5px;
    background: linear-gradient(90deg, var(--primary-color), var(--third-color), var(--secondary-color));
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -50%;
    right: -50%;
    width: 200px;
    height: 200px;
    background: radial-gradient(circle, var(--secondary-color) 0%, transparent 70%);
    opacity: 0;
    transition: opacity 0.5s ease, transform 0.5s ease;
    pointer-events: none;
  }

  &:hover {
    transform: translateY(-12px) scale(1.02);
    box-shadow:
      0 25px 60px rgba(45, 102, 157, 0.15),
      0 10px 20px rgba(0, 0, 0, 0.08);

    &::before {
      transform: scaleX(1);
    }

    &::after {
      opacity: 0.15;
      transform: translate(-20%, -20%);
    }
  }

  &:active {
    transform: translateY(-8px) scale(1.01);
  }

  @media (max-width: 768px) {
    padding: 36px 28px;
  }
`

export const TituloFuncionalidad = styled.h1`
  width: 100%;
  text-align: center;
  font-size: 20px;
  padding: 16px 0 8px;
  color: var(--primary-color);
  font-weight: 700;
  letter-spacing: 0.3px;
  margin: 0;
  line-height: 1.3;
`

export const IconoFuncionalidad = styled.div`
  height: 88px;
  width: 88px;
  background: linear-gradient(135deg, var(--primary-color) 0%, #1a4d6d 100%);
  color: white;
  border-radius: 24px;
  margin: 0 auto 24px;
  font-size: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow:
    0 10px 30px rgba(45, 102, 157, 0.25),
    inset 0 -2px 10px rgba(0, 0, 0, 0.1);
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
    transition: left 0.5s ease;
  }

  ${Funcionalidad}:hover & {
    transform: scale(1.1) rotate(-5deg);
    box-shadow:
      0 15px 40px rgba(45, 102, 157, 0.35),
      inset 0 -2px 10px rgba(0, 0, 0, 0.1);

    &::before {
      left: 100%;
    }
  }

  i {
    z-index: 1;
    transition: transform 0.3s ease;
  }

  ${Funcionalidad}:hover & i {
    transform: scale(1.1);
  }
`

export const DescripcionFuncionalidad = styled.div`
  padding: 12px 8px;
  font-size: 15px;
  letter-spacing: 0.2px;
  line-height: 1.7;
  text-align: center;
  color: #64748b;

  b {
    color: var(--primary-color);
  }
`

export const TextoBienvenidaContainer = styled.div`
  max-width: 580px;
  padding: 56px 48px;
  border-radius: 28px;
  display: flex;
  background: rgba(255, 255, 255, 0.97);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 60px 0 auto;
  box-shadow:
    0 25px 80px rgba(0, 0, 0, 0.2),
    0 10px 30px rgba(0, 0, 0, 0.1);
  position: relative;
  z-index: 1;
  animation: ${slideInRight} 0.8s cubic-bezier(0.4, 0, 0.2, 1);
  border: 1px solid rgba(255, 255, 255, 0.5);

  &::before {
    content: '';
    position: absolute;
    top: -1px;
    left: -1px;
    right: -1px;
    bottom: -1px;
    border-radius: 29px;
    background: linear-gradient(135deg, rgba(255,255,255,0.5), transparent);
    z-index: -1;
    pointer-events: none;
  }

  @media (max-width: 1024px) {
    margin: 0 auto;
  }

  @media (max-width: 768px) {
    margin: 0 20px;
    padding: 40px 28px;
    border-radius: 24px;
  }
`

export const LogoFacet = styled.img`
  height: 110px;
  margin-bottom: 24px;
  filter: drop-shadow(0 6px 20px rgba(0, 0, 0, 0.15));
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  animation: ${pulse} 4s ease-in-out infinite;

  &:hover {
    transform: scale(1.08) rotate(-2deg);
    filter: drop-shadow(0 8px 25px rgba(0, 0, 0, 0.2));
  }

  @media (max-width: 768px) {
    height: 90px;
    margin-bottom: 20px;
  }
`

export const WelcomeTitle = styled.h1`
  font-size: 28px;
  font-weight: 700;
  color: var(--primary-color);
  margin: 0 0 8px 0;
  text-align: center;
  letter-spacing: 0.5px;

  @media (max-width: 768px) {
    font-size: 24px;
  }
`

export const WelcomeSubtitle = styled.p`
  font-size: 16px;
  color: #64748b;
  margin: 0 0 24px 0;
  text-align: center;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 15px;
  }
`

export const StatsContainer = styled.div`
  display: flex;
  gap: 32px;
  margin-top: 32px;
  padding-top: 24px;
  border-top: 1px solid rgba(0, 0, 0, 0.08);
  width: 100%;
  justify-content: center;

  @media (max-width: 480px) {
    gap: 20px;
    flex-direction: column;
    align-items: center;
  }
`

export const StatItem = styled.div`
  text-align: center;

  span {
    display: block;
    font-size: 28px;
    font-weight: 700;
    color: var(--primary-color);
    line-height: 1.2;
  }

  small {
    font-size: 12px;
    color: #94a3b8;
    text-transform: uppercase;
    letter-spacing: 1px;
  }
`
