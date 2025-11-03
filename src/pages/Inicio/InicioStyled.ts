import styled from 'styled-components'

export const Portada = styled.div`
  width: 100%;
  background: linear-gradient(135deg, var(--secondary-color) 0%, var(--primary-color) 100%);
  min-height: 450px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 60px 20px;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: -50%;
    right: -10%;
    width: 500px;
    height: 500px;
    background: rgba(255, 255, 255, 0.05);
    border-radius: 50%;
    animation: float 6s ease-in-out infinite;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -30%;
    left: -5%;
    width: 400px;
    height: 400px;
    background: rgba(255, 255, 255, 0.03);
    border-radius: 50%;
    animation: float 8s ease-in-out infinite reverse;
  }

  @keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-20px); }
  }
`

export const Division = styled.div`
  width: 100%;
  padding: 24px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--primary-color);
  color: white;
  font-weight: 600;
  letter-spacing: 2px;
  font-size: 18px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 3px;
    background: white;
    border-radius: 2px;
  }
`

export const SeccionFuncionalidades = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 60px 20px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 40px;
  align-items: stretch;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 40px 20px;
  }
`

export const Funcionalidad = styled.div`
  position: relative;
  border-radius: 20px;
  padding: 40px 30px;
  background: white;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  border: 1px solid rgba(0, 0, 0, 0.05);
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, var(--primary-color), var(--secondary-color));
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  }

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);

    &::before {
      transform: scaleX(1);
    }
  }
`

export const TituloFuncionalidad = styled.h1`
  width: 100%;
  text-align: center;
  font-size: 22px;
  padding: 20px 0 10px;
  color: var(--primary-color);
  font-weight: 600;
  letter-spacing: 0.5px;
  margin: 0;
  text-transform: capitalize;
`

export const IconoFuncionalidad = styled.div`
  height: 80px;
  width: 80px;
  background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
  color: white;
  border-radius: 20px;
  margin: 0 auto 20px;
  font-size: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
  transition: all 0.3s ease;

  ${Funcionalidad}:hover & {
    transform: rotateY(360deg);
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.2);
  }
`

export const DescripcionFuncionalidad = styled.div`
  padding: 10px 5px;
  font-size: 15px;
  letter-spacing: 0.3px;
  line-height: 24px;
  text-align: center;
  color: #555;
`

export const TextoBienvenidaContainer = styled.div`
  max-width: 550px;
  padding: 50px 40px;
  border-radius: 24px;
  display: flex;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 50px 0 auto;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);
  position: relative;
  z-index: 1;
  animation: slideIn 0.6s ease-out;

  @keyframes slideIn {
    from {
      opacity: 0;
      transform: translateX(30px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @media (max-width: 768px) {
    margin: 0 20px;
    padding: 40px 30px;
  }
`

export const LogoFacet = styled.img`
  height: 100px;
  margin-bottom: 20px;
  filter: drop-shadow(0 4px 12px rgba(0, 0, 0, 0.15));
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    height: 80px;
    margin-bottom: 15px;
  }
`
