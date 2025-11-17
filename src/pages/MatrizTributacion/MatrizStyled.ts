import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 20px;
  background: linear-gradient(135deg, #f5f7fa 0%, #e9ecef 100%);
`

export const Header = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: 40px;
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

export const TableContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08);
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
  background: white;

  thead {
    background: var(--primary-color);

    tr th {
      padding: 18px 20px;
      text-align: left;
      color: white;
      font-weight: 600;
      font-size: 15px;
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
        transform: scale(1.01);
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
  font-size: 24px;
  color: var(--primary-color);
  transition: all 0.3s ease;
  padding: 10px;
  border-radius: 8px;

  &:hover {
    color: var(--secondary-color);
    background: rgba(0, 0, 0, 0.05);
    transform: scale(1.2);
  }

  &:active {
    transform: scale(1.1);
  }

  &.fa-file-excel {
    color: #28a745;
    &:hover {
      color: #218838;
    }
  }
`

export const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 60px 20px;
  color: var(--primary-color);
  font-size: 18px;
  font-weight: 500;

  &::before {
    content: '';
    width: 50px;
    height: 50px;
    border: 4px solid #f3f3f3;
    border-top: 4px solid var(--primary-color);
    border-radius: 50%;
    animation: spin 1s linear infinite;
    margin-bottom: 20px;
  }

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`

export const ErrorContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px 20px;
  background: #fff3cd;
  border: 2px solid #ffc107;
  border-radius: 12px;
  color: #856404;
  font-size: 16px;
  font-weight: 500;
  max-width: 600px;
  margin: 20px auto;
  box-shadow: 0 4px 12px rgba(255, 193, 7, 0.2);

  i {
    margin-right: 12px;
    font-size: 24px;
  }
`
