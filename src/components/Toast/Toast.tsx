import { useEffect, useState, useCallback } from 'react'
import ReactDom from 'react-dom'
import {
  ToastContainer,
  ToastWrapper,
  ToastContent,
  ToastIcon,
  ToastMessage,
  ToastTitle,
  ToastDescription,
  ToastCloseButton,
  ToastProgress
} from './ToastStyled'

export type ToastType = 'success' | 'error' | 'warning' | 'info'

export interface ToastProps {
  id: string
  type: ToastType
  title: string
  message?: string
  duration?: number
  onClose: (id: string) => void
}

const iconMap = {
  success: 'fa-check-circle',
  error: 'fa-times-circle',
  warning: 'fa-exclamation-triangle',
  info: 'fa-info-circle'
}

export default function Toast({
  id,
  type,
  title,
  message,
  duration = 5000,
  onClose
}: ToastProps) {
  const [isExiting, setIsExiting] = useState(false)
  const [progress, setProgress] = useState(100)

  const handleClose = useCallback(() => {
    setIsExiting(true)
    setTimeout(() => {
      onClose(id)
    }, 300)
  }, [id, onClose])

  useEffect(() => {
    if (duration <= 0) return

    const startTime = Date.now()
    const endTime = startTime + duration

    const updateProgress = () => {
      const now = Date.now()
      const remaining = Math.max(0, endTime - now)
      const newProgress = (remaining / duration) * 100
      setProgress(newProgress)

      if (newProgress > 0) {
        requestAnimationFrame(updateProgress)
      }
    }

    const animationFrame = requestAnimationFrame(updateProgress)

    const timer = setTimeout(() => {
      handleClose()
    }, duration)

    return () => {
      clearTimeout(timer)
      cancelAnimationFrame(animationFrame)
    }
  }, [duration, handleClose])

  return (
    <ToastWrapper $type={type} $isExiting={isExiting}>
      <ToastContent>
        <ToastIcon $type={type}>
          <i className={`fas ${iconMap[type]}`} />
        </ToastIcon>
        <ToastMessage>
          <ToastTitle>{title}</ToastTitle>
          {message && <ToastDescription>{message}</ToastDescription>}
        </ToastMessage>
        <ToastCloseButton onClick={handleClose} aria-label="Cerrar notificación">
          <i className="fas fa-times" />
        </ToastCloseButton>
      </ToastContent>
      {duration > 0 && <ToastProgress $type={type} style={{ width: `${progress}%` }} />}
    </ToastWrapper>
  )
}

// Toast Container Component
interface ToastItem {
  id: string
  type: ToastType
  title: string
  message?: string
  duration?: number
}

interface ToastContainerComponentProps {
  toasts: ToastItem[]
  onRemove: (id: string) => void
  position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left' | 'top-center' | 'bottom-center'
}

export function ToastContainerComponent({
  toasts,
  onRemove,
  position = 'top-right'
}: ToastContainerComponentProps) {
  const portalRoot = document.getElementById('portal')
  if (!portalRoot) return null

  return ReactDom.createPortal(
    <ToastContainer $position={position}>
      {toasts.map((toast) => (
        <Toast
          key={toast.id}
          id={toast.id}
          type={toast.type}
          title={toast.title}
          message={toast.message}
          duration={toast.duration}
          onClose={onRemove}
        />
      ))}
    </ToastContainer>,
    portalRoot
  )
}
