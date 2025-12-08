import styled from 'styled-components'

export const SeccionFormulario = styled.section`
  width: 90%;
  max-width: 1200px;
  padding: 0;
  margin-bottom: 24px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: white;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  overflow: hidden;

  &.resultado-aprendizaje-text {
    width: 100%;
    min-height: 100px;
    padding: 8px;
    overflow-y: hidden;
    resize: none;
  }

  /* Contenido interno con padding */
  & > form {
    padding: 24px 32px 32px;
    width: 100%;
    box-sizing: border-box;
  }

  @media (max-width: 768px) {
    width: 95%;
    border-radius: 12px;

    & > form {
      padding: 16px 20px 24px;
    }
  }
`

export const InputOutsideContainer = styled.div`
  width: 100%;

  @media (min-width: 1100px) {
    width: 48%;
  }
`

export const WholeWidthInputContainer = styled.div`
  width: 100%;
`

export const BotonAgregarCorrelativa = styled.button`
  width: 100%;
  padding: 5px 10px;
  border: none;
  box-sizing: border-box;
  cursor: pointer;
  color: var(--primary-color);
  background-color: var(--secondary-color);

  margin-bottom: 5px;
  &:hover {
    background-color: var(--primary-color);
    color: white;
  }
`

export const ModalSeleccionCorrelativa = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 15px 10px;
`
