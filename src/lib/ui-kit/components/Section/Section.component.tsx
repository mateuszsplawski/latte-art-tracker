import { ReactNode } from "react";
import { StyledSection } from "./Section.styles";

interface SectionProps {
  children: ReactNode;
  className?: string;
  shouldNotScroll?: boolean;
}

export const Section = ({
  children,
  shouldNotScroll,
  className,
}: SectionProps) => {
  return (
    <StyledSection className={className} shouldNotScroll={shouldNotScroll}>
      {children}
    </StyledSection>
  );
};
