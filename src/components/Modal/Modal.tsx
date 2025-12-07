import ReactDom from 'react-dom'
import { useEffect, useCallback, useState, useRef } from 'react'
import Button from '../ui/Button'
import { ModalProps } from '../../constants/constants'
import { Overlay, ModalContainer, ModalContent, ModalFooter, CloseButton } from './ModalStyled'

export default function Modal({
  open,
  children,
  modalTitle,
  onClose,
  className = '',
  botonGuardado = false
}: ModalProps) {
  const [isClosing, setIsClosing] = useState(false)
  const modalRef = useRef<HTMLDivElement>(null)
  const previousActiveElement = useRef<HTMLElement | null>(null)

  const handleClose = useCallback(() => {
    setIsClosing(true)
    setTimeout(() => {
      setIsClosing(false)
      onClose()
    }, 300)
  }, [onClose])

  // Manejar tecla Escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && open) {
        handleClose()
      }
    }

    if (open) {
      document.addEventListener('keydown', handleEscape)
      // Guardar el elemento activo anterior
      previousActiveElement.current = document.activeElement as HTMLElement
      // Bloquear scroll del body
      document.body.style.overflow = 'hidden'
      // Focus en el modal
      modalRef.current?.focus()
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = ''
      // Restaurar focus al cerrar
      if (previousActiveElement.current) {
        previousActiveElement.current.focus()
      }
    }
  }, [open, handleClose])

  // Trap focus dentro del modal
  useEffect(() => {
    if (!open || !modalRef.current) return

    const focusableElements = modalRef.current.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    )
    const firstElement = focusableElements[0] as HTMLElement
    const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement

    const handleTabKey = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return

      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          e.preventDefault()
          lastElement?.focus()
        }
      } else {
        if (document.activeElement === lastElement) {
          e.preventDefault()
          firstElement?.focus()
        }
      }
    }

    document.addEventListener('keydown', handleTabKey)
    return () => document.removeEventListener('keydown', handleTabKey)
  }, [open])

  const portalRoot = document.getElementById('portal')
  if (!open || !portalRoot) return null

  return ReactDom.createPortal(
    <>
      <Overlay
        onClick={handleClose}
        $isClosing={isClosing}
        aria-hidden="true"
      />
      <ModalContainer
        className={className}
        $isClosing={isClosing}
        ref={modalRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        tabIndex={-1}
      >
        <h2 id="modal-title">
          {modalTitle}
          <CloseButton
            onClick={handleClose}
            aria-label="Cerrar modal"
            title="Cerrar (Esc)"
          >
            <i className="fas fa-times" />
          </CloseButton>
        </h2>
        <ModalContent>{children}</ModalContent>
        <ModalFooter>
          {!botonGuardado && (
            <Button
              text="Cancelar"
              onClick={handleClose}
              variant="ghost"
              size="small"
            />
          )}
          <Button
            text={botonGuardado ? 'Guardar' : 'Aceptar'}
            onClick={handleClose}
            variant={botonGuardado ? 'success' : 'primary'}
            size="small"
          />
        </ModalFooter>
      </ModalContainer>
    </>,
    portalRoot
  )
}
