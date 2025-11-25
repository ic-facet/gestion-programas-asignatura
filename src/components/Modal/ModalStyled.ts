import styled from 'styled-components'

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(4px);
  z-index: 1000;
  animation: fadeIn 0.3s ease-out;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`

export const ModalContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90%;
  max-width: 500px;
  background-color: white;
  border-radius: 20px;
  padding: 0;
  z-index: 1001;
  max-height: 80vh;
  overflow-y: auto;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  animation: slideIn 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  @keyframes slideIn {
    from {
      opacity: 0;
      transform: translate(-50%, -50%) scale(0.95);
    }
    to {
      opacity: 1;
      transform: translate(-50%, -50%) scale(1);
    }
  }

  &.resultadosAprendizaje {
    max-width: 900px;
  }

  h2 {
    display: block;
    background: var(--primary-color);
    color: white;
    padding: 18px 24px;
    border-radius: 20px 20px 0 0;
    margin: 0;
    font-size: 18px;
    font-weight: 600;
    letter-spacing: 0.5px;
  }

  textarea {
    width: 100%;
    padding: 12px;
    border: 2px solid #e0e0e0;
    border-radius: 8px;
    font-size: 14px;
    line-height: 1.5;
    resize: vertical;
    transition: border-color 0.3s ease;

    &:focus {
      outline: none;
      border-color: var(--primary-color);
    }
  }

  @media (max-width: 768px) {
    width: 95%;
    max-height: 90vh;
  }
`

export const ModalContent = styled.div`
  padding: 24px;
`

export const ModalFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 16px 24px;
  border-top: 1px solid #f0f0f0;
`
