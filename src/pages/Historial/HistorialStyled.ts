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

export const FilterSection = styled.section`
  background: white;
  border-radius: 20px;
  padding: 32px 36px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08);
  margin-top: 30px;
  animation: slideUp 0.5s ease-out;
  border: 1px solid rgba(0, 0, 0, 0.04);

  @keyframes slideUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (max-width: 768px) {
    padding: 24px 20px;
  }
`

export const FilterTitle = styled.h2`
  color: white;
  font-size: 16px;
  text-align: center;
  width: 100%;
  background: var(--primary-color);
  padding: 12px 20px;
  text-transform: uppercase;
  margin: 0 0 25px 0;
  border-radius: 12px;
  font-weight: 600;
  letter-spacing: 1px;
  box-shadow: 0 4px 12px rgba(45, 102, 157, 0.3);
`

export const FilterGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  margin-bottom: 25px;

  /* Cada filtro */
  .filter-item {
    display: flex;
    flex-direction: column;
    background: #f8fafc;
    border-radius: 12px;
    padding: 16px;
    border: 1px solid #e2e8f0;
    transition: all 0.2s ease;

    &:hover {
      border-color: rgba(45, 102, 157, 0.3);
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
    }

    .filter-label {
      display: block;
      font-size: 12px;
      font-weight: 700;
      color: var(--primary-color);
      text-transform: uppercase;
      letter-spacing: 1px;
      margin-bottom: 10px;
    }
  }

  /* Fallback para el dropdown viejo */
  > div:not(.filter-item) {
    display: flex !important;
    flex-direction: column !important;
    align-items: stretch !important;
    box-shadow: none !important;
    border: none !important;
    margin: 0 !important;
    background: #f8fafc;
    border-radius: 12px;
    padding: 16px;
    border: 1px solid #e2e8f0;

    > span {
      display: block !important;
      width: auto !important;
      min-width: unset !important;
      text-align: left !important;
      font-size: 12px !important;
      font-weight: 700 !important;
      color: var(--primary-color) !important;
      background: transparent !important;
      border-radius: 0 !important;
      padding: 0 0 8px 0 !important;
      margin: 0 !important;
      text-transform: uppercase !important;
      letter-spacing: 1px !important;
    }

    > div {
      width: 100% !important;
      border-radius: 10px !important;
      border: none !important;
      box-shadow: none !important;
      overflow: hidden;

      select {
        padding: 14px 44px 14px 16px !important;
        font-size: 14px !important;
        min-height: 48px !important;
        border-radius: 10px !important;
        background-color: white !important;
        border: 2px solid #e2e8f0 !important;
        width: 100% !important;
        cursor: pointer;

        &:hover:not(:disabled) {
          border-color: var(--primary-color) !important;
        }

        &:focus {
          border-color: var(--primary-color) !important;
          box-shadow: 0 0 0 3px rgba(45, 102, 157, 0.12) !important;
          outline: none !important;
        }
      }
    }
  }

  @media (max-width: 900px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    gap: 16px;
  }
`

export const FilterButton = styled.button`
  padding: 14px 40px;
  min-width: 200px;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  color: white;
  background: var(--primary-color);
  font-size: 15px;
  font-weight: 600;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 4px 12px rgba(45, 102, 157, 0.3);
  display: block;
  margin: 0 auto;

  &:hover {
    background: var(--dark-color);
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(45, 102, 157, 0.4);
  }

  &:active {
    transform: translateY(0);
    box-shadow: 0 2px 8px rgba(45, 102, 157, 0.3);
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
    overflow-x: auto;
  }
`

export const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
  min-width: 600px;
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
      border-bottom: 1px solid #f0f0f0;

      &:last-child {
        border-bottom: none;
      }

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

  &:hover {
    background: rgba(0, 0, 0, 0.05);
    transform: scale(1.2);
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
  background: white;
  border-radius: 20px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08);
  margin-top: 30px;
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

export const PageTitle = styled.div`
  text-align: center;
  margin-bottom: 10px;

  h1 {
    font-size: 32px;
    color: var(--primary-color);
    margin: 0;
    font-weight: 700;
    letter-spacing: 1px;
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
