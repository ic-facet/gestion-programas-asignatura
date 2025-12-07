import { useState, useCallback, createContext, useContext, ReactNode } from 'react'
import { ToastContainerComponent, ToastType } from '../components/Toast/Toast'

interface ToastItem {
  id: string
  type: ToastType
  title: string
  message?: string
  duration?: number
}

interface ToastContextType {
  toasts: ToastItem[]
  showToast: (type: ToastType, title: string, message?: string, duration?: number) => void
  success: (title: string, message?: string) => void
  error: (title: string, message?: string) => void
  warning: (title: string, message?: string) => void
  info: (title: string, message?: string) => void
  removeToast: (id: string) => void
  clearAll: () => void
}

const ToastContext = createContext<ToastContextType | undefined>(undefined)

let toastId = 0

interface ToastProviderProps {
  children: ReactNode
  position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left' | 'top-center' | 'bottom-center'
  maxToasts?: number
}

export function ToastProvider({
  children,
  position = 'top-right',
  maxToasts = 5
}: ToastProviderProps) {
  const [toasts, setToasts] = useState<ToastItem[]>([])

  const removeToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id))
  }, [])

  const showToast = useCallback(
    (type: ToastType, title: string, message?: string, duration: number = 5000) => {
      const id = `toast-${++toastId}`
      const newToast: ToastItem = { id, type, title, message, duration }

      setToasts((prev) => {
        const updated = [...prev, newToast]
        // Limitar el número de toasts
        if (updated.length > maxToasts) {
          return updated.slice(-maxToasts)
        }
        return updated
      })

      return id
    },
    [maxToasts]
  )

  const success = useCallback(
    (title: string, message?: string) => showToast('success', title, message),
    [showToast]
  )

  const error = useCallback(
    (title: string, message?: string) => showToast('error', title, message),
    [showToast]
  )

  const warning = useCallback(
    (title: string, message?: string) => showToast('warning', title, message),
    [showToast]
  )

  const info = useCallback(
    (title: string, message?: string) => showToast('info', title, message),
    [showToast]
  )

  const clearAll = useCallback(() => {
    setToasts([])
  }, [])

  return (
    <ToastContext.Provider
      value={{
        toasts,
        showToast,
        success,
        error,
        warning,
        info,
        removeToast,
        clearAll
      }}
    >
      {children}
      <ToastContainerComponent
        toasts={toasts}
        onRemove={removeToast}
        position={position}
      />
    </ToastContext.Provider>
  )
}

export function useToast() {
  const context = useContext(ToastContext)
  if (context === undefined) {
    throw new Error('useToast must be used within a ToastProvider')
  }
  return context
}

export default useToast
