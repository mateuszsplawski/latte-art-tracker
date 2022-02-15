import { ReactNode } from 'react';
import { StyledShadowWrapper as Shadow } from './ShadowWrapper.styles';

interface ShadowWrapperProps {
  children: ReactNode;
}

export const ShadowWrapper = ({ children }: ShadowWrapperProps) => {
  return <Shadow>{children}</Shadow>;
};
