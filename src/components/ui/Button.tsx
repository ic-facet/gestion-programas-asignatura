import { StyledButton } from './ButtonStyled'

interface ButtonProps {
  text?: string
  onClick: () => void
  link?: string
  cssClass?: string
  disabled?: boolean
  loading?: boolean
  variant?: 'primary' | 'secondary' | 'danger' | 'success' | 'outline' | 'ghost'
  size?: 'small' | 'medium' | 'large'
  fullWidth?: boolean
  icon?: React.ReactNode
  iconPosition?: 'left' | 'right'
  title?: string
  type?: 'button' | 'submit' | 'reset'
}

export default function Button({
  text,
  onClick,
  cssClass,
  disabled,
  loading = false,
  variant = 'primary',
  size = 'medium',
  fullWidth = false,
  icon,
  iconPosition = 'left',
  title,
  type = 'button'
}: ButtonProps) {
  const isIconOnly = icon && !text

  return (
    <StyledButton
      type={type}
      onClick={onClick}
      className={cssClass}
      disabled={disabled || loading}
      $variant={variant}
      $size={size}
      $loading={loading}
      $fullWidth={fullWidth}
      $iconOnly={isIconOnly || false}
      title={title}
      aria-busy={loading}
      aria-disabled={disabled}
    >
      {loading ? (
        <span style={{ opacity: 0 }}>{text || icon}</span>
      ) : (
        <>
          {icon && iconPosition === 'left' && icon}
          {text}
          {icon && iconPosition === 'right' && icon}
        </>
      )}
    </StyledButton>
  )
}
