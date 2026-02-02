import styled, { keyframes } from 'styled-components'

const float = keyframes`
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-25px) rotate(2deg); }
`

const pulse = keyframes`
  0%, 100% { opacity: 0.5; transform: scale(1); }
  50% { opacity: 0.8; transform: scale(1.05); }
`

const slideInRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(40px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`

const slideInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`

const gradientMove = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`

export const Portada = styled.div`
  width: 100%;
  background: linear-gradient(
    -45deg,
    var(--secondary-color),
    var(--primary-color),
    #1a4d6d,
    var(--third-color)
  );
  background-size: 400% 400%;
  animation: ${gradientMove} 15s ease infinite;
  min-height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 80px 20px;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 32px 16px;
    min-height: auto;
  }

  &::before {
    content: '';
    position: absolute;
    top: -30%;
    right: -10%;
    width: 600px;
    height: 600px;
    background: rgba(255, 255, 255, 0.06);
    border-radius: 50%;
    animation: ${float} 8s ease-in-out infinite;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -20%;
    left: -8%;
    width: 500px;
    height: 500px;
    background: rgba(255, 255, 255, 0.04);
    border-radius: 50%;
    animation: ${float} 10s ease-in-out infinite reverse;
  }
`

export const Division = styled.div`
  width: 100%;
  padding: 28px 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, var(--primary-color) 0%, #1a4d6d 100%);
  color: white;
  font-weight: 600;
  letter-spacing: 3px;
  font-size: 16px;
  text-transform: uppercase;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.15);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.1),
      transparent
    );
    animation: shimmer 3s ease-in-out infinite;
  }

  @keyframes shimmer {
    0% {
      left: -100%;
    }
    50%,
    100% {
      left: 100%;
    }
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 3px;
    background: linear-gradient(90deg, transparent, white, transparent);
    border-radius: 2px;
  }

  @media (max-width: 768px) {
    font-size: 14px;
    letter-spacing: 2px;
    padding: 24px 15px;
  }
`

export const SeccionFuncionalidades = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 80px 40px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
  gap: 40px;
  align-items: stretch;
  background: linear-gradient(180deg, #f8fafc 0%, #ffffff 100%);

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 50px 20px;
    gap: 30px;
  }
`

export const Funcionalidad = styled.div`
  position: relative;
  border-radius: 24px;
  padding: 48px 36px;
  background: white;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  border: 1px solid rgba(0, 0, 0, 0.04);
  overflow: hidden;
  cursor: pointer;
  animation: ${slideInUp} 0.6s ease-out backwards;

  &:nth-child(1) {
    animation-delay: 0.1s;
  }
  &:nth-child(2) {
    animation-delay: 0.2s;
  }
  &:nth-child(3) {
    animation-delay: 0.3s;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 5px;
    background: linear-gradient(
      90deg,
      var(--primary-color),
      var(--third-color),
      var(--secondary-color)
    );
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -50%;
    right: -50%;
    width: 200px;
    height: 200px;
    background: radial-gradient(
      circle,
      var(--secondary-color) 0%,
      transparent 70%
    );
    opacity: 0;
    transition:
      opacity 0.5s ease,
      transform 0.5s ease;
    pointer-events: none;
  }

  &:hover {
    transform: translateY(-12px) scale(1.02);
    box-shadow:
      0 25px 60px rgba(45, 102, 157, 0.15),
      0 10px 20px rgba(0, 0, 0, 0.08);

    &::before {
      transform: scaleX(1);
    }

    &::after {
      opacity: 0.15;
      transform: translate(-20%, -20%);
    }
  }

  &:active {
    transform: translateY(-8px) scale(1.01);
  }

  @media (max-width: 768px) {
    font-size: 13px;
    line-height: 1.5;
  }
`

export const TituloFuncionalidad = styled.h1`
  width: 100%;
  text-align: center;
  font-size: 20px;
  padding: 16px 0 8px;
  color: var(--primary-color);
  font-weight: 700;
  letter-spacing: 0.3px;
  margin: 0;
  line-height: 1.3;
`

export const IconoFuncionalidad = styled.div`
  height: 88px;
  width: 88px;
  background: linear-gradient(135deg, var(--primary-color) 0%, #1a4d6d 100%);
  color: white;
  border-radius: 24px;
  margin: 0 auto 24px;
  font-size: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow:
    0 10px 30px rgba(45, 102, 157, 0.25),
    inset 0 -2px 10px rgba(0, 0, 0, 0.1);
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.3),
      transparent
    );
    transition: left 0.5s ease;
  }

  ${Funcionalidad}:hover & {
    transform: scale(1.1) rotate(-5deg);
    box-shadow:
      0 15px 40px rgba(45, 102, 157, 0.35),
      inset 0 -2px 10px rgba(0, 0, 0, 0.1);

    &::before {
      left: 100%;
    }
  }

  i {
    z-index: 1;
    transition: transform 0.3s ease;
  }

  ${Funcionalidad}:hover & i {
    transform: scale(1.1);
  }
`

export const DescripcionFuncionalidad = styled.div`
  padding: 12px 8px;
  font-size: 15px;
  letter-spacing: 0.2px;
  line-height: 1.7;
  text-align: center;
  color: #64748b;

  b {
    color: var(--primary-color);
  }
`

export const TextoBienvenidaContainer = styled.div`
  max-width: 580px;
  padding: 56px 48px;
  border-radius: 28px;
  display: flex;
  background: rgba(255, 255, 255, 0.97);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  box-shadow:
    0 25px 80px rgba(0, 0, 0, 0.2),
    0 10px 30px rgba(0, 0, 0, 0.1);
  position: relative;
  z-index: 1;
  animation: ${slideInRight} 0.8s cubic-bezier(0.4, 0, 0.2, 1);
  border: 1px solid rgba(255, 255, 255, 0.5);

  &::before {
    content: '';
    position: absolute;
    top: -1px;
    left: -1px;
    right: -1px;
    bottom: -1px;
    border-radius: 29px;
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.5), transparent);
    z-index: -1;
    pointer-events: none;
  }

  @media (max-width: 1024px) {
    margin: 0 auto;
  }

  @media (max-width: 768px) {
    margin: 0 20px;
    padding: 32px 24px;
    border-radius: 20px;
  }
`

export const LogoFacet = styled.img`
  height: 110px;
  margin-bottom: 16px;
  filter: drop-shadow(0 6px 20px rgba(0, 0, 0, 0.15));
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  animation: ${pulse} 4s ease-in-out infinite;

  &:hover {
    transform: scale(1.08) rotate(-2deg);
    filter: drop-shadow(0 8px 25px rgba(0, 0, 0, 0.2));
  }

  @media (max-width: 768px) {
    height: 90px;
    margin-bottom: 12px;
  }
`

export const InstitucionalBadge = styled.div`
  display: inline-flex;
  align-items: center;
  padding: 8px 20px;
  background: linear-gradient(
    135deg,
    rgba(45, 102, 157, 0.1) 0%,
    rgba(26, 77, 109, 0.1) 100%
  );
  border: 1px solid rgba(45, 102, 157, 0.2);
  border-radius: 50px;
  font-size: 13px;
  font-weight: 600;
  color: var(--primary-color);
  letter-spacing: 1px;
  text-transform: uppercase;
  margin-bottom: 20px;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.4),
      transparent
    );
    transition: left 0.5s ease;
  }

  &:hover::before {
    left: 100%;
  }

  @media (max-width: 768px) {
    font-size: 12px;
    padding: 6px 16px;
    margin-bottom: 10px;
  }
`

export const SistemaNombre = styled.h1`
  font-size: 52px;
  font-weight: 800;
  color: var(--primary-color);
  margin: 0 0 8px 0;
  text-align: center;
  letter-spacing: 2px;
  text-transform: uppercase;
  line-height: 1.1;
  text-shadow: 0 2px 10px rgba(45, 102, 157, 0.15);

  @media (max-width: 768px) {
    font-size: 40px;
    letter-spacing: 1px;
    margin-bottom: 4px;
  }
`

export const SistemaDescripcion = styled.h2`
  font-size: 18px;
  font-weight: 600;
  color: #475569;
  margin: 0 0 20px 0;
  text-align: center;
  letter-spacing: 0.3px;
  line-height: 1.4;

  @media (max-width: 768px) {
    font-size: 16px;
    margin-bottom: 10px;
  }
`

export const AccionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 24px;
  background: linear-gradient(
    135deg,
    rgba(45, 102, 157, 0.05) 0%,
    rgba(26, 77, 109, 0.05) 100%
  );
  border-radius: 16px;
  border: 1px solid rgba(45, 102, 157, 0.1);
  margin: 16px 0;
  width: 100%;
  max-width: 450px;

  @media (max-width: 768px) {
    padding: 16px;
    gap: 10px;
    margin: 10px 0;
  }
`

export const AccionTexto = styled.p`
  font-size: 15px;
  color: #64748b;
  text-align: center;
  line-height: 1.6;
  margin: 0;
  font-weight: 400;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`

export const StatsBar = styled.div`
  display: flex;
  gap: 40px;
  margin-top: 32px;
  padding-top: 24px;
  border-top: 1px solid rgba(0, 0, 0, 0.08);
  width: 100%;
  justify-content: center;

  @media (max-width: 600px) {
    gap: 24px;
    flex-wrap: wrap;
  }
`

export const LoginButton = styled.button`
  background: linear-gradient(135deg, var(--primary-color) 0%, #1a4d6d 100%);
  color: white;
  border: none;
  padding: 16px 48px;
  font-size: 16px;
  font-weight: 600;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow:
    0 4px 15px rgba(45, 102, 157, 0.3),
    0 2px 8px rgba(0, 0, 0, 0.1);
  letter-spacing: 0.5px;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.2),
      transparent
    );
    transition: left 0.5s ease;
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow:
      0 8px 25px rgba(45, 102, 157, 0.4),
      0 4px 12px rgba(0, 0, 0, 0.15);

    &::before {
      left: 100%;
    }
  }

  &:active {
    transform: translateY(0);
    box-shadow:
      0 4px 15px rgba(45, 102, 157, 0.3),
      0 2px 8px rgba(0, 0, 0, 0.1);
  }

  @media (max-width: 768px) {
    padding: 14px 40px;
    font-size: 15px;
  }
`

export const StatsContainer = styled.div`
  display: flex;
  gap: 32px;
  margin-top: 32px;
  padding-top: 24px;
  border-top: 1px solid rgba(0, 0, 0, 0.08);
  width: 100%;
  justify-content: center;

  @media (max-width: 480px) {
    gap: 20px;
    flex-direction: column;
    align-items: center;
  }
`

export const StatItem = styled.div`
  text-align: center;

  span {
    display: block;
    font-size: 28px;
    font-weight: 700;
    color: var(--primary-color);
    line-height: 1.2;
  }

  small {
    font-size: 12px;
    color: #94a3b8;
    text-transform: uppercase;
    letter-spacing: 1px;
  }
`

// ==================== DASHBOARD STYLES ====================

export const DashboardContainer = styled.div`
  width: 100%;
  min-height: calc(100vh - 70px);
  background: linear-gradient(180deg, #f8fafc 0%, #e2e8f0 100%);
  padding: 40px 20px;

  @media (max-width: 768px) {
    padding: 24px 16px;
  }
`

export const DashboardContent = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr;
  gap: 32px;
  animation: ${slideInUp} 0.6s ease-out;
`

export const WelcomeSection = styled.div`
  background: linear-gradient(135deg, var(--primary-color) 0%, #1a4d6d 100%);
  border-radius: 24px;
  padding: 40px;
  color: white;
  position: relative;
  overflow: hidden;
  box-shadow: 0 20px 60px rgba(45, 102, 157, 0.25);

  &::before {
    content: '';
    position: absolute;
    top: -50%;
    right: -20%;
    width: 400px;
    height: 400px;
    background: rgba(255, 255, 255, 0.08);
    border-radius: 50%;
    animation: ${float} 10s ease-in-out infinite;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -30%;
    left: -10%;
    width: 300px;
    height: 300px;
    background: rgba(255, 255, 255, 0.05);
    border-radius: 50%;
    animation: ${float} 8s ease-in-out infinite reverse;
  }

  @media (max-width: 768px) {
    padding: 28px 24px;
  }
`

export const WelcomeContent = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 24px;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`

export const WelcomeInfo = styled.div`
  flex: 1;
`

export const WelcomeTitle = styled.h1`
  font-size: 32px;
  font-weight: 700;
  margin: 0 0 12px 0;
  letter-spacing: 0.5px;

  @media (max-width: 768px) {
    font-size: 26px;
  }
`

export const WelcomeSubtitle = styled.p`
  font-size: 16px;
  opacity: 0.9;
  margin: 0;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`

export const UserAvatar = styled.div`
  width: 90px;
  height: 90px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 40px;
  color: white;
  border: 3px solid rgba(255, 255, 255, 0.3);
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
  animation: ${pulse} 4s ease-in-out infinite;
  flex-shrink: 0;

  @media (max-width: 768px) {
    width: 70px;
    height: 70px;
    font-size: 32px;
  }
`

export const RoleBadge = styled.div<{ $roleColor?: string }>`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 18px;
  background: ${(props) => props.$roleColor || 'rgba(255, 255, 255, 0.2)'};
  backdrop-filter: blur(10px);
  border-radius: 50px;
  font-size: 13px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-top: 16px;
  border: 1px solid rgba(255, 255, 255, 0.3);

  i {
    font-size: 12px;
  }

  @media (max-width: 768px) {
    font-size: 12px;
    padding: 6px 14px;
  }
`

export const QuickAccessSection = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 24px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 16px;
  }
`

export const QuickAccessCard = styled.div`
  background: white;
  border-radius: 20px;
  padding: 28px;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  border: 1px solid rgba(0, 0, 0, 0.04);
  position: relative;
  overflow: hidden;
  animation: ${slideInUp} 0.6s ease-out backwards;

  &:nth-child(1) {
    animation-delay: 0.1s;
  }
  &:nth-child(2) {
    animation-delay: 0.2s;
  }
  &:nth-child(3) {
    animation-delay: 0.3s;
  }
  &:nth-child(4) {
    animation-delay: 0.4s;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(
      90deg,
      var(--primary-color),
      var(--secondary-color)
    );
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.4s ease;
  }

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 50px rgba(45, 102, 157, 0.15);

    &::before {
      transform: scaleX(1);
    }
  }

  @media (max-width: 768px) {
    padding: 22px;
  }
`

export const QuickAccessIcon = styled.div<{ $color?: string }>`
  width: 56px;
  height: 56px;
  border-radius: 16px;
  background: ${(props) =>
    props.$color ||
    'linear-gradient(135deg, var(--primary-color) 0%, #1a4d6d 100%)'};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  color: white;
  margin-bottom: 16px;
  box-shadow: 0 8px 24px rgba(45, 102, 157, 0.25);
  transition: all 0.3s ease;

  ${QuickAccessCard}:hover & {
    transform: scale(1.1) rotate(-5deg);
  }
`

export const QuickAccessTitle = styled.h3`
  font-size: 18px;
  font-weight: 700;
  color: #1e293b;
  margin: 0 0 8px 0;
`

export const QuickAccessDescription = styled.p`
  font-size: 14px;
  color: #64748b;
  margin: 0;
  line-height: 1.5;
`

export const InfoSection = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 24px;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`

export const InfoCard = styled.div`
  background: white;
  border-radius: 20px;
  padding: 28px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  border: 1px solid rgba(0, 0, 0, 0.04);
`

export const InfoCardHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 20px;
  padding-bottom: 16px;
  border-bottom: 2px solid #f1f5f9;
`

export const InfoCardTitle = styled.h3`
  font-size: 18px;
  font-weight: 700;
  color: var(--primary-color);
  margin: 0;
  display: flex;
  align-items: center;
  gap: 10px;

  i {
    font-size: 20px;
  }
`

export const NewsItem = styled.div`
  padding: 16px 0;
  border-bottom: 1px solid #f1f5f9;
  transition: all 0.3s ease;

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    padding-left: 8px;
  }
`

export const NewsDate = styled.div`
  font-size: 12px;
  color: #94a3b8;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 6px;
`

export const NewsTitle = styled.h4`
  font-size: 15px;
  font-weight: 600;
  color: #334155;
  margin: 0 0 6px 0;
  line-height: 1.4;
`

export const NewsDescription = styled.p`
  font-size: 13px;
  color: #64748b;
  margin: 0;
  line-height: 1.5;
`

export const SystemInfoItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 0;
  border-bottom: 1px solid #f1f5f9;

  &:last-child {
    border-bottom: none;
  }
`

export const SystemInfoLabel = styled.span`
  font-size: 14px;
  color: #64748b;
  font-weight: 500;
`

export const SystemInfoValue = styled.span`
  font-size: 14px;
  color: #334155;
  font-weight: 600;
`

export const DashboardFooter = styled.div`
  background: white;
  border-radius: 20px;
  padding: 24px 28px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  border: 1px solid rgba(0, 0, 0, 0.04);
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 16px;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    padding: 20px;
  }
`

export const FooterInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`

export const FooterText = styled.p`
  font-size: 13px;
  color: #64748b;
  margin: 0;

  strong {
    color: var(--primary-color);
  }
`

export const FooterContact = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 13px;
  color: #64748b;

  i {
    color: var(--primary-color);
    font-size: 14px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 8px;
  }
`

export const SectionTitle = styled.h2`
  font-size: 22px;
  font-weight: 700;
  color: #1e293b;
  margin: 0 0 8px 0;
  display: flex;
  align-items: center;
  gap: 12px;

  i {
    color: var(--primary-color);
    font-size: 20px;
  }
`

export const SectionSubtitle = styled.p`
  font-size: 14px;
  color: #64748b;
  margin: 0 0 20px 0;
`
