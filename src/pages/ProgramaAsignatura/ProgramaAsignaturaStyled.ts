import styled from 'styled-components'

export const Container = styled.section`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 20px 40px;
  background: linear-gradient(135deg, #f5f7fa 0%, #e9ecef 100%);
`

export const HeaderSection = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;
  animation: fadeIn 0.6s ease-out;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`

export const BackButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  margin-bottom: 20px;

  button {
    background: linear-gradient(135deg, var(--primary-color) 0%, #1a4d6d 100%);
    color: white;
    border: none;
    border-radius: 12px;
    padding: 12px 24px;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: 0 4px 12px rgba(45, 102, 157, 0.3);
    text-transform: uppercase;
    letter-spacing: 0.5px;

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 20px rgba(45, 102, 157, 0.4);
      background: linear-gradient(
        135deg,
        #1a4d6d 0%,
        var(--primary-color) 100%
      );
    }

    &:active {
      transform: translateY(0);
      box-shadow: 0 2px 8px rgba(45, 102, 157, 0.3);
    }
  }
`

export const ContentSection = styled.div`
  width: 100%;
  max-width: 1200px;
  background: white;
  border-radius: 24px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08);
  padding: 40px;
  animation: slideUp 0.6s ease-out;

  @keyframes slideUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (max-width: 768px) {
    padding: 20px;
    border-radius: 15px;
  }
`
