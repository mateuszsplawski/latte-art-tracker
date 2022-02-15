import { ReactNode } from 'react';

import { Seo, SeoMetadata } from 'lib/shared';
import { Navigation } from './components/Navigation/Navigation.component';
import {
  StyledLayoutWrapper as Wrapper,
  StyledMain as Main,
} from './Layout.styles';

interface LayoutProps extends SeoMetadata {
  children: ReactNode;
  hasNavigation?: boolean;
}

export const Layout = ({
  children,
  metaDescription,
  metaTitle,
  metaRobots,
  hasNavigation = true,
}: LayoutProps) => {
  return (
    <>
      <Seo
        metaTitle={metaTitle}
        metaDescription={metaDescription}
        metaRobots={metaRobots}
      />
      <Wrapper>
        {hasNavigation && <Navigation />}
        <Main>{children}</Main>
      </Wrapper>
    </>
  );
};
