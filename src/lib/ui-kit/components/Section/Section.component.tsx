import { ReactNode } from 'react';
import { StyledSection } from './Section.styles';

export interface SectionProps {
  children: ReactNode;
  className?: string;
  shouldNotScroll?: boolean;
  isCentered?: boolean;
}

export const Section = ({
  children,
  shouldNotScroll,
  isCentered,
  className,
}: SectionProps) => {
  return (
    <StyledSection
      className={className}
      isCentered={isCentered}
      shouldNotScroll={shouldNotScroll}
    >
      {children}
    </StyledSection>
  );
};
