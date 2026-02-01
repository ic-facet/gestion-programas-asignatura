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

export const Content = styled.div`
  width: 100%;
  max-width: 1400px;
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

export const TableWrapper = styled.article`
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08);
  margin-top: 30px;
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
    border-radius: 15px;
  }
`

export const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
  min-width: 800px;
  background: white;

  thead {
    background: var(--primary-color);

    tr th {
      padding: 18px 20px;
      text-align: left;
      color: white;
      font-weight: 600;
      font-size: 14px;
      letter-spacing: 0.5px;
      text-transform: uppercase;
      border: none;

      &:first-child {
        border-radius: 12px 0 0 0;
      }

      &:last-child {
        border-radius: 0 12px 0 0;
        text-align: center;
      }
    }
  }

  tbody {
    tr {
      transition: all 0.3s ease;

      &:hover {
        background: #f8f9fa;
        transform: scale(1.005);
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
      }

      td {
        padding: 20px;
        color: #333;
        font-size: 14px;
        border: none;

        &#column-acciones {
          text-align: center;
        }
      }
    }
  }

  @media (max-width: 768px) {
    font-size: 13px;

    thead tr th,
    tbody tr td {
      padding: 12px 10px;
    }
  }
`

export const ActionIcon = styled.i`
  cursor: pointer;
  font-size: 20px;
  margin: 0 8px;
  padding: 10px;
  border-radius: 8px;
  transition: all 0.3s ease;
  color: var(--primary-color);

  &:hover {
    background: rgba(0, 0, 0, 0.05);
    transform: scale(1.2);
    color: var(--secondary-color);
  }

  &:active {
    transform: scale(1.1);
  }

  &.fa-eye {
    color: #17a2b8;
    &:hover {
      color: #138496;
    }
  }

  &.fa-print {
    color: #6c757d;
    &:hover {
      color: #5a6268;
    }
  }
`

export const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 80px 20px;
  min-height: 400px;
`

export const EmptyRow = styled.tr`
  td {
    text-align: center !important;
    padding: 60px 20px !important;
    color: #666;
    font-size: 16px;
    font-weight: 500;

    i {
      display: block;
      font-size: 48px;
      margin-bottom: 16px;
      color: #ccc;
    }
  }
`

export const ErrorRow = styled.tr`
  td {
    text-align: center !important;
    padding: 60px 20px !important;
    background: #fff3cd !important;
    color: #856404;
    font-size: 16px;
    font-weight: 500;

    i {
      display: block;
      font-size: 48px;
      margin-bottom: 16px;
      color: #ffc107;
    }
  }
`

export const HeaderSection = styled.div`
  width: 100%;
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
