import { StyledButton } from './ButtonStyled'

interface ButtonProps {
  text: string
  onClick: () => void
  link?: string
  cssClass?: string
  disabled?: boolean
  variant?: 'primary' | 'secondary' | 'danger' | 'success'
  size?: 'small' | 'medium' | 'large'
}

export default function Button({
  text,
  onClick,
  cssClass,
  disabled,
  variant = 'primary',
  size = 'medium'
}: ButtonProps) {
  return (
    <StyledButton
      type="button"
      onClick={onClick}
      className={cssClass}
      disabled={disabled}
      $variant={variant}
      $size={size}
    >
      {text}
    </StyledButton>
  )
}
