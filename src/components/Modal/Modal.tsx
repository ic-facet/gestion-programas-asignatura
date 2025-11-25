import ReactDom from 'react-dom'
import Button from '../ui/Button'
import { ModalProps } from '../../constants/constants'
import { Overlay, ModalContainer, ModalContent, ModalFooter } from './ModalStyled'

export default function Modal({
  open,
  children,
  modalTitle,
  onClose,
  className = '',
  botonGuardado = false
}: ModalProps) {
  const portalRoot = document.getElementById('portal')
  if (!open || !portalRoot) return null

  return ReactDom.createPortal(
    <>
      <Overlay onClick={onClose} />
      <ModalContainer className={className}>
        <h2>{modalTitle}</h2>
        <ModalContent>{children}</ModalContent>
        <ModalFooter>
          <Button
            text={botonGuardado ? 'Guardar' : 'Cerrar'}
            onClick={onClose}
            variant={botonGuardado ? 'success' : 'secondary'}
            size="small"
          />
        </ModalFooter>
      </ModalContainer>
    </>,
    portalRoot
  )
}
