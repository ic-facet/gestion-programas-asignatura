import styled from 'styled-components'

export const Titulo = styled.h1`
  color: var(--primary-color);
  font-size: 32px;
  width: 100%;
  text-align: center;
  box-sizing: border-box;
  margin: 10px 0 20px;
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: 1.5px;
  position: relative;
  padding-bottom: 15px;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 4px;
    background: linear-gradient(90deg, var(--primary-color), var(--third-color));
    border-radius: 2px;
  }

  @media (max-width: 768px) {
    font-size: 26px;
  }
`

export const Subtitulo = styled.h2`
  color: var(--third-color);
  text-align: center;
  font-size: 22px;
  margin: -10px 0 10px;
  text-transform: uppercase;
  font-weight: 500;
  letter-spacing: 1px;

  @media (max-width: 768px) {
    font-size: 18px;
  }
`

export const TituloSeccion = styled.h3`
  color: white;
  font-size: 18px;
  text-align: center;
  width: 100%;
  background: var(--primary-color);
  box-sizing: border-box;
  padding: 14px 20px;
  text-transform: uppercase;
  margin: 0;
  font-weight: 600;
  letter-spacing: 0.8px;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(45, 102, 157, 0.3);

  @media (max-width: 768px) {
    font-size: 16px;
    padding: 12px 15px;
  }
`
